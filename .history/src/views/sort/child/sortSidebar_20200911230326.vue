<template>
  <van-sidebar v-model="activeKey" @change="onChange">
    <div v-if="(item,index) in SortList" :><van-sidebar-item title="标签名1" /></div>
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
      Notify({ type: "primary", message: index });
    },
  },
};
</script>

<style></style>
