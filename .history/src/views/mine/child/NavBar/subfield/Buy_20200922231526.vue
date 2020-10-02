<template>
  <div class="Buy">
    <!-- 头部 -->
    <nar-bar class="Buy-nar-bar">
      <div slot="left" @click="onClickLeft">
        <img src="~assets/img/navbar/左箭头.svg" alt="" />
      </div>
      <div slot="center">
        <input type="text" />
      </div>
    </nar-bar>
  </div>
</template>

<script>
import NarBar from "components/common/navbar/NavBar";
export default {
  data() {
    return {};
  },
  components: {
    NarBar,
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.Buy-nar-bar > div img {
  height: 40px;
  margin-top: 5px;
}
.input {
  border-radius: 50px;
}
</style>
