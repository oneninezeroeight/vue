import Vue from 'vue/dist/vue'
export default Vue.component('eno-header', {
    props: {
        color: String
    },
    // M
    data() {
        return {
            title: "今日头条"
        }
    },
    // V
    template: `
        <header :style="{
            backgroundColor: color
        }">
            <slot></slot>
        </header>
    `
})