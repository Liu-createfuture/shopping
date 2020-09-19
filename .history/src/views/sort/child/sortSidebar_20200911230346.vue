<template>
  <div>
    <van-sidebar v-model="activeKey" @change="onChange">
      <div v-if="(item, index) in SortList" :key="index">
        <van-sidebar-item title="item" />
      </div>
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
      Notify({ type: "primary", message: index });
    },
  },
};
</script>

<style></style>
