import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

/*const AdminSub = (resolve: any) => {
    require.ensure(['./../components/AdminProfile.vue'], require => {
        resolve(require('./../components/AdminProfile.vue'));
    }, 'admin');
};*/

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },

    {
        path: '/admin',
        name: 'admin',
        component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
        children: [
            {
                path: 'profile',
                name: 'admin_profile',
                component: () => import(/* webpackChunkName: "admin" */ '../components/admin/AdminProfile.vue'),
            },
            {
                path: 'task',
                name: 'admin_task',
                component: () => import(/* webpackChunkName: "admin" */ '../components/admin/AdminTask.vue'),
            },
        ]
    },

    {
        path: '/cashier',
        name: 'cashier',
        component: () => import(/* webpackChunkName: "cashier" */ '../views/Cashier.vue'),
        children: [
            {
                path: 'profile',
                name: 'admin_profile',
                component: () => import(/* webpackChunkName: "cashier" */ '../components/cashier/CashierProfile.vue'),
            },
            {
                path: 'task',
                name: 'admin_task',
                component: () => import(/* webpackChunkName: "cashier" */ '../components/cashier/CashierTask.vue'),
            },
        ]
    },


    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
