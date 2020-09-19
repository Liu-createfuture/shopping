<template>
  <div>
    <div v-for="(item, index) in SortList" :key="index" @click="onChange">
      {{ item.title }}
    </div>
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
      console.log(this.SortList[index]);
      this.classIfyTypeIndex = index;
      Notify({ type: this.SortList[index].title });
    },
  },
};
</script>

<style></style>
