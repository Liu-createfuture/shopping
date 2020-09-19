<template>
  <div>
    <div class="nav-bar">
      span
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
  flex: 1;
}
</style>
