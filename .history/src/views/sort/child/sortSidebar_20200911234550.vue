<template>
  <div>
    <div
      v-for="(item, index) in SortList"
      :key="index"
      @click="onChange(index)"
      :class="{classIndex == index?}"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
import { Notify } from "vant";
export default {
  data() {
    return {
      classIndex: 0,
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
      Notify({ type: "primary", message: this.SortList[index].title });
    },
  },
};
</script>

<style></style>
