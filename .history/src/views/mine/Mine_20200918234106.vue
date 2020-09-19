<template>
  <div class="mine">
    <!-- 顶部 -->
    <div class="nav-bar">
      <div class="nav-bar-top">
        <img src="~assets/img/cart/选择.svg" alt="" />
        <h2>空白格</h2>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
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
  padding-top: 20px;
  align-items: center;
}
.nav-bar-top img {
  height: 60px;
  padding-left: 20px;
}
</style>
