<template>
  <div class="sort">
    <nav-bar>
      <div slot="center">分类</div>
    </nav-bar>
    <sort-sidebar :SortList="SortList" @Sidebar="SidebarClick" />
    <scroll class="right" ref="scroll" :probe-type="3">
      <sort-info :SortItems="SortItems" />
      <tab-control :popular="SortTab" @tabClick="a" />
      <sort-goods />
    </scroll>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import SortTab from "./child/SortTab";
import SortInfo from "./child/SortInfo";
import SortGoods from "./child/SortGoods";
import SortSidebar from "./child/SortSidebar";

import { SortClass, SortItem, SortTabItem } from "network/Sort";
export default {
  components: {
    NavBar,
    Scroll,
    SortTab,
    SortInfo,
    SortGoods,
    TabControl,
    SortSidebar,
  },
  data() {
    return {
      SortList: [],
      SortItems: [],
      SortType: "pop",
      SortTabIndex: 0,
    };
  },
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

      this.tabItemClick(
        this.SortItems[this.SortTabIndex].minWallkey,
        this.SortType
      );
    },
    //获取Tab点击的商品信息
    tabItemClick(key, type) {
      SortTabItem(key, type).then((res) => {
        console.log(res);
      });
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
