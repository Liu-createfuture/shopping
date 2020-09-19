<template>
  <div class="detail-goods" v-if="Object.keys(goods).length !== 0">
    <div class="goods-info">{{goods.title}}</div>
    <div class="goods-info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="goods-info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length - 1].name}}</span>
    </div>
    <div class="goods-info-service">
      <span
        class="goods-info-service-item"
        v-for="(item,index) in goods.services.length - 1"
        :key="index"
      >
        <img :src="goods.services[item].icon" />
        <span>{{goods.services[item - 1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return;
      },
    },
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.detail-goods {
  margin: 0 10px;
}
.goods-info {
  text-align: justify;
  margin: 0.625rem 0;
  line-height: 1.25rem;
  color: #222222;
}
.goods-info-price {
  height: 2.5rem;
}
.n-price {
  font-size: 1.5625rem;
  color: #ff5777;
}
.o-price {
  text-decoration: line-through;
  color: #999999;
  margin: 0 0.3125rem;
  font-size: 0.9375rem;
}
.goods-info-price .discount {
  position: absolute;
  padding: 0.125rem 0.3125rem;
  background-color: #ff5777;
  color: aliceblue;
  border-radius: 1.25rem;
  text-align: center;
}
.goods-info-other,
.goods-info-service {
  display: flex;
  font-size: 0.8125rem;
  line-height: 3.125rem;
  justify-content: space-between;
  border-bottom: 0.0625rem solid rgba(100, 100, 100, 0.1);
  color: #999999;
  margin: 0.3125rem 0;
}
.goods-info-service {
  color: black;
}
.goods-info-service img {
  position: relative;
  top: 0.1875rem;
  left: -0.125rem;
  width: 0.9375rem;
}
</style>