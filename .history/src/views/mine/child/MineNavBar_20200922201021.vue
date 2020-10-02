<template>
  <div class="nav-bar">
    <!-- 头像 -->
    <div class="nav-bar-top">
      <img src="~assets/img/cart/选择.svg" alt />
      <h3>头像</h3>
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
    <!-- 分区 -->
    <!-- <div class="nav-bar-top-subfield">
      <ul>
        <li>
          <img src="~assets/img/mine/购买.svg" alt />
        </li>
        <li>
          <img src="~assets/img/mine/购买(1).svg" alt />
        </li>
        <li>
          <img src="~assets/img/mine/历史记录.svg" alt />
        </li>
        <li>
          <img src="~assets/img/mine/我 的.svg" alt />
        </li>
      </ul>
      <ul>
        <li>未购买</li>
        <li>已购买</li>
        <li>历史记录</li>
        <li>我的</li>
      </ul>
    </div> -->
    <div></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* 头像 */
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
  margin-left: -50px;
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
.nav-bar-top-right {
  position: absolute;
  right: 20px;
}
.nav-bar-top-right img:nth-child(1) {
  height: 20px;
}
.nav-bar-top-right img:nth-child(2) {
  height: 20px;
}
/* 分栏 */
.nav-bar-top-subfield {
  margin-top: 20px;
}
.nav-bar-top-subfield ul {
  display: flex;
  justify-content: space-evenly;
  text-align: center;
}
.nav-bar-top-subfield ul:nth-child(2) {
  margin-top: 7px;
}
.nav-bar-top-subfield ul li {
  flex: 1;
}
.nav-bar-top-subfield ul img {
  height: 25px;
}
</style>
