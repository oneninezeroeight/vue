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
