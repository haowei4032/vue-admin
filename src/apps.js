import router from './router'
import './apps.js'

const apps = {
    isLogined: () => {
        return sessionStorage.getItem('name')
    }
};

router.beforeEach((to, from, next) => {
    if (to.meta.title) document.title = to.meta.title
    if (apps.isLogined()) {
        next()
    } else {
        to.path !== '/login' ? next({path: '/login', query: {redirect: to.path}}) : next()
    }
})
