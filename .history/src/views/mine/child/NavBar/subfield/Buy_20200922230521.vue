<template>
  <div class="a">
    <!-- 头部 -->
    <van-nav-bar
      title="已购买"
      left-text="返回"
      right-text="刷新"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- 下拉刷新内容 -->
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="item in list" :key="item" :title="item" />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      isLoading: false,
      list: [],
      loading: false,
      finished: true,
      refreshing: true,
    };
  },
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

<style scoped>
</style>
