<template>
  <div>
    Home页面
    <button v-on:click="navToHome()">跳转Home页面</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "yao"
    };
  },
  mounted() {
    console.log(this);
  },
  methods: {
    navToHome() {
      console.log(1);
      this.$router.push({ name: "mine", params: { userId: "123" } });
    }
  }
};
</script>