<template>
  <div id="app">
    <router-link :to="{ name: 'home'}">home</router-link>|
    <router-link :to="{ name: 'mine'}">mine</router-link>
    <!-- 路由的渲染舞台 -->
    <!-- <transition name="bounce"> -->
      <keep-alive>
        <router-view />
      </keep-alive>
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
.bounce-enter-active {
    animation: bounce-in 5s;
}

.bounce-leave-active {
    animation: bounce-in 5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.5);
    }

    100% {
        transform: scale(1);
    }
}
</style>
