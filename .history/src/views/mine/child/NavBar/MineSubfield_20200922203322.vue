<template>
  <!-- 分栏 -->
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
      <li @click="a">未购买</li>
      <li>已购买</li>
      <li>历史记录</li>
      <li>我的</li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  }
};
</script>

<style scoped>
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
