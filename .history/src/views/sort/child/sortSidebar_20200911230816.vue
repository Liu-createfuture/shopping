<template>
  <van-sidebar v-model="activeKey" @change="onChange">
      <div></div>
    <van-sidebar-item title="标签名1" />
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
      default() {
        return [];
      },
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
