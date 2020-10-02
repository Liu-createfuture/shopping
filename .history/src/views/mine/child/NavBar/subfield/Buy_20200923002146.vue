<template>
  <div class="Buy">
    <!-- 头部 -->
    <nar-bar class="Buy-nar-bar">
      <div slot="left" @click="onClickLeft">
        <img src="~assets/img/navbar/左箭头.svg" alt="" />
      </div>
      <div slot="center">
        <input type="text" class="s" />
      </div>
      <div slot="right"></div>
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
.s {
  width: 100%;
  height: 30px;
  border: 1px solid #dbdbdb;
  font-size: 20px;
  text-indent: 10px;
  color: black;
  border-radius: 50px;
}
.s:focus {
  border-style: solid;
  border-color: #03a9f4;
}
</style>
