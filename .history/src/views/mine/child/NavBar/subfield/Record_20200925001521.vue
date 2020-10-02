<template>
  <div>
    <nav-bar></nav-bar>
    <van-grid :gutter="10">
      <van-grid-item
        v-for="value in 1"
        :key="value"
        icon="photo-o"
        text="文字"
      />
    </van-grid>
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

<style></style>
