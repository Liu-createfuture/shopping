<template>
  <div class="mine">
    <div class="nav-bar">
      <div class="nav-bar-center">
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
    </div>
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
.nav-bar {
  height: 150px;
  line-height: 130px;
  background: pink;
}
.nav-bar-center {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
}
.nav-bar-center span {
  width: 100px;
  background-color: red;
}
</style>
