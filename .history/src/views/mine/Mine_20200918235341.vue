<template>
  <div class="mine">
    <!-- 顶部 -->
    <div class="nav-bar">
      <div class="nav-bar-top">
        <img src="~assets/img/cart/选择.svg" alt="" />
        <h3>空_白_格</h3>
        <ul class="nav-bar-top-label">
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
h3 {
  margin: 10px 0 0 10px;
}
.nav-bar {
  height: 150px;
  background-color: pink;
}
.nav-bar-top {
  display: flex;
  background-color: red;
  height: 50px;
  padding-top: 20px;
}
.nav-bar-top-label {
  display: flex;
  align-items: flex-end;
  margin-left: -50px;
  width: 100px;
}
.nav-bar-top-label li {
  flex: 1;
}
.nav-bar-top img {
  height: 60px;
  padding-left: 20px;
}
</style>
