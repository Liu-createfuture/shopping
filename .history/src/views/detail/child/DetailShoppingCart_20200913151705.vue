<template> </template>

<script>
import Toast from "components/common/toast/Toast";
export default {
  methods: {
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
