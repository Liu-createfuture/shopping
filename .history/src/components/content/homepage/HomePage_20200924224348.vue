<template>
  <tab-bar v-show="c">
    <tab-bar-item path="/home" colors="red">
      <img slot="tab-bar-img-cative" src="~assets/img/tabbat/首页.svg" />
      <img slot="tab-bar-img-incative" src="~assets/img/tabbat/首页(1).svg" />
      <div slot="tab-bar-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/sort" colors="red">
      <img slot="tab-bar-img-cative" src="~assets/img/tabbat/功能.svg" />
      <img slot="tab-bar-img-incative" src="~assets/img/tabbat/功能(1).svg" />
      <div slot="tab-bar-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" colors="red">
      <img slot="tab-bar-img-cative" src="~assets/img/tabbat/购物车空.svg" />
      <img slot="tab-bar-img-incative" src="~assets/img/tabbat/购物车满.svg" />
      <div slot="tab-bar-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/mine" colors="red">
      <img slot="tab-bar-img-cative" src="~assets/img/tabbat/我的 (2).svg" />
      <img slot="tab-bar-img-incative" src="~assets/img/tabbat/我的 (1).svg" />
      <div slot="tab-bar-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBarItem from "../../common/tabbar/TabBarItem";
import TabBar from "components/common/tabbar/TabBar";
export default {
  components: {
    TabBar,
    TabBarItem,
  },
  computed: {
    c() {
      return this.$bus.$on("a", h);
    },
  },
};
</script>

<style scoped>
div {
  user-select: none;
}
img {
  user-select: none;
}
</style>
