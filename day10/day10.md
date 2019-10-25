# 生产环境部署

你可以在项目的同级目录下新建一份`vue.config.js`文件，跟`package.json`是同级的

这份文件是选配文件

前端和后端一开始是分开不同的服务器开发

- webpack webpack-dev-server
- express wamp

我们前端在webpack的src入口目录开发，发布的时候生成一份dist文件夹，在开发阶段由于是不同服务器，所以解决跨域问题

把dist文件夹放到服务器静态文件夹里面，express/public
发布之后由于前后端变为同一个域名，所以就不需要解决跨域问题了

# vue的双向数据绑定原理

```js
Object.defineProperty
```
这也就是 Vue 不支持 IE8 以及更低版本浏览器的原因

该特性 无法检测到对象属性的添加或删除，还有无法监听数组对象的改变

Vue它改写了底层数组的方法

```js
data(){
    return {
        arr: [
            // 数组里面的这个数组一旦发生该改变，Vue无法监听
            []
        ],
        obj: {
            obj:{
                name: 'yao'
            }
        }
    },
    methods:{
        setArr(){
            let arr2 = [{
                name: 'yao'
            }]
            this.arr = [...arr2]
        }
    }
}
````