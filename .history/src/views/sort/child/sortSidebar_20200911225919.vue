<template>
  <van-sidebar v-model="activeKey" @change="onChange">
    <van-sidebar-item title="标签名1" />
    <van-sidebar-item title="标签名2" />
    <van-sidebar-item title="标签名3" />
  </van-sidebar>
</template>

<script>
import { Notify } from "vant";
export default {
  data() {
    return {
      activeKey: 0,
    };
  },
  props: {
    SortList: {
      type: Array,
      default: [],
    },
  },
  methods: {
    onChange(index) {
      console.log(this.SortList);
      Notify({ type: "primary", message: index });
    },
  },
};
</script>

<style></style>
