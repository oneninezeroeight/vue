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
    - beforeCreate 什么都没有
    - created 有数据
- 挂载前后
    - beforeMount 找到挂载点，准备放入模板
    - render 生成虚拟DOM
    - mounted 把虚拟DOM挂载真实DOM，挂载点渲染虚拟DOM

---上面这些都执行一次---

- 更新前后
    - beforeUpdate 先更新数据
    - render ，生成一份新的虚拟DOM 优化比对旧的虚拟dom
    - updated 完成局部更新
- 是否被激活 keep-alive 销毁真实DOM，保留虚拟DOM，数据状态才得以保存
    - activated
    - deactivated

---上面这些根据数据和视图变化触发多次---

- 销毁前后 真实DOM和虚拟DOM都销毁 `<component is="xxx">`和`v-if`都会触发销毁
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
// 第一份镜像
const vdom = {
    tag: 'div',
    text: undefined,
    children: [{
        tag: undefined,
        text: 'yao'
    }]
}
// 第二份镜像
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

# 单文件组件

后缀为`.vue`的文件，把html视图层，js，css全部放到这个文件里面处理