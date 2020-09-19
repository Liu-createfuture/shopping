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
        <div><img src="~assets/img/mine/设 置.svg" alt="" />
        <img src="~assets/img/mine/" alt=""></div>
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
  height: 50px;
  padding-top: 20px;
}
.nav-bar-top-label {
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  width: 200px;
  margin-left: -90px;
}
.nav-bar-top-label li {
  text-align: center;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 0 10px;
  border-radius: 50px;
}
.nav-bar-top img {
  height: 50px;
  margin-left: 15px;
}
</style>
