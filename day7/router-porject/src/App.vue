<template>
  <div id="app">
    <router-link :to="{ name: 'home'}">home</router-link>|
    <router-link :to="{ name: 'mine'}">mine</router-link>
    <!-- 路由的渲染舞台 -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
</style>
