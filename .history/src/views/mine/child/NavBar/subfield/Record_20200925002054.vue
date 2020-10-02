<template>
  <div>
    <nav-bar>
      <div></div>
      <div slot="center">历史记录</div>
    </nav-bar>
    <van-grid :border="false" :column-num="3">
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
      </van-grid-item>
    </van-grid>
    <div slot="van-grid-item"></div>
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
