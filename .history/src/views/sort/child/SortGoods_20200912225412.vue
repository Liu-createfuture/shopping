<template>
  <div class="class-ify-info">
    <div class="info-item" v-for="(item, index) in GoodsList" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt @load="scroll" />
      </a>
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    GoodsList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.class-ify-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
  padding: 0.625rem;
}
.info-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 5rem;
  height: 6.25rem;
  margin: 0.625rem 0;
}
img {
  width: 4.0625rem;
}
</style>
