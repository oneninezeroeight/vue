# 单文件组件

在很多 Vue 项目中，我们使用 Vue.component 来定义全局组件，紧接着用 new Vue({ el: '#container '}) 在每个页面内指定一个容器元素

- 上面会导致组件可以在全局任何地方使用
- 如果html和js混在一起写，那么没有语法高亮
- 难以实现局部样式，组件应该拥有局部的样式，高度封装的(html,js,css)
- 难以使用jade，pug这些预编译语言

新建一份`Hello.vue`，把组件所有的东西写在这一份文件里面

scoped可以把样式只在该组件里面使用，没有的话就是全局样式
```html
<template>
    <p>html</p>
</template>
<script>
    module.exports = {
        // js
    }
</script>
<style scoped>
    p{color:red}
</style>
```

由于webpack只识别js，为了处理vue文件需要使用vue-loader加载器，把vue文件转化为js文件
```bash
cnpm install vue-loader --D
```
在webpack.config.js里面加入插件配置项
```js
const VueLoaderPlugin = require('vue-loader/lib/plugin')
...
plugins: [
    new VueLoaderPlugin(),
],
...
```
把header.js改为
```html
<template>
    <header :style="{
        backgroundColor: color
    }">
        <slot></slot>
    </header>
</template>
<script>
export default {
    props: {
        color: String
    },
    data() {
        return {
            title: "今日头条"
        }
    },
}
</script>
<style scoped>

</style>
```

在其他地方使用的时候，可以选择局部注册或者全局注册，那就可以让组件拥有活动范围，可不同的名字
```js
import Vue from 'vue/dist/vue'
import EnoHeader from '../../components/header/header.vue'
// 全局注册
Vue.component("EnoHeader",EnoHeader)
export default Vue.component('eno-wechat', {
    // 局部注册
    components:{
        EnoHeader
    }
})
```

# ref

如果你想去操作DOM，建议用ref选项，这可以帮你找到修改那个地方的真实DOM和虚拟DOM，修改它，可以更新真实DOM和虚拟DOM，而不是选择用原生的`document.querSelector`方法

# 过滤器

跟计算属性很像，使用管道字符，只能用在双大括号和v:bind
```html
<p class="weui-media-box__desc">{{item.author.loginname|captian}}</p>
```
注册局部过滤器
```js
filters: {
    // 首字母的大写
    captian(value) {
      // value是放进来要处理的数据
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
}
```