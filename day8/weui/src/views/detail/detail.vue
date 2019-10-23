<template>
    <div>
        <Header>详情页</Header>
        详情页 {{$route.params.id}}
    </div>
</template>
<script>
import Header from "../../components/header/header.vue"
export default {
  components: {
    Header,
  }
};
</script>