<template>
  <div class="mine-group">
    <ul>
      <li
        v-for="(item, index) in category"
        :key="index"
        @click="groupClick(index)"
      >
        <img :src="imgsrc[index].img" alt="" />
        {{ item }}
        <img src="~assets/img/mine/group/右箭头.svg" alt="" />
      </li>
    </ul>
    11
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: ["我的会员", "我的收获地址", "联系客服", "意见反馈", "设置"],
      imgsrc: [
        { img: require("@/assets/img/mine/group/会员.svg") },
        { img: require("@/assets/img/mine/group/收货地址.svg") },
        { img: require("@/assets/img/mine/group/联系客服.svg") },
        { img: require("@/assets/img/mine/group/意见反馈.svg") },
        { img: require("@/assets/img/mine/group/设置.svg") },
      ],
    };
  },
  methods: {
    groupClick(index) {
      console.log(index);
    },
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

  background-color: #efefefef;
}
.mine-group ul {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-size: 15px;
}
.mine-group ul li {
  flex: 1;
  text-indent: 1.5rem;
  line-height: 60px;
  border-bottom: 1px solid #ccccccfe;
}
.mine-group ul li img {
  vertical-align: text-top;
  margin-right: 5px;
  height: 18px;
}
.mine-group ul li img:last-child {
  position: absolute;
  right: 25px;
  margin-top: 21px;
}
.mine-group ul li:last-child {
  border-bottom: 0px;
}
</style>
