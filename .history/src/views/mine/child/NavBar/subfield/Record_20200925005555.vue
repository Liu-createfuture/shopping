<template>
  <div class="Record">
    <nav-bar>
      <div></div>
      <div slot="center">历史记录</div>
    </nav-bar>
    <van-grid :border="true" :column-num="$store.state.save.length" >
      <van-grid-item>
        <img :src="$store.state.save[0].show.img" alt="" />
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
