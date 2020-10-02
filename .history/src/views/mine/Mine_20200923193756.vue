<template>
  <div class="mine">
    <!-- 顶部 -->
    <mine-nav-bar class="NavBar" />
  </div>
</template>

<script>
import MineNavBar from "./child/NavBar/MineNavBar";
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
  border-bottom: 1px solid #efefefef;
}
.NavBar {
  background-image: linear-gradient(#63c4bc, #748792);
}
</style>
