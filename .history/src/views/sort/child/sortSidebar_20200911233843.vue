<template>
  <div @change="onChange">111</div>
</template>

<script>
// import { Notify } from "vant";
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
      Notify('通知内容');
    onChange(index) {
      this.classIfyTypeIndex = index;
    //   Notify({ type: "primary", message: this.SortList[index].title });
    },
  },
};
</script>

<style></style>
