<template>
  <van-nav-bar
    title="标题"
    left-text="返回"
    right-text="刷新"
    left-arrow
    @click-right="onClickRight"
  />
</template>

<script>
import { Toast } from "vant";
export default {
  methods: {
    onClickRight() {
      Toast("刷新");
    },
  },
};
</script>

<style></style>
