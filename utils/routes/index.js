import nextRoutesFn from 'next-routes'
import routesDefinitions from './routes-definitions'

export const nextRoutes = nextRoutesFn()

// Populates all defined routes
for (const [, routesDefinition] of Object.entries(routesDefinitions)) {
  for (const [, {name, pattern, page}] of Object.entries(routesDefinition)) {
    if (page) {
      nextRoutes.add(name, pattern, page)
    } else {
      nextRoutes.add(name, pattern)
    }
  }
}

export const Link = nextRoutes.Link
export const Router = nextRoutes.Router
