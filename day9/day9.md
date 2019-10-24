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