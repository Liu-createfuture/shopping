<template>
  <div class="mine-shop">
    <nav-bar class="shop-nav-bar">
      <div slot="left" @click="onClickLeft">
        <img src="~assets/img/navbar/左箭头.svg" alt />
      </div>
      <div slot="center">历史记录</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  components: {
    NavBar,
  },
  methods: {
    // 返回
    onClickLeft() {
      console.log("1");
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
