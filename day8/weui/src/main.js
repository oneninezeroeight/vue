import Vue from 'vue'
import App from './App.vue'
import store from './stores'
import router from './router'
import mixins from './mixins'
import color from './directives/color'
import radius from './directives/radius'
import 'weui'
import './assets/styles.css'

Vue.prototype._name = 'yao'

Vue.config.productionTip = false
// 全局指令 v-xxx  v-color
Vue.directive('color', color)
Vue.directive('radius', radius)
// 全局混入
Vue.mixin(mixins)
new Vue({
  // 局部混入
  mixins: [mixins],
  store,
  router,
  render: h => h(App)
}).$mount('#app')