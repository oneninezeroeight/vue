<template>
  <div class="Header">
    <h1>{{ msg }}</h1>
    <p>{{$store.state.author}}</p>
  </div>
</template>
<script>
import store from '../stores/index.js'
export default {
  name: "Footer",
  data(){
    return store
  }
};
</script>
<style scoped>
.Header {
  margin: 10px;
  border: 1px solid blue;
}
</style>
