import Vue from 'vue/dist/vue'
import 'weui'
import './styles/styles.css'
// 共有组件
import './components/header/header'
import './components/search/search'
import './components/panel/panel'
import './components/tabbar/tabbar'
// 页面组件
import './pages/wechat/wechat'
import './pages/contact/contact'
import './pages/main/main'

new Vue({
    el: '#app',
    template:`
        <div>
            <eno-main></eno-main>
            <eno-tabbar></eno-tabbar>
        </div>
    `
})