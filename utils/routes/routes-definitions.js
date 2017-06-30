/* eslint-disable import/no-commonjs */

/**
 *  name - The route name
 *  pattern - Express-style route pattern (uses path-to-regexp)
 *  page - Page inside ./pages to be rendered (defaults to name)
 */
const authRoutes = {
  login: {
    name: 'login',
    pattern: '/login',
    page: 'auth/login'
  }
}

const homeRoutes = {
  home: {
    name: 'index',
    pattern: '/'
  }
}

module.exports = {
  authRoutes,
  homeRoutes
}
