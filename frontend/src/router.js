import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from './views/LoginPage.vue'
import UserListPage from './views/UserListPage.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: LoginPage
        },
        {
            path: '/user/list',
            name: 'userList',
            component: UserListPage
        },
    ]
})
