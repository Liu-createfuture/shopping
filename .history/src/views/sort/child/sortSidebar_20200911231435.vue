<template>
  <div>
    <div></div>
    <van-sidebar v-model="activeKey" @change="onChange">
      <van-sidebar-item
        v-for="(item, index) in SortList"
        :key="index"
        :title="item"
      />
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
      type: Object,
      default() {
        return {};
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
