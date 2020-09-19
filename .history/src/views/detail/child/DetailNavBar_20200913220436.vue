<template>
  <nav-bar class="detail-nav-bar">
    <div slot="left" class="left" @click="returnClick">
      <img src="~assets/img/navbar/左箭头.svg" alt />
    </div>
    <div slot="center" class="center">
      <div
        v-for="(item, index) in NavBarItem"
        :key="index"
        :class="{ subscript: judge(index) }"
        @click="navClick(index)"
      >
        <span :class="{ pink: judge(index) }">{{ item }}</span>
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  data() {
    return {
      NavBarItem: ["商品", "参数", "评论", "推荐"],
      countIndex: 0,
    };
  },
  components: {
    NavBar,
  },
  methods: {
    returnClick() {
      //返回上一层
      this.$router.back();

    },
    navClick(index) {
      this.countIndex = index;
      this.$emit("NavClick", index);
    },
    judge(index) {
      if (this.countIndex === index) return true;
    },
  },
};
</script>

<style scoped>
.detail-nav-bar {
  background-color: #ffffff;
}
.center {
  display: flex;
  color: black;
  justify-content: space-around;
  font-size: 0.9375rem;
}
p {
  flex: 1;
}
.left img {
  height: 2.5rem;
  margin-left: 0.9375rem;
  margin-top: 0.3125rem;
}
.pink {
  color: pink;
  border-bottom: 0.1875rem solid pink;
  margin-bottom: 0.625rem;
}
</style>
