<template>
  <div>
      <div slot="center">我的</div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.nav-bar {
  height: 150px;
  line-height: 130px;
  background: pink;
}
</style>
