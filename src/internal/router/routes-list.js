'use strict'

import StarMatch from '../../components/StarMatch/StarMatch'
import Docs from '../../docs/Docs'

const listPublicRoutes = {
  rootPath: "/",
  routes: [
    {
      root: true,
      name: 'starMatch',
      path: '/',
      component: StarMatch
    },
    {
      root: true,
      name: 'docs',
      path: '/docs',
      component: Docs
    }
  ]
}

export {
    listPublicRoutes,
};