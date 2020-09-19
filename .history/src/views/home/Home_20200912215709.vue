<template>
  <div id="home">
    <nav-bar>
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control @tabClick="tabClick" ref="tabcontrol1" v-show="arrows" class="tab-fixed" />
    <scroll
      class="scroll-content"
      ref="scroll"
      @scroll="contentScroll"
      @pullingUp="scrollBottom"
      :pull-up-load="true"
      :probe-type="3"
    >
      <swipe :banners="banners" @imgHeight="imgHeight" class="swiper-img" />
      <recommend :recommends="recommends" />
      <popular />
      <tab-control @tabClick="tabClick" ref="tabcontrol2" :popular=["流行", "精款", "推荐"]/>
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="arrows" />
  </div>
</template>

<script>
import Swipe from "components/common/swiper/Swiper";
import Scroll from "components/common/scroll/Scroll";
import NavBar from "components/common/navbar/NavBar";
import Popular from "./child/popular";
import GoodsList from "components/content/goodslist/GoodsList";
import Recommend from "./child/Recommend";
import TabControl from "components/content/tabcontrol/TabControl";

import { mixin, arrow } from "common/mixin";

import { getHomeMutidata, getHomeGoodsList } from "network/home";

export default {
  components: {
    Swipe,
    NavBar,
    Scroll,
    Popular,
    GoodsList,
    Recommend,
    TabControl,
  },
  mixins: [mixin, arrow],
  data() {
    return {
      banners: [],
      recommends: [],
      currentType: "pop",

      goods: {
        pop: {
          page: 0,
          list: [],
        },
        new: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
      },
    };
  },
  computed: {
    showGoods() {
      //把初始数据发送给goods-list组件,currentType点击谁就显示谁的数据
      return this.goods[this.currentType].list;
    },
  },
  created() {
    //创建时调用
    getHomeMutidata().then((res) => {
      //保存轮播图数据
      this.banners = res.data.banner.list;
      //保存推荐数据
      this.recommends = res.data.recommend.list;
    });
    //创建时调用获取标签页数据
    this.getHomeGoodsList("pop");
    this.getHomeGoodsList("new");
    this.getHomeGoodsList("sell");
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      //保存标签列表点击
      this.$refs.tabcontrol1.tabIndex = index;
      this.$refs.tabcontrol2.tabIndex = index;
    },
    getHomeGoodsList(type) {
      getHomeGoodsList(type, this.goods[type].page + 1).then((res) => {
        //把res.data.list的所有数据添加到goods的list里面
        this.goods[type].list.push(...res.data.list);
        //上拉加载一页
        this.goods[type].page += 1;
        //上拉加载更多
        this.$refs.scroll.finishPullUp();
      });
    },
    imgHeight() {
      //获取标签栏到顶部的高度

      this.arrowHeight = this.$refs.tabcontrol2.$el.offsetTop;
    },
    scrollBottom() {
      //上拉到底调用
      this.getHomeGoodsList(this.currentType);
    },
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
}
.scroll-content {
  height: calc(100% - 100px);
  overflow: hidden;
}
.tab-fixed {
  position: absolute;
  width: 100%;
  z-index: 99;
  background-color: #ffffff;
}
.swiper-img {
  height: 200px;
}
</style>
