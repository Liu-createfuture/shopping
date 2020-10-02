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
        <img src="~assets/img/mine/分 享 .svg" alt @click="showShare = true" class="share" />
        <!-- 分享 -->
        <van-share-sheet
          v-model="showShare"
          title="立即分享给好友"
          :options="options"
          @select="onSelect"
          style="color:black"
        />
      </div>
    </nar-bar>
    <!-- 下拉菜单 -->
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
    <!-- 滑动单元格 -->
    <van-swipe-cell>
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        class="goods-card"
        thumb="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>
    <!-- 空状态 -->
    <van-empty v-show="submitListLength=0" />
    <van-empty v-show="submitListLength>0" />
    <van-empty v-show="submitListLength>0" />
  </div>
</template>

<script>
import { Toast } from "vant";
import NarBar from "components/common/navbar/NavBar";

import { mapGetters } from "vuex";
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
      //分享信息
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
  computed: {
    ...mapGetters(["submitListLength"]),
    a:
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
    //分享按钮
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
  },
  mounted() {},
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
  height: 25px;
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
.share {
  margin-left: 20px;
  width: 20px;
}
.goods-card {
  margin: 0;
}

.delete-button {
  height: 100%;
}
</style>
