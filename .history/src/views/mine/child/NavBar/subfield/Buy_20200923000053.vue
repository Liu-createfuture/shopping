<template>
  <div class="Buy">
    <!-- 头部 -->
    <nar-bar class="Buy-nar-bar">
      <div slot="left" @click="onClickLeft">
        <img src="~assets/img/navbar/左箭头.svg" alt="" />
      </div>
      <div slot="center" class="c">
        <input type="text" name="" id="" class="s" />
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
.s {
  width: 100%;
  height: 40px;
  border: 1px solid #dbdbdb;
  outline: none;
  font-size: 20px;
  text-indent: 10px;
}
.c {
  position: relative;
  width: 400px;
  margin: 10px auto;
  display: inline-block;
}
.c:after {
  content: "";
  display: inline-block;
  width: 0;
  height: 2px;
  background: red;
  transition: width 1s;
  position: absolute;
  bottom: 1px;
  left: 1px;
}
.active:after {
  width: calc(100% - 2px);
}
</style>
