export default {
    //获取商品数量
    cartLength: state => state.cartList.length,
    //获取商品
    cartList: state => state.cartList,
    tabBarShow: state => state.tabBarShow,
}