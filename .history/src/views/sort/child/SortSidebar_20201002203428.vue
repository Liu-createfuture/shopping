<template>
  <div class="type-left">
    <scroll class="left">
      <div
        v-for="(item, index) in SortList"
        :key="index"
        @click="onChange(item, index)"
        class="trol"
        :class="classIndex === index ? 'srotColor' : ''"
      >
        {{ item.title }}
      </div>
    </scroll>
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
    onChange(item, index) {
      if (event.currentTarget.offsetTop > 330) {
       event.currentTarget.offsetTop offsetTop(0, 300);
      }
      this.classIndex = index;
      //通知栏
      Notify({ type: "primary", message: this.SortList[index].title });

      //分类数据
      const obj = {
        maitKey: item.maitKey,
        index,
      };
      this.$emit("Sidebar", obj);
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
.left {
  height: 100%;
}
.srotColor {
  background-color: #ffffff;
  font-weight: 700;
  border-left: 0.3125rem solid red;
}
.trol {
  text-align: center;
  height: 3.4375rem;
  width: 6.25rem;
  line-height: 3.4375rem;
  user-select: none;
}
</style>
