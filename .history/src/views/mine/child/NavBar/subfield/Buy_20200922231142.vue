<template>
  <div class="a">
    <!-- 头部 -->
    <nar-bar>
      <div slot="left">11</div>
      <div slot="center">
        <input type="text" />
      </div>
      <div></div>
    </nar-bar>
  </div>
</template>

<script>
import NarBar from "components/common/navbar/NavBar";
export default {
  data() {
    return {};
  },
  components: {
    NarBar,
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
  },
};
</script>

<style scoped></style>
