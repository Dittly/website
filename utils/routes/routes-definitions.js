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
  welcome: {
    name: 'welcome',
    pattern: '/welcome'
  }
}

const projectRoutes = {
  create: {
    name: 'projects/create',
    pattern: '/projects/create'
  }
}

module.exports = {
  authRoutes,
  homeRoutes,
  projectRoutes
}
