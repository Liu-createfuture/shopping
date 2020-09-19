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
  height: 100px;
  line-height: 100px;
  background-color: pink;
  border-radius: 0 0 50% 50%;
}
</style>
