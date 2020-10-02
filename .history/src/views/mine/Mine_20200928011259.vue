<template>
  <div class="a">
    <!-- 顶部 -->
    <mine-nav-bar />
    <!-- 中间 -->
    <mine-group />
  </div>
</template>

<script>
import MineNavBar from "./child/NavBar/MineNavBar";
import MineGroup from "./child/mineGroup/MineGroup";
export default {
  components: { MineNavBar, MineGroup },
};
</script>

<style scoped>
.a {
  height: 100vh;
  position: relative;
}
</style>
