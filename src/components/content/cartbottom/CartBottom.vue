<template>
  <div>
    <img src="~assets/img/cart/选择.svg" alt v-if="ischecked" />
    <img src="~assets/img/cart/选择1.svg" alt v-else />
  </div>
</template>

<script>
export default {
  props: {
    ischecked: {},
  },
};
</script>

<style scoped>
img {
  height: 30px;
  width: 30px;
}
</style>