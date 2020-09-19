<template>
  <div class="class-ify-info">
    <div class="info-item" v-for="(item, index) in SortItems" :key="index">
      <a :href="item.link">
        <img :src="item.image" @load="imgInfo" alt />
      </a>
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    SortItems: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    imgInfo() {
      console.log("1");
    },
  },
};
</script>

<style scoped>
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
