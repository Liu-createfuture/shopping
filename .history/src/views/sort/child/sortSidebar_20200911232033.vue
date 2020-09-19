<template>
  <van-sidebar @change="onChange">
    <van-sidebar-item
    
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
      Notify({ type: "primary", message: this.SortList[index].title });
    },
  },
};
</script>

<style></style>
