<template>
  <div class="mine" >
    <!-- 顶部 -->
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
    <div class="nav-bar-top-subfield">
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
    </div>
    <div></div>
  </div>
  </div>
</template>

<script>
import MineNavBar from "./child/MineNavBar";
export default {
  activated() {
    console.log("1");
  },
  components: { MineNavBar },
};
</script>

<style scoped>
.mine {
  color: black;
}
</style>
