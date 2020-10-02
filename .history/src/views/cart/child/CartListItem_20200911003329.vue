<template>
  <div id="shop-item">
    <div class="item-selector">
      <cart-bottom :ischecked="product.checked" @click.native="choiceClick" />
    </div>
    <div class="item-img">
      <img
        :src="product.selectedSkuComb.imgUrl"
        alt="商品图片"
        @click="imgClick(product)"
      />
    </div>
    <div class="item-info">
      <div class="item-title">{{ product.selectedSkuComb.name }}</div>
      <div class="item-desc">{{ product.selectedSkuComb.name }}</div>
      <div class="info-bottom">
        <div class="item-price left">￥{{ monovalent }}</div>
        <div class="item-count right">X{{ number }}</div>
        <van-button
          type="danger"
          class="item-click right"
          @click="deleteClick(product)"
          >删除</van-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import CartBottom from "components/content/cartbottom/CartBottom";

import { getRecommend } from "network/Detail";

import { mapGetters } from "vuex";
export default {
  components: {
    CartBottom,
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    ...mapGetters(["cartList", "cartLength"]),
    number() {
      //数量
      for (let i = 0; i < this.cartLength; i++) {
        if (
          //判断id是否相等
          this.cartList[i].selectedSkuComb.id == this.product.selectedSkuComb.id
        ) {
          //返回数量
          return this.cartList[i].selectedNum;
        }
      }
    },
    //单价
    monovalent() {
      return Number(this.product.selectedSkuComb.price / 100).toFixed(2);
    },
  },
  methods: {
    choiceClick() {
      this.product.checked = !this.product.checked;
    },
    deleteClick(p) {
      //删除商品
      for (let i in this.cartList) {
        if (this.cartList[i] === p) {
          this.cartList.splice(i, 1);
        }
      }
    },
    imgClick(product) {
      //点击图片跳转
      this.$router.push("/detail/" + product.selectedSkuComb.id);
    },
  },
};
//问题1.props传过来的数据不能在data里定义进行展示,否则删除时不实时响应
</script>

<style scoped>
#shop-item {
  display: flex;
  width: 100%;
  padding: 0.3125rem;
  border-bottom: 0.0625rem solid #ccc;
}

.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-img {
  padding: 0.3125rem;
  z-index: 10;
}
.item-img img {
  width: 5rem;
  height: 6.875rem;
  display: block;
  border-radius: 0.3125rem;
}
.item-info {
  position: relative;
  width: 100%;
  font-size: 1.0625rem;
  color: #333;
  padding: 0.3125rem 0.625rem;
  overflow: hidden;
}
.item-info .item-desc {
  color: #666;
  margin-top: 0.9375rem;
  font-size: 0.875rem;
}
.info-bottom {
  position: absolute;
  margin-top: 0.625rem;
  bottom: 0.625rem;
  left: 0.625rem;
  right: 0.625rem;
}
.info-bottom .item-price {
  float: left;
  color: red;
}
.info-bottom .item-count {
  position: absolute;
  right: 40px;
}
.info-bottom .item-click {
  position: absolute;
  height: 30px;
  right: 0;
  top: -5px;
}
.item-selector {
  display: flex;
  align-items: center;
}
</style>
