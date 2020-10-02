<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#tab-bar {
  position: fixed;
  display: flex;
  bottom: 0;
  height: 50px;
  width: 100%;
  background-color: #efefefef;
  box-shadow: 0 0.1px 3px #918b8b;
}
</style>
