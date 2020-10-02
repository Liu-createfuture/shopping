<template>
  <div class="Record">
    <nav-bar>
      <div slot="left">
        <img src="../../../../../assets/img/cart/" alt="">
      </div>
      <div slot="center">历史记录</div>
    </nav-bar>
    <van-grid :border="true" :column-num="3">
      <van-grid-item v-for="(item, index) in $store.state.save" :key="index">
        <img :src="item.show.img" alt="" />
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.Record img {
  height: 100%;
  width: 100%;
}
</style>
