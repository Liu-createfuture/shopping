<template>
  <div class="recommend">
    <div v-for="(item, index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style scoped>
.recommend {
  display: flex;
  width: calc(100%);
  text-align: center;
  user-select: none;
}
.recommend-item {
  flex: 1;
  padding: 0.3125rem;
}
img {
  width: 5rem;
  height: 5rem;
}
</style>
