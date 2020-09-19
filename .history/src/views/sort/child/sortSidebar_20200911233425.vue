<template>
  <div @change="onChange">
    <div
      v-for="(item, index) in SortList"
      :key="index"
      :title="item.title"
      :class="
        classIfyTypeIndex === index
          ? 'van-sidebar-item van-sidebar-item--select'
          : ''
      "
    >{{item.}}</div>
  </div>
</template>

<script>
import { Notify } from "vant";
export default {
  data() {
    return {
      classIfyTypeIndex: 0,
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
      this.classIfyTypeIndex = index;
      Notify({ type: "primary", message: this.SortList[index].title });
    },
  },
};
</script>

<style></style>
