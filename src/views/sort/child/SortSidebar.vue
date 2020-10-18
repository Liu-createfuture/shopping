<template>
  <div class="type-left">
    <scroll class="left" ref="scroll">
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
      //点击滑动
      if (index < 7) {
        this.$refs.scroll.scrollTo(0, 0);
      } else if (index >= 7 && index < 10) {
        this.$refs.scroll.scrollTo(0, -55 * (index - 6));
      } else if (index >= 10) {
        this.$refs.scroll.scrollTo(0, -165);
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
  width: 100px;
  height: calc(100% - 100px);
  background-color: #efefef;
  overflow: hidden;
}
.left {
  height: 100%;
}
.srotColor {
  background-color: #ffffff;
  font-weight: 700;
  border-left: 5px solid red;
}
.trol {
  text-align: center;
  height: 55px;
  width: 100px;
  line-height: 55px;
  user-select: none;
}
</style>
