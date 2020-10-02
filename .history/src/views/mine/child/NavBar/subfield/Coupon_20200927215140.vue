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
export default {
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

<style></style>
