<template>
  <div class="sort">
    <nav-bar>
      <div slot="center">分类</div>
    </nav-bar>
    <sort-sidebar :SortList="SortList" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import SortSidebar from "./child/SortSidebar";
import SortInfo from "./child/SortInfo";

import { SortClass, SortItem } from "network/Sort";
export default {
  components: {
    NavBar,
    SortInfo
    SortSidebar,
  },
  data() {
    return {
      SortList: [],
      SortItems: [],
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
  },
};
</script>

<style scoped>
.sort {
  height: 100vh;
}
</style>
