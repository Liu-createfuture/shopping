<template>
  <div class="mine">
    <!-- 顶部 -->
    <mine-nav-bar />
  </div>
</template>

<script>
import MineNavBar from "./child/NavBar/";
export default {
  created(){
    console.log();
  },
  components: { MineNavBar },
};
</script>

<style scoped>
.mine {
  color: black;
}
</style>
