<template>
  <div class="mine">
    <!-- 顶部 -->
    <mine-nav-bar />
  </div>
</template>

<script>
import MineNavBar from "./child/MineNavBar";
export default {
  components: { MineNavBar },
};
</script>

<style scoped>
.mine {
  color: #eeeeee;
}

</style>
