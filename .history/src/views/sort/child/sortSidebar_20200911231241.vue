<template>
  <div>
    <div v-if="(item, index) in SortList" :key="index"></div>
    <van-sidebar v-model="activeKey" @change="onChange">
      <van-sidebar-item title="item" />
    </van-sidebar>
  </div>
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
