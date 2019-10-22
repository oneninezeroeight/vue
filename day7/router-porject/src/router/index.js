import Vue from 'vue'
// 引入路由模块
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// 你必须调用use去使用路由
Vue.use(VueRouter);
export default new VueRouter({
    // hash和history模式
    mode: 'history',
    // 接受路由的配置
    routes: [{
        path: '/home',
        name: 'home',
        component: Home
    }, {
        path: '/mine/:userId',
        name: 'mine',
        component: () => {
            // 懒加载
            return import('../views/Mine.vue')
        },
        children: [{
            path: 'childa',
            name: 'childa',
            component: () => {
                // 懒加载
                return import('../views/Childa.vue')
            },
        }]
    }, {
        path: '/',
        redirect: '/mine'
    }]
})