# Vuex集中式管理

由于组件之间的数据互不相通，所以需要一个集中式的数据管理仓库，让两两组件进行通信

<img src="1.png" />

cp1和cp2和store同一个地址，所以谁变化，其他都会跟着变化，我们不能替换store的地址，这会让两个断开连接了

```js
var store = {
	name: 'yao'
}
var cp1 = store
var cp2 = store
// 这种是直接修改
cp1.name = 'lin'
```

观察者模式是一个组件提供方法存进仓库，另一个组件把方法从仓库取出来使用
```js
let weux = {};
// 这次换成一个对象类型的缓存列表
weux.list = {
    // 存着很多回调的函数 保存着回调函数队列，不执行，异步队列
    setSearchText:[()=>{}],
};
// 监听帮助存着回调函数
weux.on = function (key, fn) {
    if (!this.list[key]) {
        this.list[key] = [];
    }
    this.list[key].push(fn);
};
// 触发
weux.emit = function (key, param) {
    let fns = this.list[key];
    if (!fns || fns.length === 0) {
        return false;
    }
    fns.forEach(fn => {
        fn(param);
    });
};
// 组件1 负责监听 事件监听
weux.on('setSearchText',(parms)=>{
    console.log(parms)

})
// 组件2 负责触发
weux.emit('setSearchText','xxx')
weux.emit('setSearchText','xxx')
```

需要你自己先把方法存起来，两个组件都可以拿这个方法调用

安装
```bash
npm install vuex
```

四大核心概念

- getters   拿状态的方法
- actions   修改状态的方法(异步)
- state     状态
- mumations 修改状态的方法(同步)

```js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
console.log(Vuex)
const store = new Vuex.Store({
  // 仓库 交换数据的源头
  state:{
    author: 'lin'
  },
  getters:{},
  mumtations:{},
  actions:{}
})
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
```

我们可以在组件里面直接使用，vuex不主张直接修改仓库，这样会难以被监听，仓库很难知道这个数据谁改了
```js
// 拿
console.log(this.$store.state.author)
// 改
this.$store.state.author = xxx
```

一般建议使用getters去获取仓库的数据
```js
getters:{
    // 专门拿state的author
    getAuthor(state){
      // 数据出仓库之前可以进行加工
      return 'Mr.' + state.author
    }
}
```
组件里面使用计算属性配合
```js
computed: {
    // 把仓库的状态从公变为私
    author(){
      return this.$store.getters.getAuthor
    }
}
```
除此之外还可以使用辅助函数`mapState`
```js
computed: {
    // 提供state的信息
    ...mapState({
      author:(state)=>state.author
    }),
},
```

获取仓库的数据有三种方法：

- this.$store.state.author
- this.$store.getters.getAuthor
- ...mapState

同步修改数据`mutations`，在组件里面使用`$store.commit('setAuthor',data)`触发修改
```js
// 同步修改
mutations: {
    setAuthor(state, data) {
      state.author = data
    }
}
```
在组件里面使用以下方法修改仓库的值
```js
// 触发setAuthor，传递新的数据去仓库
this.$store.commit('setAuthor', 'jing')
```

利用辅助函数`mapMutations`去修改
```js
import { mapMutations } from "vuex";
...mapMutations(["setAuthor"]),
```

- this.$store.state.author
- this.$store.commit('setAuthor', 'jing')
- ...mapMutations(["setAuthor"]),