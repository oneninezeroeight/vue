<template>
  <div class="Header">
    <input v-model="msg" />
    <h1>{{ msg }}</h1>
    <p>{{$store.state.author}}</p>
    <button @click="setAuthor">ok</button>
  </div>
</template>
<script>
import store from "../stores/index.js";
export default {
  name: "Header",
  data() {
    return store;
  },
  methods: {
    setAuthor(){
      this.$store.state.author = 'jing'
    }
  },
  mounted(){
    console.log(this.$store.state.author)
  }
};
</script>
<style scoped>
.Header {
  margin: 10px;
  border: 1px solid red;
}
</style>
