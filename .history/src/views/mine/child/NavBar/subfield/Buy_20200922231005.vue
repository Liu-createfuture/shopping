<template>
  <div class="a">
    <!-- 头部 -->
    <nar-bar></nar-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
  },
};
</script>

<style scoped></style>
