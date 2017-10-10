/**
 *  name - The route name
 *  pattern - Express-style route pattern (uses path-to-regexp)
 *  page - Page inside ./pages to be rendered (defaults to name)
 */
export const authRoutes = {
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

export const homeRoutes = {
  home: {
    name: 'index',
    pattern: '/'
  },
  welcome: {
    name: 'welcome',
    pattern: '/welcome'
  }
}

export const projectRoutes = {
  create: {
    name: 'projects/create',
    pattern: '/projects/create'
  },
  details: {
    name: 'projects/details',
    pattern: '/projects/:id'
  }
}

export const profileRoutes = {
  profile: {
    name: 'profile',
    pattern: '/profile'
  }
}

export default {
  authRoutes,
  homeRoutes,
  projectRoutes
}
