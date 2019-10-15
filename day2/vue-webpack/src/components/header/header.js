import Vue from 'vue/dist/vue'
export default new Vue({
    el: '#header',
    // M
    data: {
        title: "今日头条"
    },
    // V
    template:`
        <header>{{title}}</header>
    `
})