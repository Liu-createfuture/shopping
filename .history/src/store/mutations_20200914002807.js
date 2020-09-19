import {
    ADD_COUNTER,
    ADD_TO_CART,
    CLEAR_CART_LIST,
} from './mutation-types'


export default {
    [ADD_COUNTER](state, payload) {
        //给商品个数++
        for (let i = 0; i < state.cartList.length; i++) {
            if (payload.selectedSkuComb.id == state.cartList[i].selectedSkuComb.id) {
                state.cartList[i].selectedNum += payload.selectedNum
            }
        }
    },
    [ADD_TO_CART](state, payload) {
        //给cartList添加新得商品
        state.cartList.push(payload);
    },
    [CLEAR_CART_LIST](state) {

        // 判断选中哪些数据,过滤没选中的数组返回一个新数组即可
        let result = state.cartList.filter(item => item.checked === false);


        state.cartList = result;
        console.log(state.cartList);
        localStorage.removeItem("cartList", JSON.stringify(state.cartList));

    },
}