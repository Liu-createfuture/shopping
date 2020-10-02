<template>
  <van-grid :column-num="3">
    <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
  </van-grid>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {};
</script>

<style></style>
