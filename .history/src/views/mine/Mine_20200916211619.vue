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
  width: 100px;
  height: 50px;
  border: 1px solid black;
  background-color: blue;
  border-radius: 100px 100px 0 0;
}
</style>
