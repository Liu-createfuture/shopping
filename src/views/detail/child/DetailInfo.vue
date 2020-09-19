<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="desc">{{ detailInfo.desc }}</div>
    </div>
    <div class="info-key">{{ detailInfo.detailImage[0].key }}</div>
    <div class="info-list">
      <img
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :key="index"
        :src="item"
        @load="goodsImg"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default() {
        return;
      },
    },
  },
  methods: {
    goodsImg() {
      this.$emit("goodsImg");
    },
  },
};
</script>

<style scoped>
.goods-info {
  margin: 0 0.625rem;
  padding: 1.25rem 0;
}
.info-list img {
  width: 100%;
}
.info-desc .start,
.info-desc .end {
  position: relative;
  width: 5.625rem;
  height: 0.0625rem;
  background-color: #a3a3a5;
}
.info-desc .start::before,
.info-desc .end::after {
  position: absolute;
  bottom: 0;
  width: 0.3125rem;
  height: 0.3125rem;
  content: "";
  background-color: #333333;
}
.info-desc .end::after {
  right: 0;
}
.info-desc .desc {
  font-size: 0.875rem;
  padding: 0.9375rem 0;
}
.info-key {
  font-size: 0.9375rem;
  margin: 0.625rem 0 0.625rem 0.9375rem;
  color: #333333;
}
</style>