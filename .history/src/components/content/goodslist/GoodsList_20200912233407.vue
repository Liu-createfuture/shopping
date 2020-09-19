<template>
  <div class="goods-list">
    <goods-list-item
      v-for="(item, index) in goods"
      :key="index"
      :goodsItem="item"
    />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  components: {
    GoodsListItem,
  },
  data() {
    return {};
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 50px;
  margin-top: 10px;
}
</style>
