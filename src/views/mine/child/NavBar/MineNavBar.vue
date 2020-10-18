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
  margin: 0.5rem 0 0 0.625rem;
  height: 1.25rem;
}
.nav-bar {
  height: 8.4375rem;
  border-bottom: 0.125rem solid #efefefef;
}
.nav-bar-top {
  display: flex;
  height: 3.125rem;
  padding-top: 1.25rem;
}
.nav-bar-top-label {
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  position: absolute;
  top: 3.125rem;
  left: 5.3125rem;
  width: 12.5rem;
  height: 1.875rem;
}
.nav-bar-top-label li {
  text-align: center;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 0 0.75rem;
  border-radius: 3.125rem;
}
.nav-bar-top-right {
  position: absolute;
  right: 1.25rem;
}
.nav-bar-top > img {
  height: 4.0625rem;
  width: 4.0625rem;
  margin: 0 0.625rem;
  border-radius: 50%;
}
.nav-bar-top-right > img {
  height: 1.25rem;
  margin: 0 0.25rem;
}
</style>
