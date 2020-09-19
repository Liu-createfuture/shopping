<template>
  <div class="sort">
    <nav-bar/>
    <sort-sidebar />
  </div>
</template>

<script>
import NavBar from "../../common/"
import SortSidebar from "./child/SortSidebar";
export default {
  components: {
    SortSidebar,
  },
};
</script>

<style scoped></style>
