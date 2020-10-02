<template>
  <!-- 分栏 -->
  <div class="nav-bar-top-subfield">
    <ul>
      <li
        v-for="(item, index) in subfield"
        :key="index"
        @click="IconClick(item, index)"
      >
        <img :src="imgsrc[index].img" alt />
        <h5>{{ item }}</h5>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subfield: ["未购买", "已购买", "历史记录", "我的"],
      imgsrc: [
        { img: require("@/assets/img/mine/购买.svg") },
        { img: require("@/assets/img/mine/购买(1).svg") },
        { img: require("@/assets/img/mine/历史记录.svg") },
        { img: require("@/assets/img/mine/我 的.svg") },
      ],
    };
  },
  methods: {
    IconClick(item, index) {
     switch (index){
       case 0 
     }
    },
  },
  activated() {},
};
</script>

<style scoped>
/* 分栏 */
.nav-bar-top-subfield {
  margin-top: 20px;
}
.nav-bar-top-subfield ul {
  display: flex;
  justify-content: space-evenly;
  text-align: center;
}
.nav-bar-top-subfield ul li {
  width: 60px;
}
.nav-bar-top-subfield ul img {
  height: 25px;
}
h5 {
  margin: 0;
}
</style>
