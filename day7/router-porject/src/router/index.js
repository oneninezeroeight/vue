import Vue from 'vue'
// 引入路由模块
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import axios from 'axios'
import qs from 'qs'
// 你必须调用use去使用路由
Vue.use(VueRouter);
let router = new VueRouter({
    scrollBehavior(to, from, savedPosition) {
        console.log(to, from, savedPosition)
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
        // return 期望滚动到哪个的位置
    },
    // hash和history模式
    mode: 'hash',
    // 接受路由的配置
    routes: [{
        path: '/home',
        name: 'home',
        component: Home,
        // 局部守卫
        beforeEach() {}
    }, {
        path: '/mine',
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
        path: '/login',
        name: 'login',
        component: Login
    }, {
        path: '/',
        redirect: '/mine'
    }]
})
// 全局守卫
router.beforeEach(async (to, from, next) => {
    try {
        let statue = await axios.post('http://localhost:3000/autologin', qs.stringify({
            // 从cookie拿
            token: ''
        }))
        // console.log(statue.data, to, from)

        // 令牌信息为真则进路由
        // 如果令牌为真，不过怎样都放它进路由
        if (statue.data) {
            next()
        }
        // 令牌为假或者没有令牌的情况
        else {
            // 如果你想在想进login登录页，放你进去
            if (to.name == 'login') {
                next()
            }
            // 如果你想去其他页面的话，通通重定向到登录页
            else {
                // 进入登录页路由
                router.push({
                    name: 'login'
                })
            }
        }
        // console.log(to, from, next)
        // next触发就可以让你通行进入路由
    } catch (error) {
        // ajax异常动作
        next()
    }
})

export default router