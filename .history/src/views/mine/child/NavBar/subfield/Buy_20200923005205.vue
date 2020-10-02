<template>
  <div class="Buy">
    <!-- 头部 -->
    <nar-bar class="Buy-nar-bar">
      <div slot="left" @click="onClickLeft">
        <img src="~assets/img/navbar/左箭头.svg" alt="" />
      </div>
      <div slot="center">
        <input type="text" value="请输入搜索关键词" @click="inputClick" />
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
    inputClick(value) {
      var text = document.querySelector("input");
      text.onfocus = () => {
        if (value === "请输入搜索关键词") {
          value = "";
        }
      };
      text.onblur = () => {
        if (value === "") {
          value = "请输入搜索关键词";
        }
      };
    },
  },
};
</script>

<style scoped>
.Buy-nar-bar > div img {
  height: 40px;
  margin-top: 5px;
}
input {
  width: 100%;
  height: 30px;
  border: 1px solid #dbdbdb;
  font-size: 15px;
  text-indent: 10px;
  color: #cabfbfef;
  border-radius: 50px;
}
input:focus {
  border: 1px solid #03a9f4;
  transition: 1s;
  color: black;
}
</style>
