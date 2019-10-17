# webpack模块化项目

- [webpack](./webpack)

# webpack插件

插件可以理解为webpack的补丁，增加拓展功能，修复漏洞(一般不会)

把这个代码放入`webpack.config.js`里面：
```js
plugins: [
    // 放入多个插件
    new HtmlWebpackPlugin({ template: './src/index.html' })
]
```
安装你所需要的模块(插件)
```bash
npm install --save-dev html-webpack-plugin
```
你可以使用该插件去生成不一样的前端模板，你也可以指定模板
```js
plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
    // new HtmlWebpackPlugin()
]
```

# vue

vue读音view，既然这样都，可以看出来，vue比较注重视图层

从npm下载vue模块
```bash
npm install vue
```
我们起手代码是这样的，vue在这个对象里面有data里面存着数据，template需要渲染到页面的视图

- View = Template(Model)
- View = Render(Model)
```js
// 构造函数 完整版
import Vue from 'vue/dist/vue'
// 实例化的对象
const app = new Vue({
    // 选择器，Vue的作用域范围 一般建议用id 具有唯一性
    el: '#app',
    // Model
    data: {
        name: 'yao'
    },
    // render用于发布环境
    // render(h) {
    //     // js -> html不是很适合我们自己写，把这部分交给webpack帮我们处理
    //     return h('div', null, 'hello world')
    // },
    // View
    template:`
        <div>hello world123</div>
    `
})
console.log(app)
```

```js
// 这一份默认引入的是阉割版本 把template给去掉
import 'vue'
// 这一份是完整版本，包含template和render方法
import Vue from 'vue/dist/vue'
```

# 声明式渲染

两个大括号的语法称之为声明式渲染
```js
// 原生JS模板
var html = `<div>abc${name}def<div>`
var template = `<div>{{name}}<div>`
```

把视图和数据进行隔离，更改数据就可以直接更改视图层，这种我们称之为数据驱动，MV之间互为绑定
```js
import Vue from 'vue/dist/vue'
export default new Vue({
    el: '#header',
    // M
    data: {
        title: "今日头条"
    },
    // V
    template:`
        <header>{{title}}</header>
    `
})
```

# 指令

Vue下达给视图层的一个命令，这个命令可以更改视图层的效果，这个命令是Vue内置的，它们都有一个共同点，都有一个`v-`前缀，需要用在标签的属性值里面

```html
<p v-if="1">增加</p>
<p v-if="0">删除</p>
<p v-show="1">出现</p>
<p v-show="0">隐藏</p>
```

> $(View).css(Model)
> $(View).show(Model)

- v-text $().text()   {{}}
- v-html $().html()
- v-show $().show()
- v-if $().remove() $().append()
- v-else
- v-else-if
- v-for $().each()
- v-on $().on() 绑定事件
- v-bind $().attr().css().addClass().removeClass() 更改属性值
- v-model $().val()
- v-slot 具名插槽
- v-pre 让{{name}} 声明式失效
- v-cloak 让{{name}} 完全编译成功之后再出现
- v-once 让{{name}} 只能编译一次