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
  data(){
    return{
      list:[]
    }
  },
  created() {
    //创建时调用
    this.SortClass();
  },
  methods: {
    SortClass() {
      SortClass().then((res) => {
        this.list = res.data.category.list
        console.log();
      });
    },
  },
};
</script>

<style scoped></style>
