<template>
  <div class="sort">
    <nav-bar> 
      <slot></slot>
    </nav-bar>
    <sort-sidebar />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import SortSidebar from "./child/SortSidebar";
export default {
  components: {
    NavBar,
    SortSidebar,
  },
};
</script>

<style scoped></style>
