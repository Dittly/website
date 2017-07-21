/* eslint-disable import/no-commonjs */
const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()
const routesDefinitions = require('./routes-definitions')

// Populates all defined routes
for (const [, routesDefinition] of Object.entries(routesDefinitions)) {
  for (const [, {name, pattern, page}] of Object.entries(routesDefinition)) {
    if (page) {
      routes.add(name, pattern, page)
    } else {
      routes.add(name, pattern)
    }
  }
}
