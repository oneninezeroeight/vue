<template>
  <div class="Header">
    <input v-model="msg" />
    <h1>{{ msg }}</h1>
    <p>{{$store.state.author}}</p>
    <button @click="setAuthor('jing')">ok</button>
  </div>
</template>
<script>
import {
  mapState,
  // mapMutations,
  mapActions
} from "vuex";
import store from "../stores/index.js";
export default {
  name: "Header",
  data() {
    return store;
  },
  methods: {
    setAuthor() {
      // 1.直接修改
      // this.$store.state.author = 'jing'
      // 2.触发setAuthor，传递新的数据去仓库
      // this.$store.commit("setAuthor", "jing");
      // 5.用dispatch触发action
      this.$store.dispatch("setAuthor", "jing");
    },
    // 3.把setAuthor从仓库取出来使用
    // ...mapMutations(["setAuthor"]),
    // 4.触发action修改数据
    ...mapActions(["setAuthor", "setNews"])
  },
  computed: {
    // 1.提供state的信息
    ...mapState({
      author: state => state.author,
      news: state => state.news
    })
    // 2.把仓库的状态从公变为私
    // author(){
    //   return this.$store.getters.getAuthor
    // }
  },
  mounted() {
    this.setNews();
    console.log(this.$store.state.author);
  }
};
</script>
<style scoped>
.Header {
  margin: 10px;
  border: 1px solid red;
}
</style>
