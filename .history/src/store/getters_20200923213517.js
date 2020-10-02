export default {
    //获取商品
    cartList: state => {
        state.cartList
    },


    //获取商品数量
    cartLength: state => state.cartList.length,
}