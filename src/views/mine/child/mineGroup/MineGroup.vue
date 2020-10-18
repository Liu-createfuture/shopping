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
    <h5>版本1.00</h5>
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
    groupClick(index) {},
  },
};
</script>

<style scoped>
.mine-group {
  position: relative;
  top: 3.4375rem;
  height: 18.75rem;
  width: 21.875rem;
  margin: 0 auto;

  background-color: #efefefef;
}
.mine-group ul {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-size: 0.9375rem;
}
.mine-group ul li {
  flex: 1;
  text-indent: 1.5rem;
  line-height: 3.75rem;
  border-bottom: 0.0625rem solid #ccccccfe;
}
.mine-group ul li img {
  vertical-align: text-top;
  margin-right: 0.3125rem;
  height: 1.125rem;
}
.mine-group ul li img:last-child {
  position: absolute;
  right: 1.5625rem;
  margin-top: 1.3125rem;
}
.mine-group ul li:last-child {
  border-bottom: 0rem;
}
h5 {
  text-align: center;
}
</style>
