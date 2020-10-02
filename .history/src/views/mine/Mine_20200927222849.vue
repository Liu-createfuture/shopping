<template>
  <div class="mine">
    <!-- 顶部 -->
    <mine-nav-bar class="NavBar" />
    <!-- 中间 -->
    <mine-center-group />
  </div>
</template>

<script>
import MineNavBar from "./child/NavBar/MineNavBar";
import Mine-center-group
export default {
  created() {
    console.log();
  },
  components: { MineNavBar },
};
</script>

<style scoped>
.mine {
  color: black;
  border-bottom: 2px solid #efefefef;
}
.NavBar {
  background-color: #ffffff;
}
</style>
