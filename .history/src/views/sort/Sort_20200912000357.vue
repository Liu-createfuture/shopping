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

import { SortClass } from "network/Sort";
export default {
  components: {
    NavBar,
    SortSidebar,
  },
  data() {
    return {
      SortList: [],
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
      });

//DOM

      this.$nextTick(() => {
        this.Product(this.SortList[0].list);
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
