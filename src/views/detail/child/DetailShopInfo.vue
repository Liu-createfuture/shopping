<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" @load="imgHeight" />
      <span class="title">{{ shop.name }}</span>
      <span class="follow" v-if="followJudge" @click="followClick"
        >已关注店铺</span
      >
      <span class="follow-too" v-else @click="followClick">关注店铺</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">{{ shop.sells }}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{ shop.goodsCount }}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ 'score-better': item.isBetter }">
              {{ item.score }}
            </td>
            <td class="better" :class="{ 'better-more': item.isBetter }">
              {{ item.isBetter ? "高" : "低" }}
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default() {
        return;
      },
    },
  },
  computed: {
    followJudge() {
      return this.$store.state.followIon;
    },
  },
  methods: {
    imgHeight() {
      this.$emit("imgItems");
    },
    //关注店铺
    followClick() {
      this.$store.commit("followClick", this.shop);
    },
  },
};
</script>

<style scoped>
.shop-info {
  margin: 1.25rem 0.625rem;
}
.shop-top {
  display: flex;
  align-items: center;
}
.shop-top img {
  height: 3.125rem;
  border-radius: 50%;
}
.follow,
.follow-too {
  position: absolute;
  right: 35px;
  padding: 5px 7px;
  border-radius: 20px;
  background-color: #ff5777;
  font-weight: 600;
}
.follow-too {
  background-color: #f2f5f8;
}
.title {
  margin-left: 0.625rem;
}
.shop-middle {
  display: flex;
  align-items: center;
  margin-top: 0.9375rem;
}
.shop-middle-item {
  flex: 1;
}
.shop-middle-left,
.shop-middle-right {
  display: flex;
  line-height: 1.5625rem;
  justify-content: space-evenly;
  text-align: center;
  color: #333333;
}
.shop-middle-left {
  border-right: 0.0625rem solid rgba(0, 0, 0, 0.1);
}
.shop-middle-right .score {
  color: #5ea732;
}
.shop-middle-right .score-better {
  color: #f13e3a;
}
.shop-middle-right .better-more {
  background-color: #f13e3a;
}
.better {
  padding: 0.1875rem;
  text-align: center;
  color: #ffffff;
  background-color: #5ea732;
}
.shop-bottom {
  margin-top: 0.625rem;
  text-align: center;
}
.enter-shop {
  font-size: 0.875rem;
  line-height: 1.875rem;
  display: inline-block;
  width: 9.375rem;
  height: 1.875rem;
  text-align: center;
  border-radius: 0.625rem;
  background-color: #f2f5f8;
}
</style>