<template>
  <div id="sort">
    <nav-bar>
      <div slot="center">分类</div>
    </nav-bar>
    <div class="tab">
      <tab-control
        :popular="SortTab"
        @tabClick="tabClick"
        ref="tab1"
        v-show="arrows"
        class="tab-control"
      />
    </div>
    <sort-sidebar :SortList="SortList" @Sidebar="SidebarClick" />
    <scroll class="right" ref="scroll" :probe-type="3" @scroll="SortScroll">
      <sort-info :SortItems="SortItems" />
      <tab-control :popular="SortTab" @tabClick="tabClick" ref="tab" />
      <goods-list :goods="SortTabItemList" />
    </scroll>
    <back-top @click.native="backClick" v-show="arrows" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import SortInfo from "./child/SortInfo";
import GoodsList from "components/content/goodslist/GoodsList";
import TabControl from "components/content/tabcontrol/TabControl";
import SortSidebar from "./child/SortSidebar";

import { mixin, arrow } from "common/mixin";

import { SortClass, SortItem, SortTabItem } from "network/Sort";

import { Toast } from "vant";

import xios
export default {
  components: {
    NavBar,
    Scroll,
    SortInfo,
    GoodsList,
    TabControl,
    SortSidebar,
  },
  data() {
    return {
      TabY: 0,
      SortList: [],
      SortItems: [],
      SortType: "pop",
      SortTabIndex: 0,
      SortTab: ["时尚", "流行", "新款"],
      SortTabItemList: [],
    };
  },
  mixins: [mixin, arrow],
  created() {
    //创建时调用
    this.SortClass();
    axios
  },
  methods: {
    SortClass() {
      SortClass().then((res) => {
        //保存分类数据
        this.SortList = res.data.category.list;

        //Dom加载完调用，显示第一个分类的商品信息
        this.$nextTick(() => {
          this.Product(this.SortList[0].maitKey);
          this.tabItemClick(this.SortList[0].miniWallkey, this.SortType);
        });
      });
    },
    Product(key) {
      SortItem(key).then((res) => {
        //保存商品信息
        this.SortItems = res.data.list;
      });
    },
    SidebarClick({ maitKey, index }) {
      //点击侧边获取每个分类的商品
      this.Product(maitKey);
      this.SortTabIndex = index;

      //获取每个分类商品里的Tab商品图片数据
      this.tabItemClick(
        this.SortList[this.SortTabIndex].miniWallkey,
        this.SortType
      );
      //切换侧边分类时默认["流行", "新款", "精选"]默认第一个
      this.$refs.tab.tabIndex = 0;
      this.$refs.tab1.tabIndex = 0;

      //切换时默认0高度
      this.$refs.scroll.scrollTo(0, 0);

      Toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 200,
      });
    },
    //获取Tab点击的商品信息
    tabItemClick(key, type) {
      SortTabItem(key, type).then((res) => {
        //保存商品图片
        this.SortTabItemList = res;
      });
    },
    tabClick(index) {
      //点击获取商品
      const type = ["pop", "new", "sell"];
      this.tabItemClick(
        this.SortList[this.SortTabIndex].miniWallkey,
        type[index]
      );

      //切换标签栏时记录上一次点击的["流行", "新款", "精选"]中的一个
      this.$refs.tab1.tabIndex = index;
      this.$refs.tab.tabIndex = index;
    },
    //箭头隐藏判断
    SortScroll(position) {
      this.TabY = this.$refs.tab.$el.offsetTop;
      this.arrows = -position.y > this.TabY;
    },
  },
};
</script>

<style scoped>
#sort {
  height: 100vh;
}
.right {
  position: absolute;
  left: 6.25rem;
  top: 3.125rem;
  right: 0;
  width: calc(100% - 6.25rem);
  height: calc(100% - 5.875rem);
  overflow: hidden;
}
.tab-control {
  position: relative;
  top: 0;
  right: 0;
  width: 100%;
  background-color: #ffffff;
  z-index: 9;
}
.tab {
  float: right;
  width: calc(100% - 6.25rem);
}
</style>
