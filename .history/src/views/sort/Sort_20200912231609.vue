<template>
  <div class="sort">
    <nav-bar>
      <div slot="center">分类</div>
    </nav-bar>
    <sort-sidebar :SortList="SortList" @Sidebar="SidebarClick" />
    <scroll class="right" ref="scroll" :probe-type="3" @scroll="SortScroll">
      <sort-info :SortItems="SortItems" />
      <tab-control :popular="SortTab" @tabClick="tabClick" ref="tab" />
      <goods-list :goods="SortTabItemList" />
    </scroll>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import SortInfo from "./child/SortInfo";
import GoodsList from "components/content/goodslist/GoodsList";
import TabControl from "components/content/tabcontrol/TabControl";
import SortSidebar from "./child/SortSidebar";

import { SortClass, SortItem, SortTabItem } from "network/Sort";

import { mixin, arrow } from "common/mixin";

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
      SortList: [],
      SortItems: [],
      SortType: "pop",
      SortTabIndex: 0,
      SortTab: ["时尚", "流行", "新款"],
      SortTabItemList: [],
      TabY: 0,
    };
  },
  mixins: [mixin, arrow],
  created() {
    //创建时调用
    this.SortClass();
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

      //切换时默认0高度
      this.$refs.scroll.scrollTo(0, 0);
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
    },
    SortScroll(position) {
      this.TabY = this.$refs.tab.$el.offsetTop;
      -position.y >this.Tab
    },
  },
};
</script>

<style scoped>
.sort {
  height: 100vh;
}
.right {
  position: absolute;
  left: 6.25rem;
  top: 50px;
  right: 0;
  width: calc(100% - 6.25rem);
  height: calc(100% - 5.875rem);
  overflow: hidden;
}
</style>
