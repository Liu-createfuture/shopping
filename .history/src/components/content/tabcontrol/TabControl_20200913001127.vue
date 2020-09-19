<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in popular"
      :key="index"
      class="tab-control-item"
      @click="tabClick(index)"
      :class="{ tabColor: index === tabIndex }"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabIndex: 0,
    };
  },
  props: {
    popular: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    tabClick(index) {
      this.tabIndex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
}
.tab-control-item {
  flex: 1;
  height: 40px;
  line-height: 50px;
}
.tabColor span {
  width: 20px;
  color: pink;
  border-bottom: 3px solid pink;
  padding: 2px 7px;
}
span{
  
}
</style>
