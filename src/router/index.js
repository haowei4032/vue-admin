import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '*',
            component: () => import('@/views/ErrorPage'),
        },
        {
            path: '/',
            component: () => import('@/views/Dashboard'),
            meta: {
                title: '仪表盘'
            }
        },
        {
            path: '/login',
            component: () => import('@/views/Login'),
            meta: {
                title: '后台登录'
            }
        }
    ]
})
