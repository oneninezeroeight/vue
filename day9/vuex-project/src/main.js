import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
console.log(Vuex)
const store = new Vuex.Store({
  // 仓库 交换数据的源头
  state: {
    author: 'lin',
    // 新闻数据
    news:[]
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
    },
    setNews(state, data) {
      state.news = data
    }
  },
  // 异步修改
  actions: {
    setAuthor(context, data) {
      // action修改数据的本质是触发mutations
      context.commit('setAuthor', data)
    },
    async setNews(context){
      const data = await axios.get('https://cnodejs.org/api/v1/topics')
      console.log(data.data.data)
      context.commit('setNews', data.data.data)
    }
  }
})
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')