<template>
  <div class="mine">
    <!-- 顶部 -->
    <mine-nav-bar class="mine-navbar" />
    <!-- 中间 -->
    <mine-group class="mine-group" />
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
.mine {
  color: black;
  border-bottom: 2px solid #efefefef;
}
.NavBar {
  background-color: #ffffff;
}
</style>
