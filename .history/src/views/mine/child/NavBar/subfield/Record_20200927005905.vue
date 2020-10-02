<template>
  <div class="Record">
    <nav-bar>
      <div slot="left" class="left">
        <img src="~assets/img/navbar/左箭头.svg" alt="" @click="onClickLeft" />
      </div>
      <div slot="center">历史记录</div>
    </nav-bar>
    <scroll class="record-height" ref="scroll">
      <van-grid :border="true" :column-num="3">
        <van-grid-item v-for="(item, index) in $store.state.save" :key="index">
          <img :src="item.show.img" alt="" @click="jump(item)" />
          {{ "￥" + item.price }}
        </van-grid-item>
      </van-grid>
      <!-- 空状态 -->
      <van-empty v-show="Goods" />
      <van-empty v-show="Goods" />
      <van-empty v-show="Goods" />
    </scroll>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import { hideTabBer } from "common/mixin";
export default {
  //标签栏显示和隐藏
  mixins: [hideTabBer],
  components: {
    NavBar,
    Scroll,
  },
  methods: {
    onClickLeft() {
      //返回
      this.$router.back();
    },
    jump(item) {
      this.$router.push("/detail/" + item.iid);
      this.$store.commit("pictureClick", item);
    },
  },
  activated() {
    this.$refs.scroll.refresh();
  },
};
</script>

<style scoped>
.Record {
  height: 100vh;
}
.Record img {
  height: 150px;
  width: 100%;
  padding-bottom: 15px;
}
.left > img {
  width: 40px;
  height: 40px;
  margin-top: 5px;
}
.record-height {
  height: calc(100% - 50px);
  overflow: hidden;
}
</style>
