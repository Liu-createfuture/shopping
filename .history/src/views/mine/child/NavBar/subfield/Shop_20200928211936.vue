<template>
  <div class="mine-shop">
    <nav-bar class="shop-nav-bar">
      <div slot="left" @click="onClickLeft">
        <img src="~assets/img/navbar/左箭头.svg" alt />
      </div>
      <div slot="center">历史记录</div>
    </nav-bar>
    <van-tabs v-model="activeName">
      <van-tab title="商品收藏" name="a">内容 1</van-tab>
      <van-tab title="店铺收藏" name="b">内容 2</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      activeName: "a",
    };
  },
  methods: {
    // 返回
    onClickLeft() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.shop-nav-bar div > img {
  height: 40px;
  width: 40px;
  margin-top: 5px;
}
</style>
