export default {
    //获取商品
    cartList: state => state.cartList,
    //获取商品数量
    cartLength: state => state.cartList.length,
    //提交订单的商品
    submitList: state => state.submitList,
    //提交订单数量
    submitListLength: state => state.submitList.length,
    //收藏商品数量
    goodsListLength: state => state.collectIonStore.length,
    //关注店铺数量
    shopListLength: state => state.followStore.length
}