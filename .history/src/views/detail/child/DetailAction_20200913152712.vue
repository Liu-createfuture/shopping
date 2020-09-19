<template>
  <div>
    <!-- 购物车 -->
    <van-goods-action class="van-goods-action">
      <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
      <van-goods-action-icon
        icon="cart-o"
        text="购物车"
        :badge="cartLength"
        to="/cart"
      />
      <van-goods-action-icon
        icon="star"
        :text="collect ? '收藏' : '已收藏'"
        :color="collect ? '' : '#ff5000'"
        @click="Sclick"
      />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="shoppingCart"
      />
      <van-goods-action-button
        type="danger"
        text="立即购买"
        @click="shoppingCart"
      />
    </van-goods-action>
    <!-- 商品详情页 -->
    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :goods-id="goodsId"
      :quota="quota"
      :quota-used="quotaUsed"
      :hide-stock="sku.hide_stock"
      :message-config="messageConfig"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
      ref="getSKU"
    />
  </div>
</template>

<script>
import Toast from "components/common/toast/Toast";

import { mapGetters } from "vuex";
export default {
  props: {
    product: {
      type: Object,
      default() {
        return;
      },
    },
  },
  data() {
    return {
      collect: true,
      //库存
      stock: 100,
      goodsId: this.product.iid,
      //限购
      show: false,
      quota: 100,
      quotaUsed: 0,
      messageConfig: {
        // placeholder 配置
        placeholderMap: {
          text: "请填写留言",
          tel: "请填写电话号码",
        },
        // 初始留言信息
        // 键：留言 name
        // 值：留言内容
        initialMessages: {},
      },
    };
  },
  computed: {
    ...mapGetters(["cartLength", "cartList"]),
    number() {
      //数量
      for (let i = 0; i < this.cartLength; i++) {
        if (
          //判断id是否相等
          this.cartList[i].selectedSkuComb.id == this.product.iid
        ) {
          //返回数量
          return this.cartList[i].selectedNum;
        }
      }
    },
    goods() {
      // 默认商品 sku 缩略图
      return { picture: this.product.image };
    },
    sku() {
      return {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "请选择款式", // skuKeyName：规格类目名称
            k_s: "s1", // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            v: [
              {
                id: "1", // skuValueId：规格值 id
                name: this.product.title, // skuValueName：规格值名称
                imgUrl: this.product.image, // 规格类目图片，只有第一个规格类目可以定义图片
                previewImgUrl: this.product.image, // 用于预览显示的规格类目图片
              },
            ],
            largeImageMode: true, //  是否展示大图模式
          },
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: this.product.iid, // skuId
            s1: "1", // 规格类目 k_s 为 s1 的对应规格值 id
            name: this.product.title, //图片
            imgUrl: this.product.image, //名字
            price: this.product.price * 100, // 价格（单位分）
            stock_num: this.stock, // 当前 sku 组合对应的库存
          },
        ],
        price: this.product.price, // 默认价格（单位元）
        stock_num: this.stock, // 商品总库存
        collection_id: this.product.iid, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [
          {
            // 商品留言
            datetime: "1", // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: "0", // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: "留言", // 留言名称
            type: "text", // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: "0", // 是否必填 '1' 表示必填
            placeholder: "", // 可选值，占位文本
          },
          {
            // 商品留言
            datetime: "1", // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: "0", // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: "电话号码", // 留言名称
            type: "tel", // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: "0", // 是否必填 '1' 表示必填
            placeholder: "", // 可选值，占位文本
          },
        ],

        hide_stock: false, // 是否隐藏剩余库存
      };
    },
    Cart() {
      //保存购物车信息
      const dataSave = this.$refs.getSKU.getSkuData();
      this.$store.dispatch("addCart", dataSave);
      //减库存

      this.stock = 100 - this.number ? this.number : 0;
      //关闭购物车
      this.show = false;
    },
  },
  methods: {
    Sclick() {
      //收藏判断
      this.collect = !this.collect;
    },
    shoppingCart() {
      //开启购物车
      this.stock = 100 - this.number ? this.number : 0;
      this.show = true;
      this.$emit("shopping");
      //数量库存
    },
    onBuyClicked() {
      this.Cart;
      //弹出添加商品
      this.$toast.show("添加了新得商品", 2000);
    },
    onAddCartClicked() {
      this.Cart;
      this.$toast.show("添加了新得商品", 2000);
    },
  },
};
//1.问题:一开始用data保存dataSave数据，用this.dataSave发送数据时，发现里面通过vuex actions 新添加的的数据不能修改，需要使用const dataSave来进行数据发送.
</script>

<style scoped>
.van-goods-action {
  position: absolute;
  bottom: 0;
  background-color: #ffffff;
  z-index: 999;
}
</style>
