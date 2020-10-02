<template>
  <div class="mine-group">
    <ul>
      <li v-for="(item, index) in a" :key="index">
        {{ item }}
        <van-divider
          :style="{
            color: '#1989fa',
            borderColor: '#1989fa',
            padding: '0 16px',
          }"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: ["haha", "aa", "bb", "dd"],
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
.mine-group ul {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.mine-group ul li {
  flex: 1;
}
</style>
