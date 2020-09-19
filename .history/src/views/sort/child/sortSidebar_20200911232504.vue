<template>
  <van-sidebar @change="onChange">
    <van-sidebar-item
      v-for="(item, index) in SortList"
      :key="index"
      :title="item.title"
      :class="
        classIfyTypeIndex === index
          ? 'van-sidebar-item van-sidebar-item--select'
          : ''
      "
    />
  </van-sidebar>
</template>

<script>
import { Notify } from "vant";
export default {
  data() {
    return {
      classIfyTypeIndex: "",
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
