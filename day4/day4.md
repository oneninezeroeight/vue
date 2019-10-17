# 组件通信

- 搜索框先把数据存进，本地存储里面
- 列表组件会监听本地存储的改变
- 数据一旦变化，就会触发监听

本地存储就是扮演一个中介，帮助两个组件完成一次通信，组件之间是高度独立的，每次通信需要用中阶层来完成，而本地存储就是这个中介

<img src="1.png" />

```js
// 组件1触发的 搜索框触发
window.sessionStorage.setItem('name','yao')

// ------storage------

// 组件2监听的 列表页监听
window.addEventListener("storage", function (e) {
    console.log(e)
    console.log(e.newValue);
});
```

# 组件基础

组件是高度封闭的MV载体，组件之间毫无关联(团队开发)，复用，组件通信(媒介)

- data 必须是一个函数 因为data是需要独立的作用域
- 一般是没有el(挂载点)，用标签代替
- `new Vue()`一个根容器，`Vue.component()`多个组件
```js
Vue.component('eno-header',{
    // M
    data(){
        return {
            title: '第一个组件'
        }
    },
    // V
    // 只能拥有一个根节点
    template:`
        <header>
            <div v-text="title"></div>
        </header>
    `
})
```
组件必须只能拥有一个根节点

组件其实是可以嵌套的

我们可以使用插槽来去定义组件的不同状态，具名插槽

properties 简写 props，叫做属性

`id="xxxx" class="xxxx" name="xxxx"`都是叫属性：

- 我们可以通过props完成父子通信，父亲把数据传给儿子
- props可以传递各种数据，包括函数，字符串，对象，html结构

```html
<div id="xxxx" class="xxxx" name="xxxx">
```