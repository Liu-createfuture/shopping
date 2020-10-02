<template>
  <div>
    <div class="mine">
      <!-- 顶部 -->
      <mine-nav-bar class="mine-nav-bar" />
      <!-- 中间 -->
    </div>
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
.mine-nav-bar {
  background-color: #ffffff;
}
.mine-group {
  position: relative;
  top: 190px;
  height: 300px;
  width: 350px;
  margin: 0 auto;
  border-radius: 50px;
  background-color: #efefefef;
}
</style>
