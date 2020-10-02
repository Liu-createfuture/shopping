export default {
    //获取商品
    cartList: state => {
        state.cartList, console.log(state);
    },


    //获取商品数量
    cartLength: state => state.cartList.length,
}