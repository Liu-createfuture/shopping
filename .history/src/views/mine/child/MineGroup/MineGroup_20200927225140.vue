<template>
  <div class="mine-group">
    <div v-for="(item, index) in a" :key="index">
      <div>{{ item[index].text }}</div>
      <van-divider
        :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: [{ text: "haha" }, { text: "aa" }],
    };
  },
};
</script>

<style scoped>
.mine-group {
  position: relative;
  top: 55px;
  height: 300px;
  width: 350px;
  margin: 0 auto;
  border-radius: 50px;
  background-color: #efefefef;
}
</style>
