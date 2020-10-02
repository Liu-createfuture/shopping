<template>
  <div>
    <nav-bar>
      <div></div>
      <div slot="center">历史记录</div>
    </nav-bar>
    <van-grid :border="false" :column-num="3">
      <van-grid-item icon-size=''>
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

<style></style>
