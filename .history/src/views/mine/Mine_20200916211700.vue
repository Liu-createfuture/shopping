<template>
  <div>
    <nav-bar class="a">
      <div slot="center">我的</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.a {
  height: 150px;
  background-color: blue;
  border-radius: 0 0 50% 100px;
}
</style>
