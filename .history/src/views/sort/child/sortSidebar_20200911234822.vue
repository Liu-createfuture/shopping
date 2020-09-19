<template>
  <div class="type-left">
      <scroll>
    <div
      v-for="(item, index) in SortList"
      :key="index"
      @click="onChange(index)"
      :class="classIndex === index ? 'srotColor' : ''"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
import { Notify } from "vant";

import Scroll from "components/common/scroll/Scroll";
export default {
  data() {
    return {
      classIndex: 0,
    };
  },
  components: {
    Scroll,
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
      this.classIndex = index;
      Notify({ type: "primary", message: this.SortList[index].title });
    },
  },
};
</script>

<style scpoed>
.type-left {
  width: 6.25rem;
  height: calc(100% - 5.875rem);
  background-color: #efefef;
  overflow: hidden;
}
.srotColor {
  background-color: #ffffff;
  font-weight: 700;
  border-left: 0.3125rem solid red;
}
</style>
