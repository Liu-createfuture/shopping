export default {
    //获取商品数量
    cartLength: state => state.cartList.length,
    cartList: state => state.cartList,
    tabBarShow: state => state.tabBarShow,
}