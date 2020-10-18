<template>
  <div class="mine-shop">
    <!-- 头部 -->
    <nav-bar class="shop-nav-bar">
      <div slot="left" @click="onClickLeft">
        <img src="~assets/img/navbar/左箭头.svg" alt />
      </div>
      <div slot="center">收藏</div>
    </nav-bar>
    <van-tabs v-model="active" animated>
      <!-- 商品收藏 -->
      <van-tab v-for="(item, index) in tab" :key="index" :title="item">
        <div v-show="index == 0">
          <scroll class="swipe-scroll" ref="scroll">
            <div
              v-for="(item, index) in $store.state.collectIonStore"
              :key="index"
              class="slide-height"
            >
              <van-swipe-cell v-if="item.judge">
                <van-card
                  class="goods-card"
                  :title="item.title"
                  :thumb="item.image"
                  :price="item.price"
                />
                <template #right>
                  <van-button
                    square
                    text="取消收藏"
                    type="danger"
                    class="delete-button"
                    @click="collectClick(item)"
                  />
                </template>
              </van-swipe-cell>
            </div>
            <van-empty v-show="goodsListLength == 0" />
            <van-empty v-show="goodsListLength == 0" />
            <van-empty v-show="goodsListLength == 0" />
          </scroll>
        </div>
        <!-- 切换 -->
        <div v-show="index == 1">
          <!-- 关注店铺 -->
          <scroll class="swipe-scroll" ref="scroll">
            <div
              v-for="(item, index) in $store.state.followStore"
              :key="index"
              class="shop-on-stores"
            >
              <van-swipe-cell v-if="item.follow">
                <van-card />
                <div class="piece-shop">
                  <div class="piece-shop-nav-bar">
                    <div class="piece-shop-left">
                      <img :src="item.logo" />
                      <div class="piece-shop-left-name">{{ item.name }}</div>
                    </div>
                    <div class="piece-shop-right">
                      <div class="piece-shop-text">
                        <div>{{ item.sells }}</div>
                        <div>总销量</div>
                      </div>
                      <div class="piece-shop-text">
                        <div>{{ item.goodsCount }}</div>
                        <div>全部宝贝</div>
                      </div>
                    </div>
                  </div>
                  <div class="piece-shop-tail">
                    <ul
                      class="piece-shop-tail-text"
                      v-for="(item, index) in item.score"
                      :key="index"
                    >
                      <li>{{ item.name }}</li>
                      <li
                        class="score"
                        :class="{ 'score-better': item.isBetter }"
                      >
                        {{ item.score }}
                      </li>
                      <li
                        class="better"
                        :class="{ 'better-more': item.isBetter }"
                      >
                        {{ item.isBetter ? "高" : "低" }}
                      </li>
                    </ul>
                  </div>
                </div>
                <template #right>
                  <van-button
                    square
                    text="取消关注"
                    type="danger"
                    class="unfollow"
                    @click="unfollowClick(item)"
                  />
                </template>
              </van-swipe-cell>
            </div>
            <van-empty v-show="shopListLength == 0" />
            <van-empty v-show="shopListLength == 0" />
            <van-empty v-show="shopListLength == 0" />
          </scroll>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import { hideTabBer } from "common/mixin";
import { mapGetters } from "vuex";
export default {
  components: {
    NavBar,
    Scroll,
  },
  mixins: [hideTabBer],
  data() {
    return {
      tab: ["收藏商品", "关注店铺"],
      active: 0,
    };
  },
  computed: {
    //computed计算属性
    ...mapGetters(["goodsListLength", "shopListLength"]),
  },
  methods: {
    // 返回
    onClickLeft() {
      this.$router.back();
    },
    //商品收藏取消
    collectClick(item) {
      item.judge = false;
      this.$store.state.collectIonStore.some((value, i) => {
        if (value.iid === item.iid) {
          this.$store.state.collectIonStore.splice(i, 1);
        }
      });
    },
    //取消店铺关注
    unfollowClick(item) {
      item.follow = false;
      this.$store.state.followStore.some((value, i) => {
        if (value.iid === item.iid) {
          this.$store.state.followStore.splice(i, 1);
        }
      });
    },
  },
};
</script>

<style scoped>
.mine-shop {
  height: 100vh;
  overflow: hidden;
}
.shop-nav-bar div > img {
  height: 2.5rem;
  width: 2.5rem;
  margin-top: 0.3125rem;
}
.slide-height {
  height: 100%;
  border-bottom: 1px solid #d4d4d4ef;
}
.goods-card {
  margin: 0;
}
.delete-button {
  height: 100%;
}
.swipe-scroll {
  height: 718px;
  overflow: hidden;
}
.piece-shop {
  position: relative;
  top: -100px;
  left: 0;
  right: 0;
}
.piece-shop-nav-bar {
  display: flex;
  padding-top: 5px;
}
.piece-shop-left {
  display: flex;
  align-items: center;
  flex: 1;
}
.piece-shop-left > img {
  height: 40px;
  width: 40px;
  padding-left: 15px;
}
.piece-shop-left-name {
  padding-left: 15px;
}
.shop-on-stores {
  height: 104px;
  border-bottom: 1px solid#d4d4d4ef;
  font-size: 13px;
}
.piece-shop-right {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex: 1;
}
.piece-shop-text {
  text-align: center;
}
.piece-shop-tail {
  display: flex;
  height: 50px;
}
.piece-shop-tail-text {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
}
.piece-shop-tail-text .better-more {
  background-color: #f13e3a;
}
.better {
  padding: 0.1875rem;
  text-align: center;
  color: #ffffff;
  background-color: #5ea732;
}
.piece-shop-tail-text .score {
  color: #5ea732;
}
.piece-shop-tail-text .score-better {
  color: #f13e3a;
}
.unfollow {
  height: 104px;
}
</style>
