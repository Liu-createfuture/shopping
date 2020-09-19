<template>
  <div class="sort">
    <nav-bar>
      <div slot="center">分类</div>
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
  created() {
    //创建时调用
    this.SortClass();
  },
  methods: {
    SortClass() {
     Sort
    },
  },
};
</script>

<style scoped></style>
