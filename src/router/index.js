import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        redirect:'/index',
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
            },
            {
                path:'/list',
                component:()=> import('../views/home/ListView.vue')
            },
            {
                path:'/detail',
                component:()=> import('../views/home/DetailView.vue')
            },
            {
                path:'/personal',
                component:()=>import('../views/home/PersonalView.vue'),
                redirect:'pindex',
                children:[
                    {
                        path:'pindex',
                        component: ()=>import("../views/personal/PersonalIndexView.vue")
                    },
                    {
                        path:'management',
                        component: ()=>import("../views/personal/PersonalManagementView.vue")
                    },
                    {
                        path:'/post',
                        component: ()=>import("../views/personal/PersonalPostView.vue")
                    }
                ]
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
