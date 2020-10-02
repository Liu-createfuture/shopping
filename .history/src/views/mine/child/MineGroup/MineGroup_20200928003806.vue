<template>
  <div class="mine-group">
    <ul>
      <li v-for="(item, index) in category" :key="index">
        <img src="~assets/img/cart/选择.svg" alt="" />
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: ["我的会员", "我的收获地址", "联系客服", "意见反馈", "设置"],
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
  font-size: 14px;
}
.mine-group ul li {
  text-indent: 2rem;
  flex: 1;
  line-height: 50px;
  border-bottom: 1px solid #ccccccfe;
}
.mine-group ul li
.mine-group ul li:last-child {
  border-bottom: 0px;
}
</style>
