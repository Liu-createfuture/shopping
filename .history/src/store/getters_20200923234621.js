export default {
    //获取商品
    cartList: state => state.cartList,
    //获取商品数量
    cartLength: state => state.cartList.length,
    //
    submitList:state=> state
    //提交订单数量
    submitListLength: state => state.submitList.length
}