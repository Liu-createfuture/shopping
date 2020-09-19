<template>
  <div class="mine">
    <div class="nav-bar">
      <div class="nav-bar-top">我的</div>
      <div class="nav-bar-center">
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
    </div>
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
  display: flex;
  position: relative;
  height: 150px;
  line-height: 130px;
  background: pink;
  justify-content: space-around;
}
.nav-bar ul li {
  flex: 1;
}
.nav-bar-top {
}
</style>
