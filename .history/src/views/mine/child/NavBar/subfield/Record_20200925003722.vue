<template>
  <div class="Record">
    <nav-bar>
      <div></div>
      <div slot="center">历史记录</div>
    </nav-bar>
    <van-grid :border="true" :column-num="3" gutter="5px">
      <van-grid-item>
        <img src="~assets/img/mine/会 员1-01.svg" alt="" />
      </van-grid-item>
      <van-grid-item>
        <img src="~assets/img/mine/会 员1-01.svg" alt="" />
      </van-grid-item>
      <van-grid-item>
        <img src="~assets/img/mine/会 员1-01.svg" alt="" />
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
  height: 70px;
  width: 50px;
}
</style>
