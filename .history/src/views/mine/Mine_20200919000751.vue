<template>
  <div class="mine">
    <!-- 顶部 -->
    <div class="nav-bar">
      <div class="nav-bar-top">
        <img src="~assets/img/cart/选择.svg" alt="" />
        <h3>空_白_格</h3>
        <ul class="nav-bar-top-label">
          <li>积分</li>
          <li>成长</li>
          <li>家庭号</li>
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
  margin: 5px 0 0 10px;
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
  justify-content: space-evenly;
  margin-left: -90px;
  width: 200px;
}
.nav-bar-top-label li {
  padding: 0 5px;
  background-color: pink;
  text-align: center;
  border-radius: 50px;
}
.nav-bar-top img {
  height: 70px;
}
</style>
