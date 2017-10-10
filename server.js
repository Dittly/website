/* eslint-env node */
import next from 'next'
import micro from 'micro'
import microRoute from 'micro-route'
import {nextRoutes} from './utils/routes'
import {recordEvent} from './utils/tracking'

const port = parseInt(process.env.PORT, 10) || 3000
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = nextRoutes.getRequestHandler(app)

const trackRoute = microRoute('/_track/:collection', 'POST')

const server = micro(async (req, res) => {
  const trackRouteResult = trackRoute(req)
  // FIXME: Only allow requests from www.dittly.co to prevent anyone from sending POST requests
  if (trackRouteResult) {
    const event = await micro.json(req)

    // Send tracking data
    recordEvent(trackRouteResult.params.collection, event)

    // We're done here
    return 'OK'
  }
  return handler(req, res)
})

app.prepare().then(() => {
  server.listen(port, error => {
    if (error) throw error
    console.log(`> Ready on http://localhost:${port}`)
  })
})
