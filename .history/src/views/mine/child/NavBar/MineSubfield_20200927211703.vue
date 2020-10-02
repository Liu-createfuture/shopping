<template>
  <!-- 分栏 -->
  <div class="nav-bar-top-subfield">
    <ul>
      <li
        v-for="(item, index) in subfield"
        :key="index"
        @click="IconClick(index)"
      >
        <img :src="imgsrc[index].img" alt />
        <h5>{{ item }}</h5>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subfield: ["会员", "订单", "历史记录", "优惠券"],
      imgsrc: [
        { img: require("@/assets/img/mine/会 员1-01.svg") },
        { img: require("@/assets/img/mine/订单.svg") },
        { img: require("@/assets/img/mine/历史记录.svg") },
        { img: require("@/assets/img/mine/我 的.svg") },
      ],
    };
  },
  methods: {
    IconClick(index) {
      //判断点击路由
      switch (index) {
        case 0:
          this.$router.push("/nobuy");
          break;
        case 1:
          this.$router.push("/buy");
          break;
        case 2:
          this.$router.push("/record");
          break;
        case 3:
          this.$router.push("/mines");
          break;
      }
    },
  },
};
</script>

<style scoped>
/* 分栏 */
.nav-bar-top-subfield {
  margin: 20px auto;
  padding-top: 20px;
  background-color: #efefefef;
  height: 70px;
  width: 350px;
  border-radius: 50px;
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
