<template>
  <div class="mine">
    <!-- 顶部 -->
    <div class="nav-bar">
      <div class="nav-bar-top">
        <img src="~assets/img/cart/选择.svg" alt="" />
        <h2>空白格</h2>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.nav-bar {
  height: 150px;
  background-color: pink;
}
.nav-bar-top {
  display: flex;
  background-color: red;
  height: 50px;
  align-items: center;
}
.nav-bar-top img {
  height: 70px;
  padding-left: 20px;
}
</style>
