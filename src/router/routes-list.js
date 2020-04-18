'use strict'

import StarMatch from '../components/StarMatch/StarMatch'
//import SignUp from '../components/pages/sign-up'

const listPublicRoutes = {
  rootPath: "/",
  routes: [
    {
      root: true,
      name: 'starMatch',
      path: '/',
      component: StarMatch
    }
    // ,
    // {
    //   root: true,
    //   name: 'docs',
    //   path: '/docs',
    //   component: Docs
    // }
  ]
}

export {
    listPublicRoutes,
};