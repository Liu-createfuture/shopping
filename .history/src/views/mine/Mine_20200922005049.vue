<template>
  <div class="mine">
    <!-- 顶部 -->
    <mine-nav-bar>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.mine {
  color: #eeeeee;
}
h3 {
  margin: 5px 0 0 10px;
}
.nav-bar {
  height: 150px;
  background-color: pink;
}
.nav-bar-top {
  display: flex;
  height: 50px;
  padding-top: 20px;
}
.nav-bar-top-label {
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  width: 200px;
  margin-left: -90px;
}
.nav-bar-top-label li {
  text-align: center;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 0 10px;
  border-radius: 50px;
}
.nav-bar-top img {
  height: 50px;
  margin-left: 15px;
}
.nav-bar-top-right {
  position: absolute;
  right: 20px;
}
.nav-bar-top-right img:nth-child(1) {
  height: 20px;
}
.nav-bar-top-right img:nth-child(2) {
  height: 20px;
}
</style>
