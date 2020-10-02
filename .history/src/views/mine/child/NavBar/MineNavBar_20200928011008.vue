<template>
  <div class="nav-bar">
    <!-- 头像 -->
    <div class="nav-bar-top">
      <img src="@/assets/img/mine/头像.jpg" alt />
      <h3>在线商城</h3>
      <ul class="nav-bar-top-label">
        <li>积分</li>
        <li>成长</li>
        <li>家庭号</li>
      </ul>
      <div class="nav-bar-top-right">
        <img src="~assets/img/mine/设 置.svg" alt />
        <img src="~assets/img/mine/聊天.svg" alt />
      </div>
    </div>
    <mine-subfield />
    <div></div>
  </div>
</template>

<script>
import MineSubfield from "./MineSubfield";
export default {
  components: {
    MineSubfield,
  },
};
</script>

<style scoped>
/* 头像 */
h3 {
  margin: 8px 0 0 10px;
  height: 20px;
}
.nav-bar {
  height: 135px;
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
  position: absolute;
  top: 50px;
  left: 85px;
  width: 200px;
  height: 30px;
}
.nav-bar-top-label li {
  text-align: center;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 0 12px;
  border-radius: 50px;
}
.nav-bar-top-right {
  position: absolute;
  right: 20px;
}
.nav-bar-top > img {
  height: 65px;
  width: 65px;
  margin: 0 10px;
  border-radius: 50%;
}
.nav-bar-top-right > img {
  height: 20px;
  margin: 0 4px;
}
</style>
