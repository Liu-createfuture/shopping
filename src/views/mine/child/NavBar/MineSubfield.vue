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
      subfield: ["商品收藏", "订单", "历史记录", "优惠券"],
      imgsrc: [
        { img: require("@/assets/img/mine/店铺收藏.svg") },
        { img: require("@/assets/img/mine/订单.svg") },
        { img: require("@/assets/img/mine/历史记录.svg") },
        { img: require("@/assets/img/mine/_优惠 券.svg") },
      ],
    };
  },
  methods: {
    IconClick(index) {
      //判断点击路由
      switch (index) {
        case 0:
          this.$router.push("/shop");
          break;
        case 1:
          this.$router.push("/buy");
          break;
        case 2:
          this.$router.push("/record");
          break;
        case 3:
          this.$router.push("/coupon");
          break;
      }
    },
  },
};
</script>

<style scoped>
/* 分栏 */
.nav-bar-top-subfield {
  margin: 1.25rem auto;
  padding-top: 1.25rem;
  background-color: #efefefef;
  height: 4.375rem;
  width: 21.875rem;
  border-radius: 3.125rem;
}
.nav-bar-top-subfield ul {
  display: flex;
  justify-content: space-evenly;
  text-align: center;
}
.nav-bar-top-subfield ul li {
  width: 3.75rem;
}
.nav-bar-top-subfield ul img {
  height: 1.5625rem;
}
h5 {
  margin: 0;
}
</style>
