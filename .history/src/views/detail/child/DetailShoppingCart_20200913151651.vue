<template> </template>

<script>
import Toast from "components/common/toast/Toast";
export default {
  methods: {
    Sclick() {
      //收藏判断
      this.collect = !this.collect;
    },
    shoppingCart() {
      //开启购物车
      this.show = true;
      this.$emit("shopping");
      //数量库存
    },
    onBuyClicked() {
      this.Cart;
      //弹出添加商品
      this.$toast.show("添加了新得商品", 2000);
    },
    onAddCartClicked() {
      this.Cart;
      this.$toast.show("添加了新得商品", 2000);
    },
  },
};
</script>

<style></style>
