import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts from './views/Posts'
import Login from './views/Login'
import Logout from './views/Logout'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
        path: '/',
        name: 'posts',
        component: Posts,
        meta: {
            requiresLogin: true
          }
        },
        {
        path: '/login',
        name: 'login',
        component: Login,
        },
        {
        path: '/logout',
        name: 'logout',
        component: Logout,
        },
    ]
})