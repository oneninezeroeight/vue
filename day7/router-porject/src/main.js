import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.axios = axios
Vue.config.productionTip = false

new Vue({
  // 在根组件绑定路由
  // 根组件就可以使用路由功能
  router,
  render: h => h(App),
}).$mount('#app')