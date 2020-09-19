<template>
  <div>
    <div class="nav-bar">
      <span>1</span>
      <span>2</span>
      <span>3</span>
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
  height: 150px;
  line-height: 130px;
  background: pink;
}
.nav-bar ul li {
}
</style>
