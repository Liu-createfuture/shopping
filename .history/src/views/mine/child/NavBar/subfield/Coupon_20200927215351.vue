<template>
  <div class="coupon">
    <nav-bar class="coupon-nar-bar">
      <div slot="left" @click="onClickLeft">
        <img src="~assets/img/navbar/左箭头.svg" alt />
      </div>
      <div slot="center">优惠券</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import { hideTabBer } from "common/mixin";
export default {
  //标签栏显示和隐藏
  mixins: [hideTabBer],
  components: {
    NavBar,
  },
  methods: {
    //返回箭头
    onClickLeft() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.coupon-nar-bar div > img {
  height: 40px;
  width: 40px;
  margin-top: 5px;
}
</style>
