<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 50px;
  line-height: 50px;
  box-shadow: 0 -2px 10px #918b8b;
  color: black;
}
.left,
.right {
  width: 3.75rem;
}
.center {
  flex: 1;
  text-align: center;
  height: 100%;
}
</style>
