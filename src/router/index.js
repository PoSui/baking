import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        redirect:'index',
        children: [
            {
                path: '/reg',
                component: () => import('../views/home/RegView.vue')
            },
            {
                path: '/login',
                component: () => import('../views/home/LoginView.vue')
            },
            {
                path:'/index',
                component:()=>import('../views/home/IndexView.vue')
            }
        ]
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AdminView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
