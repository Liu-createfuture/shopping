<template>
  <div>
    <nav-bar>
      <div></div>
      <div slot="center">历史记录</div>
    </nav-bar>
    <slot name="a">
      <van-grid :border="false" :column-num="1">
        <van-grid-item>
          <van-image src="~assets/img/mine/头像.jpg" />
        </van-grid-item> </van-grid
    ></slot>
    <div slot="a"></div>
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
