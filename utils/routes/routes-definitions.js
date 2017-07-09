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
  },
  signup: {
    name: 'signup',
    pattern: '/sign-up',
    page: 'auth/sign-up'
  }
}

const homeRoutes = {
  home: {
    name: 'index',
    pattern: '/'
  },
  secret: {
    name: 'secret',
    pattern: '/secret'
  }
}

module.exports = {
  authRoutes,
  homeRoutes
}
