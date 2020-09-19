<template>
  <div class="sort">
    <nav-bar/>
    <sort-sidebar />
  </div>
</template>

<script>
import Nav
import SortSidebar from "./child/SortSidebar";
export default {
  components: {
    SortSidebar,
  },
};
</script>

<style scoped></style>
