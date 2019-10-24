import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        author: 'yao',
        galleryStatus: {
            imgUrl: '',
            isShow: false
        }
    },
    getters: {},
    actions: {
        setGalleryStatus(context, data) {
            context.commit('setGalleryStatus', data)
        }
    },
    mutations: {
        setGalleryStatus(state, data) {
            state.galleryStatus = data
        }
    }
})