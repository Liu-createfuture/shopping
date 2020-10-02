<template>
  <div class="Record">
    <nav-bar>
      <div slot="left" class="left">
        <img src="~assets/img/navbar/左箭头.svg" alt="" @click="onClickLeft" />
      </div>
      <div slot="center">历史记录</div>
    </nav-bar>
    <van-grid :border="true" :column-num="3">
      <van-grid-item v-for="(item, index) in $store.state.save" :key="index">
        <img :src="item.show.img" alt="" />
        {{"v2" item.price }}
      </van-grid-item>
    </van-grid>
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
    onClickLeft() {
      //返回
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.Record img {
  height: 150px;
  width: 100%;
}
.left > img {
  width: 40px;
  height: 40px;
  margin-top: 5px;
}
</style>
