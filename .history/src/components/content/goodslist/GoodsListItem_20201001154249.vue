<template>
  <div class="goods-list-item" @click="itemClick">
    <img v-lazy="showImg" alt class="show-img" @load="imgLoad" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="goods-price">{{ goodsItem.price }}</span>
      <span class="goods-cfav">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    showImg() {
      return (
        //判断图片的路径是哪一个
        this.goodsItem.image || this.goodsItem.img || this.goodsItem.show.img
      );
    },
  },
  methods: {
    itemClick() {
      //点击时添加路由,跳转到另外一个页面
      if (this.$route.path === "/home") {
        this.$router.push("/detail/" + this.goodsItem.iid);
        //发射点击事件
      }
      this.$emit("itemClick");
      //历史记录事件
      this.$store.commit("pictureClick", this.goodsItem);
    },
    imgLoad() {
      //图片加载发送事件
      this.$bus.$emit("imgSending");
    },
  },
};
</script>

<style scoped>
.goods-list-item {
  position: relative;
  width: 45%;
  padding: 20px 0;
  padding-bottom: 35px;
}
.show-img {
  width: 100%;
  border-radius: 20px;
}
.goods-info {
  position: absolute;
  font-size: 13px;
  left: 0;
  right: 0;
  text-align: center;
  overflow: hidden;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0.3125rem;
}
.goods-info .goods-price {
  color: pink;
  margin-right: 10px;
}
.goods-info .goods-cfav {
  position: relative;
  right: -10px;
}
.goods-info .goods-cfav::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 0.5px;
  width: 0.875rem;
  height: 0.875rem;
  background: url("~assets/img/goods/星星.svg") 0 0/0.875rem 0.875rem;
}
</style>
