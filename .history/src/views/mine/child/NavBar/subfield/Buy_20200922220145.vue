<template>
  <van-nav-bar
    title="已购买"
    left-text="返回"
    right-text="刷新"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
  <van-pull-refresh
    v-model="isLoading"
    success-text="刷新成功"
    @refresh="onRefresh"
  >
    <p>刷新次数: {{ count }}</p>
  </van-pull-refresh>
</template>

<script>
import { Toast } from "vant";
export default {
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    onClickRight() {
      Toast("刷新");
    },
  },
};
</script>

<style></style>
