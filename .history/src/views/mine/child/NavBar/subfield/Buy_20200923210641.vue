<template>
  <div class="Buy">
    <!-- 头部 -->
    <nar-bar class="Buy-nar-bar">
      <div slot="left" @click="onClickLeft">
        <img src="~assets/img/navbar/左箭头.svg" alt />
      </div>
      <div slot="center">
        <input type="text" value="请输入搜索关键词" @click="inputClick" />
        <img src="~assets/img/mine/叉号.svg" alt class="Cross" />
      </div>
      <div slot="right">
        <div @click="showShare = true">分享</div>
        <van-share-sheet v-model="showShare" title="立即分享给好友" :options="options" @select="onSelect" />
      </div>
    </nar-bar>
    <!-- 下拉菜单 -->
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
    <!-- 空状态 -->
    <van-empty />
    <van-empty />
    <van-empty />
  </div>
</template>

<script>
import { Toast } from "vant";
import NarBar from "components/common/navbar/NavBar";
export default {
  data() {
    return {
      //下拉菜单信息
      value1: 0,
      value2: "a",
      option1: [
        { text: "全部商品", value: 0 },
        { text: "电子产品", value: 1 },
        { text: "活动商品", value: 2 },
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "价格排序", value: "b" },
        { text: "数量排序", value: "c" },
      ],

      showShare: false,
      options: [
        { name: "微信", icon: "wechat" },
        { name: "微博", icon: "weibo" },
        { name: "复制链接", icon: "link" },
        { name: "分享海报", icon: "poster" },
        { name: "二维码", icon: "qrcode" },
      ],
    };
  },
  components: {
    NarBar,
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    inputClick() {
      var text = document.querySelector("input");
      text.onfocus = function () {
        if (this.value === "请输入搜索关键词") {
          this.value = "";
        }
      };
      text.onblur = function () {
        if (this.value === "") {
          this.value = "请输入搜索关键词";
        }
      };
    },

    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
  },
};
</script>

<style scoped>
.Buy {
  height: 100vh;
  overflow: hidden;
}
.Buy-nar-bar > div img {
  height: 40px;
  margin-top: 5px;
}
input {
  width: 80%;
  height: 30px;
  border: 1px solid #dbdbdb;
  font-size: 15px;
  text-indent: 10px;
  color: #cabfbfef;
  border-radius: 50px;
  padding-right: 30px;
}
input:focus {
  border: 1px solid #03a9f4;
  transition: 1s;
  color: black;
}
.Cross {
  position: absolute;
  left: 280px;
  top: 0;
  width: 20px;
}
</style>
