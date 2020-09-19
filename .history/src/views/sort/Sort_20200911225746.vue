<template>
  <div class="sort">
    <nav-bar>
      <div slot="center" :Sortlist="Sortlist">分类</div>
    </nav-bar>
    <sort-sidebar />
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
      Sortlist: [],
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
        this.Sortlist = res.data.category.list;
      });
    },
  },
};
</script>

<style scoped></style>
