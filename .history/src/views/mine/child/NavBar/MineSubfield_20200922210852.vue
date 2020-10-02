<template>
  <!-- 分栏 -->
  <div class="nav-bar-top-subfield">
    <ul>
      <li v-for="(item, index) in imgUrl" :key="index">
        <img :src="item[index].img" alt />
        <h5>{{ item[index].name }}</h5>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: [
        { img: require("@/assets/img/mine/购买.svg"), name: "未购买" },
        { img: require("@/assets/img/mine/购买(1).svg"), name: "已购买" },
        { img: require("@/assets/img/mine/历史记录.svg"), name: "历史记录" },
        { img: require("@/assets/img/mine/我 的.svg"), name: "我的" },
      ],
    };
  },
  methods: {},
  activated(){}
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
