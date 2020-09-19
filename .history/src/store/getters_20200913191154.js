export default {
    cartLength state=>
        //获取商品数量
        return state.cartList.length
    },
    cartList: state => state.cartList,
    tabBarShow: state => state.tabBarShow,
}