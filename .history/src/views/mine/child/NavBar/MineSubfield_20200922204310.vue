<template>
  <!-- 分栏 -->
  <div class="nav-bar-top-subfield">
    <ul>
      <li v-for="(item, index) in c" :key="index">
        <img src="~assets/img/mine/购买.svg" alt />
        <h5>{{ item.c }}</h5>
      </li>
      <!-- <li>
        <img src="~assets/img/mine/购买(1).svg" alt />
        <h5>已购买</h5>
      </li>
      <li>
        <img src="~assets/img/mine/历史记录.svg" alt />
        <h5>历史记录</h5>
      </li>
      <li>
        <img src="~assets/img/mine/我 的.svg" alt />
        <h5>我的</h5>
      </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      c: ["未购买", "已购买", "历史记录", "我的"],
    };
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
  width: 60px;
}
.nav-bar-top-subfield ul img {
  height: 25px;
}
h5 {
  margin: 0;
}
</style>
