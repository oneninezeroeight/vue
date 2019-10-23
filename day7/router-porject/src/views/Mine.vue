<template>
  <div>
    <p v-text="name"></p>
    <button @click="c">ok</button>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "Mine页面123"
    };
  },
  methods: {
    c() {
      this.name = 1;
      this.$router.push({ name: "home", params: { userId: "123" } });
      console.log(1);
    }
  }
};
</script>
<style scoped>
div {
  height: 1000px;
}
</style>