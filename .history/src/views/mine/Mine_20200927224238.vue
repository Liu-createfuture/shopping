<template>
  <div>
    <!-- 顶部 -->
    <mine-nav-bar />
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
.mine-group {
  position: relative;
  top: 70px;
  height: 300px;
  width: 350px;
  margin: 0 auto;
  border-radius: 50px;
  background-color: #efefefef;
}
</style>
