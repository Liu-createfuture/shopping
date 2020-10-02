<template>
  <div class="detail">
    <detail-nav-bar class="detail-navbar" ref="navBar" @NavClick="NavClick" />
    <scroll
      class="detail-scroll"
      ref="scroll"
      :probeType="3"
      @scroll="contentScroll"
    >
      <swiper :banners="topImages" class="swiper-img" />
      <detail-goods :goods="goods" />
      <detail-shop-info :shop="shop" ref="heights" @imgItems="imgItems" />
      <detail-info :detailInfo="detailInfo" @goodsImg="goodsImg" />
      <detail-goods-param :paramInfo="paramInfo" ref="paramInfo" />
      <detail-comment-info :commentInfo="commentInfo" ref="commentInfo" />
      <goods-list :goods="recommends" ref="goodsInfo" />
    </scroll>
    <back-top @click.native="backClick" v-show="arrows" />
    <detail-action
      class="detail-action"
      :product="product"
      @shopping="shopping"
      :a="iid"
    />
  </div>
</template>

<script>
import Swiper from "components/common/swiper/Swiper";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/common/backTop/BackTop";
import GoodsList from "../../components/content/goodslist/GoodsList";
import DetailInfo from "./child/DetailInfo";
import DetailGoods from "./child/DetailGoods";
import DetailNavBar from "./child/DetailNavBar";
import DetailAction from "./child/DetailAction";
import DetailShopInfo from "./child/DetailShopInfo";
import DetailGoodsParam from "./child/DetailGoodsParam";
import DetailCommentInfo from "./child/DetailCommentInfo";

import { debouce } from "common/utils";

import { mixin, arrow } from "common/mixin";

import {
  Shop,
  Goods,
  Product,
  getDetail,
  GoodsParam,
  getRecommend,
} from "network/Detail";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      shop: {},
      goods: {},
      topImages: [],
      paramInfo: {},
      recommends: [],
      detailInfo: {},
      commentInfo: {},
      GoodsImgHeight: [],
      GoodsItemHeight: [],
      indexs: 0,
      product: {},
    };
  },
  mixins: [mixin, arrow],
  components: {
    Swiper,
    Scroll,
    BackTop,
    GoodsList,
    DetailInfo,
    DetailGoods,
    DetailAction,
    DetailNavBar,
    DetailShopInfo,
    DetailGoodsParam,
    DetailCommentInfo,
  },
  created() {
    //保存点进图片的路由id

    this.iid = this.$route.params.id;
    //请求点进图片的商品数据
    getDetail(this.iid).then((res) => {
      //保存所有数据
      const data = res.result;

      //保存轮播图数据
      this.topImages = data.itemInfo.topImages;

      //保存商品数据
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      //保存店家信息
      this.shop = new Shop(data.shopInfo);

      //保存商品详细数据
      this.detailInfo = data.detailInfo;

      //保存参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );

      //保存评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    //保存推荐信息
    getRecommend().then((res) => {
      this.recommends = res.data.list;
    });

    this.GoodsItemHeight = debouce(() => {
      this.GoodsImgHeight.push(0);
      this.GoodsImgHeight.push(this.$refs.paramInfo.$el.offsetTop);
      this.GoodsImgHeight.push(this.$refs.commentInfo.$el.offsetTop);
      this.GoodsImgHeight.push(this.$refs.goodsInfo.$el.offsetTop);
      this.GoodsImgHeight.push(Number.MAX_VALUE);
    }, 300);
  },

  methods: {
    goodsImg() {
      //调用防抖
      this.$refs.scroll.refresh();
      //调用节流的防抖
      this.GoodsItemHeight();
    },
    imgItems() {
      //获取商店到顶部的高度
      this.arrowHeight = this.$refs.heights.$el.offsetTop;
    },
    NavClick(index) {
      //点击跳转
      this.$refs.scroll.scrollTo(0, -this.GoodsImgHeight[index], 300);
    },
    contentScroll(position) {
      //移动显示箭头
      this.arrows = -position.y > this.arrowHeight;
      //保存移动的Y轴
      const positionY = -position.y;
      //保存个数
      const length = this.GoodsImgHeight.length;
      for (let i = 0; i < length - 1; i++) {
        if (
          this.indexs !== i &&
          positionY >= this.GoodsImgHeight[i] &&
          positionY <= this.GoodsImgHeight[i + 1]
        ) {
          this.indexs = i;
          this.$refs.navBar.countIndex = this.indexs;
        }
      }
    },
    shopping() {
      //保存产品信息
      
    },
  },
};
</script>

<style scoped>
.detail {
  position: relative;
  height: 100vh;
  overflow: hidden;
}
.detail-scroll {
  position: absolute;
  top: 3.125rem;
  left: 0;
  right: 0;
  height: calc(100% - 6.25rem);
}
.detail-navbar {
  position: relative;
  z-index: 99;
}
.detail-action {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
}
.swiper-img {
  height: 21.875rem;
}
</style>
