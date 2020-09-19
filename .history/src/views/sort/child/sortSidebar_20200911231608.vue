<template>
  <van-sidebar v-model="activeKey" @change="onChange">
    <van-sidebar-item
      v-for="(item, index) in SortList"
      :key="index"
      :title="item.title"
    />
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
      Notify({ type: "primary", message: item.title });
    },
  },
};
</script>

<style></style>
