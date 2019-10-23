<template>
  <div>
    <input v-model="username" />
    <input v-model="password" />
    <button @click="login">登录</button>
  </div>
</template>
<script>
import qs from 'qs'
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.axios.post(
        "http://localhost:3000/login",
        qs.stringify({
          username: this.username,
          password: this.password
        })
      );
    }
  }
};
</script>