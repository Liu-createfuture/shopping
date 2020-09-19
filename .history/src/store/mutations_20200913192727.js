import {
    ADD_COUNTER,
    ADD_TO_CART
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
    [Home_Page](state,bol) { 
        state.HomePage
    }
}