<template>
  <van-nav-bar title="标题" left-text="返回" left-arrow>
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>
</template>

<script>
export default {
      onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
  }
};
</script>

<style></style>
