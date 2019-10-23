<template>
  <div>
    <Header color="green">微信</Header>
    <Search />
    <Panel tab="ask"></Panel>
    <Tabbar :offset="0" />
  </div>
</template>
<script>
import Header from '../../components/header/header.vue'
import Search from '../../components/search/search.vue'
import Panel from '../../components/panel/panel.vue'
import Tabbar from '../../components/tabbar/tabbar.vue'
export default {
  created() {
    window.onscroll = () => {
      sessionStorage.setItem("scrollY", window.scrollY);
    };
  },
  watch: {
    scrollY() {
      console.log("滚动了");
    }
  },
  beforeDestroy() {
    window.onscroll = null;
  },
  // 局部注册
  components: {
    Header,
    Search,
    Panel,
    Tabbar
  }
};
</script>