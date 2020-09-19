import {
    ADD_COUNTER,
    ADD_TO_CART,
    HOME_PAGE
} from './mutation-types'
import {
    Toast
} from "vant";

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
        Toast({
            type: "success",
            message: `加入购物车成功`,
            // 弹框的时候禁止点击
            forbidClick: true,
            duration: 1500
        });
    },
    [HOME_PAGE](state, bol) {
        state.HomePage = bol
    }
}