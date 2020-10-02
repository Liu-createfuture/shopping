<template>
  <div class="coupon">
    <nav-bar class="coupon-nar-bar">
      <div slot="left" @click="onClickLeft">
        <img src="~assets/img/navbar/左箭头.svg" alt />
      </div>
      <div slot="center">优惠券</div>
    </nav-bar>
    <!-- 优惠券单元格 -->
    <van-coupon-cell
      :coupons="coupons"
      :chosen-coupon="chosenCoupon"
      @click="showList = true"
    />
    <!-- 优惠券列表 -->
    <van-popup
      v-model="showList"
      round
      position="bottom"
      style="height: 90%; padding-top: 4px;"
    >
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import { hideTabBer } from "common/mixin";

const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "1",
  value: 150,
  name: "优惠券",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "1.5",
  unitDesc: "元",
};

export default {
  //标签栏显示和隐藏
  mixins: [hideTabBer],
  components: {
    NavBar,
  },
  data() {
    return {
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList: "",
    };
  },
  methods: {
    //返回箭头
    onClickLeft() {
      this.$router.back();
    },
    //优惠券
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
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
