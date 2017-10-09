/* eslint-env node */
import next from 'next'
import micro from 'micro'
import {nextRoutes} from './utils/routes'

const port = parseInt(process.env.PORT, 10) || 3000
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = nextRoutes.getRequestHandler(app)

const server = micro(async (req, res) => {
  return handler(req, res)
})

app.prepare().then(() => {
  server.listen(port, error => {
    if (error) throw error
    console.log(`> Ready on http://localhost:${port}`)
  })
})
