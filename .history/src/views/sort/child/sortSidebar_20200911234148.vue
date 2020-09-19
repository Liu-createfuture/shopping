<template>
  <div @click="onChange">
    <div v-for="(item, index) in SortList" :key="index">{{ item.title }}</div>
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
  components: {
    [Notify.Component.name]: Notify.Component,
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
      console.log();
      Notify({ type: "primary", message:  });
    },
  },
};
</script>

<style></style>
