<template>
  <div>
    <nav-bar>
      <div slot="left" @click="onClickLeft">
        <img src="~assets/img/navbar/左箭头.svg" alt />
      </div>
      <div slot="center">历史记录</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  components: {
    NavBar,
  },
  methods: {
    
    onClickLeft() {
      console.log("1");
    },
  },
};
</script>

<style></style>
