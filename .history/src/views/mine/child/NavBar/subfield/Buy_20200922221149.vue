<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar
      title="已购买"
      left-text="返回"
      right-text="刷新"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- 下拉刷新 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
  },
};
</script>

<style></style>
