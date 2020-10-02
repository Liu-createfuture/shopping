<template>
  <div class="mine-group">
    <ul>
      <li v-for="(item, index) in a" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: ["haha", "aa", "bb", "dd", "hh", "hh"],
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
  text-align: center;
  height: 40px;
  padding-top: 10px;
}
</style>
