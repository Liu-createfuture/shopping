<template>
  <van-swipe :autoplay="3000" class="my-swipe">
    <van-swipe-item v-for="(item, index) in banners" :key="index">
      <img v-lazy="item.image||item" @load="height" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  data() {
    return {
      swipe: true,
    };
  },
  props: {
    banners: { type: Array, default: [] },
  },
  methods: {
    height() {
      if (this.swipe) {
        this.swipe = false;
        this.$emit("imgHeight");
      }
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>