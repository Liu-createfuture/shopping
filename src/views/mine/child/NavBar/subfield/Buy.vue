<template>
  <div class="Buy">
    <!-- 头部 -->
    <nar-bar class="buy-nar-bar">
      <div slot="left" @click="onClickLeft">
        <img src="~assets/img/navbar/左箭头.svg" alt />
      </div>
      <div slot="center">
        <input type="text" value="请输入搜索关键词" @click="inputClick" />
        <img src="~assets/img/mine/叉号.svg" alt class="Cross" />
      </div>
      <div slot="right">
        <img
          src="~assets/img/mine/分 享 .svg"
          alt
          @click="showShare = true"
          class="share"
        />
        <!-- 分享 -->
        <van-share-sheet
          v-model="showShare"
          title="立即分享给好友"
          :options="options"
          @select="onSelect"
          style="color: black"
        />
      </div>
    </nar-bar>
    <!-- 下拉菜单 -->
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item
        v-model="value2"
        :options="option2"
        @change="dropClick"
      />
    </van-dropdown-menu>
    <!-- 滑动单元格 -->
    <scroll class="swipe-scroll" ref="scroll">
      <div v-for="(item, index) in GoodsList" :key="index" class="slide-height">
        <van-swipe-cell v-if="item.checked ? false : true">
          <van-card
            :num="item.selectedNum"
            :price="Number(item.selectedSkuComb.price / 100).toFixed(2)"
            :title="item.selectedSkuComb.name"
            class="goods-card"
            :thumb="item.selectedSkuComb.imgUrl"
          />
          <div class="date">{{ date + item.date }}</div>
          <template #right>
            <van-button
              square
              text="删除"
              type="danger"
              class="delete-button"
              @click="deleteClick(item)"
            />
          </template>
        </van-swipe-cell>
      </div>
      <!-- 空状态 -->
      <van-empty v-show="goods" />
      <van-empty v-show="goods" />
      <van-empty v-show="goods" />
    </scroll>
  </div>
</template>
<script>
import { Toast } from "vant";
import NarBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import { mapGetters } from "vuex";

import { hideTabBer } from "common/mixin";

export default {
  //标签栏显示和隐藏
  mixins: [hideTabBer],
  data() {
    return {
      //订单Dom是否存在
      goods: "",
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
        { text: "价格(高 - 低)排序", value: "b" },
        { text: "价格(低 - 高)排序", value: "c" },
        { text: "数量(多 - 少)排序", value: "d" },
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
      //商品数据保存
      GoodsList: [],
      date: "购买时间:",
    };
  },
  components: {
    NarBar,
    Scroll,
  },
  computed: {
    ...mapGetters(["submitList", "submitListLength"]),
  },
  methods: {
    //返回箭头
    onClickLeft() {
      this.$router.back();
    },
    //表单
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
    //删除
    deleteClick(item) {
      item.checked = true;
      this.domExist();
    },
    //判断是否存在订单Dom元素
    domExist() {
      let div = document.getElementsByClassName("goods-card");
      this.$nextTick(() => {
        if (div.length === 0) {
          this.goods = true;
        } else {
          this.goods = false;
        }
      });
    },
    //下拉菜单点击
    dropClick(value) {
      switch (value) {
        case "a":
          //正序时间排序
          this.GoodsList.sort((a, b) => {
            return a.date < b.date ? 1 : -1;
          });
          break;
        case "b":
          //单价高到低排序
          this.GoodsList.sort((a, b) => {
            return a.selectedSkuComb.price < b.selectedSkuComb.price ? 1 : -1;
          });
          break;
        case "c":
          //单价低到高排序
          this.GoodsList.sort((a, b) => {
            return a.selectedSkuComb.price > b.selectedSkuComb.price ? 1 : -1;
          });
          break;
        case "d":
          //数量多到少排序
          this.GoodsList.sort((a, b) => {
            return a.selectedNum < b.selectedNum ? 1 : -1;
          });
          break;
      }
    },
  },
  activated() {
    //商品数据
    this.GoodsList = this.$store.state.submitList;
    this.$refs.scroll.refresh();
    //处于活跃时默认下拉菜单
    this.value1 = 0;
    this.value2 = "a";
    this.dropClick("a");
    this.domExist();
  },
};
</script>

<style scoped>
.Buy {
  height: 100vh;
  overflow: hidden;
}
.buy-nar-bar > div img {
  height: 2.5rem;
  margin-top: 0.3125rem;
}
input {
  width: 80%;
  height: 1.5625rem;
  border: 0.0625rem solid #dbdbdb;
  font-size: 0.9375rem;
  text-indent: 0.625rem;
  color: #cabfbfef;
  border-radius: 3.125rem;
  padding-right: 1.875rem;
}
input:focus {
  border: 0.0625rem solid #03a9f4;
  transition: 1s;
  color: black;
}
.Cross {
  position: absolute;
  left: 17.5rem;
  top: 0;
  width: 1.25rem;
}
.share {
  margin-left: 1.25rem;
  width: 1.25rem;
}
.goods-card {
  margin: 0;
}
.delete-button {
  height: 100%;
}
.date {
  position: absolute;
  left: 7rem;
  top: 3.3125rem;
  font-size: 0.75rem;
  color: #8f8e8eef;
}
.swipe-scroll {
  height: calc(100% - 6.125rem);
  overflow: hidden;
}
.slide-height {
  height: 100%;
}
</style>
