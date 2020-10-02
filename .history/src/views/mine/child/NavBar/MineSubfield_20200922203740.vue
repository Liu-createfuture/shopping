<template>
  <!-- 分栏 -->
  <div class="nav-bar-top-subfield">
    <ul>
      <li>
        <img src="~assets/img/mine/购买.svg" alt />
        <h5>未购买</h5>
      </li>
      <li>
        <img src="~assets/img/mine/购买(1).svg" alt />
        <h5>已购买</h5>
      </li>
      <li>
        <img src="~assets/img/mine/历史记录.svg" alt />
        <h5>11</h5>
      </li>
      <li>
        <img src="~assets/img/mine/我 的.svg" alt />
        <h5>11</h5>
      </li>
    </ul>
    <ul>
      <li @click="a"></li>
      <li></li>
      <li>历史记录</li>
      <li>我的</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    a() {
      console.log("1");
    },
  },
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
  height: 40px;
  width: 60px;
}
.nav-bar-top-subfield ul img {
  height: 25px;
}
</style>
