/* eslint-env node */
import next from 'next'
import http from 'http'
import {nextRoutes} from './utils/routes'

const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = nextRoutes.getRequestHandler(app)

app.prepare().then(() => {
  http.createServer(handler).listen(3000, error => {
    if (error) {
      throw error
    }
    console.log('> Ready on http://localhost:3000')
  })
})
