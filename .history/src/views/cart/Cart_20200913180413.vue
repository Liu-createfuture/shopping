<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <span slot="center">购物车({{ cartLength }})</span>
    </nav-bar>
    <div class="cart-list">
      <scroll class="content" ref="scroll">
        <van-empty v-show="cartLength == 0" />
        <van-empty v-show="cartLength == 0" />
        <van-empty v-show="cartLength == 0" />
        <cart-list-item
          v-for="(item, index) in cartList"
          :key="index"
          :product="item"
        />
      </scroll>
    </div>
    <van-submit-bar
      :price="money"
      :button-text="text"
      @submit="onSubmit"
      class="van-cart"
    >
      <cart-bottom @click.native="choiceClick" :ischecked="isSelectAll" />全选
    </van-submit-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import CartListItem from "./child/CartListItem";
import CartBottom from "components/content/cartbottom/CartBottom";
import { mapGetters } from "vuex";
export default {
  components: {
    NavBar,
    Scroll,
    CartListItem,
    CartBottom,
  },
  data() {
    return {
      ctrl: true,
      text: "提交订单",
    };
  },
  methods: {
    onSubmit(index) {
      //提交订单
      if (!this.cartLength) {
        //无商品时
        this.$dialog.alert({
          title: "提示!",
          message: "购物车无商品",
        });
      }
      const checked = this.cartList.filter((item) => {
        //商品都未勾选时
        if (item.checked === true) {
          this.$dialog.alert({
            title: "商品",
            message: "未勾选商品",
          });
        }
        //返回勾选中的对象
        return item.checked === false;
      });
      checked.forEach((item) => {
        this.$dialog
          .confirm({
            title: "商品数量:" + checked.length,
            message: "确认购买",
          })
          .then(() => {
            // 提交成功清空购物车;
            //Bug目前提交删除只能连号
            for (let i = 0; i < this.cartLength; i++) {
              if (false === this.cartList[i].checked) {
                this.cartList.splice(i, checked.length);
              }
            }
          })
          .catch(() => {
            console.log("取消了");
          });
      });
    },
    choiceClick() {
      // 全选
      if (this.isSelectAll) {
        this.cartList.forEach((item) => (item.checked = false));
      } else {
        this.cartList.forEach((item) => (item.checked = true));
      }
    },
  },
  computed: {
    //computed计算属性
    ...mapGetters(["cartList", "cartLength"]),
    isSelectAll() {
      //全选判断
      if (this.cartLength === 0) return true;
      return this.cartList.find((item) => item.checked);
    },
    money() {
      //价格
      return this.cartList
        .filter((item) => {
          if (item.checked === true) {
            //未选中的商品返回0
            return 0;
          } else {
            //选中的商品返回价格
            return item.selectedSkuComb.price;
          }
        })
        .reduce((preValue, item) => {
          //合计
          return preValue + item.selectedSkuComb.price * item.selectedNum;
        }, 0);
    },
  },
  activated() {
    this.$refs.scroll.refresh();
  },
};
</script>

<style scoped>
.cart {
  height: 100vh;
}
.van-cart {
  position: fixed;
  right: 0;
  bottom: 50px;
  left: 0;
  box-shadow: 0 0.1px 1.5px #918b8b;
}
.content {
  height: 100%;
  overflow: hidden;
}
.nar-bar {
  position: relative;
}
.cart-list {
  height: calc(100% - 150px);
}
</style>
