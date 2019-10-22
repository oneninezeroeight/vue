# vue cli

全局安装，全局拥有一个vue的命令
```bash
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

创建一个项目：
```bash
vue create my-project
# OR
npm run serve
vue ui
```
vue-cli webpack的封装
```bash
npm install xxx
```

# 前端路由原理

- hash 兼容最强，但是url不大美观
- h5 history模式 url看上去好看点

监听hashchange，vue-router，不断去让url的hash发生改变，从而触发回调函数异步渲染页面
```js
window.onhashchange = (e) => {
    console.log('oldURL:', e.oldURL)
    console.log('newURL:', e.newURL)
}
```
h5路由模式 / 绝对路径 寻找根路径
```js
window.addEventListener('popstate', (e) => {
    console.log(e)
});
```
安装路由模块
```bash
cnpm install vue-router
```
路由懒加载
```js
import Vue from 'vue'
// 引入路由模块
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mine from '../views/Mine.vue'
// 你必须调用use去使用路由
Vue.use(VueRouter);
export default new VueRouter({
    mode: 'hash',
    // 接受路由的配置
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: '/mine',
        name: 'mine',
        component: Mine
    }]
})
```
编程式导航和声明式导航
```html
<router-link :to="...">
<router-link :to="{ name: 'mine'}">mine</router-link>
```
动态路由 

/user/1
/user/ooo
/user/2

```js
const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/user/:id', component: User }
  ]
})
```
可以在this.$route.params.id中获取

嵌套路由，有多层`<router-view>`嵌套
```html
<router-view></router-view>
```
利用children这个属性继续定义
```js
export default new VueRouter({
    mode: 'hash',
    // 接受路由的配置
    routes: [{
        path: '/',
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
    }]
})
```

命名视图
```html
<router-view class="view two" name="a"></router-view>
<router-view class="view three" name="b"></router-view>
```
可以对应不同视图加载不同路由
```js
const router = new VueRouter({
  routes: [
    {
      path: '/',
      components: {
        default: Foo,
        a: Bar,
        b: Baz
      }
    }
  ]
})
```
默认重定向路由
```js
{
    path: '/',
    redirect: '/mine'
}
```
别名路由
```js
const router = new VueRouter({
  routes: [
    { path: '/a', component: A, alias: '/b' }
  ]
})
```

导航守卫