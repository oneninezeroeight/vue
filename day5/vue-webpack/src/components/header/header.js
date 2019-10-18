import Vue from 'vue/dist/vue'
export default Vue.component('eno-header',{
    // M
    data() {
        return {
            title: "今日头条"
        }
    },
    // V
    template: `
        <header>{{title}}</header>
    `
})