<template>
  <!-- 分栏 -->
  <div class="nav-bar-top-subfield">
    <ul>
      <li v-for="(item, index) in c" :key="index">
        <img :src="imgsrc[0].img" alt />
        <h5>{{ item }}</h5>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      c: ["未购买", "已购买", "历史记录", "我的"],
      imgsrc: [{ img: require("@/assets/img/mine/购买.svg") }],
    };
  },
  methods: {},
  activated() {
    console.log(this.index);
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
