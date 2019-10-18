# MEVN

- Mongodb Mysql
- Express
- Vue
- Node

# 缓存

优化

- 本地存储 sessionStorage 必须前端设置
- 浏览器缓存 cache-control 响应头 必须后端设置 服务器通知浏览器，把整个页面缓存起来
- 全局变量缓存 必须前端设置


# 动画

- 条件渲染 (使用 v-if)
- 条件展示 (使用 v-show)
- 动态组件
- 组件根节点

# 生命周期钩子

`new Vue`

- 创建前后 
    - beforeCreate
    - created
- 挂载前后
    - beforeMount
    - render
    - mounted
- 更新前后
    - beforeUpdate
    - render
    - updated
- 是否被激活 keep-alive
    - activated
    - deactivated
- 销毁前后
    - beforeDestroy
    - destroyed
- 监听路由错误
    - errorCaptured

# 虚拟DOM

html模板
```html
<!-- M -->
data:{name:'yao'}
<!-- V -->
<div>
    hello world
    <p>abc</p>
    <p>{name}</p>
</div>
```
转化一个函数
```js
// M
data:{name:'yao'}
// V
// obj虚拟DOM的对象
const vdom = h(
    "div",
    null,
    "hello world",
    h("p", null, "abc"),
    h("p", null, name)
);
```

```js
const vdom = {
    tag: 'div',
    text: undefined,
    children: [{
        tag: undefined,
        text: 'yao'
    }]
}

const vdom = {
    tag: 'div',
    text: undefined,
    children: [{
        tag: undefined,
        text: 'jing'
    }]
}
```
虚拟DOM对象执行便利转化真实DOM结构
虚拟DOM存在内存里面，我们会存起来
obj->html结构