import Vue from 'vue/dist/vue'
import template from './search.html'
import txt from './search.txt'
import observer from '../../tools/observer'
const search = new Vue({
    el: '#search',
    data: {
        // 表示搜索框的两个状态，一个是聚焦后的，一个是非聚焦
        isFocus: !0,
        // 搜索框的值
        searchText: '',
        title: txt,
        cancel: '取消',
    },
    template,
    // 注册事件
    methods: {
        toggleFocus() {
            this.isFocus = !this.isFocus
            // search.isFocus = false
            console.log('点击了取消')
        },
        // 清空输入框
        clear() {
            this.searchText = ''
        }
    },
    watch: {
        // 监听搜索框
        searchText() {
            // 使用观察者模式
            observer.emit('setSeatchText', this.searchText)
        }
    }
})

export default search