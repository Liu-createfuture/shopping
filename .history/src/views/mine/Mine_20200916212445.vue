<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">我的</div>
    </nav-bar>
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
  height: 90px;
  line-height: 130px;
  background: pink;
  border-radius: 0px 0px 180px 180px;
}
</style>
