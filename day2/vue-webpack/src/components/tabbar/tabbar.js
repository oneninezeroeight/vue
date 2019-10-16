import Vue from 'vue/dist/vue'
import template from './tabbar.html'
import icon from '../../images/icon_tabbar.png'
// jQuery库 axios库
// MV框架级别
export default new Vue({
    el: "#tabbar",
    data: {
        icon,
        tabbar: [{
            title: '微信',
            url: '/wechat',
            badge: 8,
            dot: false
        }, {
            title: '通讯录',
            url: '/contact',
            badge: 0,
            dot: false
        }, {
            title: '发现',
            url: '/recover',
            badge: 0,
            dot: true
        }, {
            title: '我',
            url: '/mine',
            badge: 0,
            dot: false
        }],
        // 控制高亮
        offset: 0
    },
    template,
    methods:{
        highLight(index){
            this.offset = index
            console.log(index)
        }
    }
})