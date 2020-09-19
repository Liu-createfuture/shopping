<template>
  <div @click="onChange">111</div>
</template>

<script>
import { Notify } from "vant";
export default {
  data() {
    return {
      classIfyTypeIndex: 0,
    };
  },
  components:{
      
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
      Notify("通知内容");
      //   Notify({ type: "primary", message: this.SortList[index].title });
    },
  },
};
</script>

<style></style>
