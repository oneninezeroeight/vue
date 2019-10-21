import Vue from 'vue/dist/vue'
import template from './tabbar.html'
import icon from '../../images/icon_tabbar.png'
import observer from '../../tools/observer'
// jQuery库 axios库
// MV框架级别
export default Vue.component('eno-tabbar', {
    data() {
        return {
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
        }
    },
    template,
    methods: {
        highLight(index) {
            this.offset = index
            // 传递tabbar选项卡的索引值
            observer.emit('setTabbar', index)
            // console.log(index)
        }
    }
})