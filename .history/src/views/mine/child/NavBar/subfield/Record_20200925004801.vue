<template>
  <div class="Record">
    <nav-bar>
      <div></div>
      <div slot="center">历史记录</div>
    </nav-bar>
    <van-grid :border="true" :column-num="3" gutter="5px">
      <van-grid-item>
        <img src="this.$store.state.save" alt="" />
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
  computed: {
    a: this.$store.state.save,
  },
  activated() {
    console.log(this.$store.state.save);
  },
};
</script>

<style scoped>
.Record img {
  height: 70px;
  width: 50px;
}
</style>
