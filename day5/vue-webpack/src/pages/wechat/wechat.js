import Vue from 'vue/dist/vue'
export default Vue.component('eno-wechat', {
    created() {
        window.onscroll = () => {
            sessionStorage.setItem('scrollY', window.scrollY)
        }
    },
    template: `
        <div>
            <eno-header color="green">微信</eno-header>
            <eno-search></eno-search>
            <eno-panel></eno-panel>
        </div>
    `,
    watch: {
        scrollY() {
            console.log('滚动了')
        }
    },
    beforeDestroy(){
        window.onscroll = null
    }
})