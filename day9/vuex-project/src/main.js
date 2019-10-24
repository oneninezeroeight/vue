import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
console.log(Vuex)
const store = new Vuex.Store({
  // 仓库 交换数据的源头
  state: {
    author: 'lin'
  },
  // 获取state的方法
  getters: {
    // 专门拿state的author
    getAuthor(state) {
      // 数据出仓库之前可以进行加工
      return 'Mr.' + state.author
    }
  },
  // 同步修改
  mutations: {
    setAuthor(state, data) {
      state.author = data
    }
  },
  actions: {}
})
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')