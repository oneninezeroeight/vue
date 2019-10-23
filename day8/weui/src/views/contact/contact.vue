<template>
  <div>
    <Header color="yellow">通讯录</Header>
    <Search />
    <Panel tab="share"></Panel>
    <Tabbar :offset="1" />
  </div>
</template>
<script>
import Tabbar from '../../components/tabbar/tabbar.vue'
import Search from '../../components/search/search.vue'
import Panel from '../../components/panel/panel.vue'
import Header from "../../components/header/header.vue"
export default {
  components: {
    Header,
    Tabbar,
    Panel,
    Search
  }
};
</script>