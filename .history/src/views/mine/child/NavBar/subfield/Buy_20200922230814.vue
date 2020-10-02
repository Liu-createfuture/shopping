<template>
  <div class="a">
    <!-- 头部 -->
    <van-nav-bar
      title="已购买"
      left-text="返回"
      right-text="分享"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    onClickRight() {
      Toast("分享"")
    },
  },
};
</script>

<style scoped></style>
