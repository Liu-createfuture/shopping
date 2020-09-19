<template>
  <div class="sort">
    <nav-bar />
    <sort-sidebar />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import SortSidebar from "./child/SortSidebar";
export default {
  components: {
    SortSidebar,
  },
};
</script>

<style scoped></style>
