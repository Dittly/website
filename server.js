/* eslint-env node */
/* eslint-disable import/no-commonjs */
const next = require('next')
const { createServer } = require('http')
const routes = require('./utils/routes')

const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  createServer(handler).listen(3000, (error) => {
    if (error) {
      throw error
    }
    console.log('> Ready on http://localhost:3000')
  })
})
