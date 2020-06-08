import Vue from 'vue'
import Router from 'vue-router'
import login from './views/Login'
import Home from './views/Posts'
import logout from './views/Logout'
import PageNotFound from './components/PageNotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        requiresLogged: true
      }
    },
    {
      path: '/logout',
      name: 'logout',
      component: logout,
      meta: {
        requiresAuth: true
      }
    },
    { path: "*", 
    name: 'PageNotFound',
    component: PageNotFound, 
  }
  ]
})
