<template>
  <div>
    <nav-bar>
      <div></div>
      <div slot="center">历史记录</div>
    </nav-bar>
    <van-grid :border="false" :column-num="1">
      <van-grid-item>
        <img src="../../../../../assets/img/mine/" alt="">
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

<style></style>
