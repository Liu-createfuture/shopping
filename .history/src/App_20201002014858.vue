<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <home-page />
  </div>
</template>

<script>
import HomePage from "components/content/homepage/HomePage";
export default {
  components: {
    HomePage,
  },
};
</script>

<style>
@import "./assets/css/app.css";
</style>
