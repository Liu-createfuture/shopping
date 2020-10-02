<template>
  <div class="tab-bar-item" @click="TabBarClick">
    <div v-if="!active">
      <slot name="tab-bar-img-cative"></slot>
    </div>
    <div v-else>
      <slot name="tab-bar-img-incative"></slot>
    </div>
    <div :style="colour">
      <slot name="tab-bar-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
    },
    colors: {
      type: String,
    },
  },
  methods: {
    //点击切换图标
    TabBarClick() {
      if (this.$route.path === this.path) {
        return;
      }
      return this.$router.push(this.path);
    },
  },
  computed: {
    active() {
      return this.$route.path == this.path;
    },
    colour() {
      return this.active ? { color: this.colors } : "";
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  margin-top: 5px;
  font-size: 15px;
}
.tab-bar-item img {
  height: 23px;
  width: 23px;
}
</style>
