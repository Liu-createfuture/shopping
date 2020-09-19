import {
    ADD_COUNTER,
    ADD_TO_CART
} from './mutation-types'

import {
    Toast
} from "vant";

export default {
    addCart(context, payload) {
        let oldProduct = null;
        let payloadItem = payload.selectedSkuComb.id
        oldProduct = context.state.cartList.find((item) => {
            return item.selectedSkuComb.id === payloadItem
        })
        if (oldProduct) {
            //第二次添相同商品会判断id，相同oldProduct为true,商品数量添加
            context.commit(ADD_COUNTER, payload);
        } else {
            //第一次添加商品会进行保存,因为oldProduct是null,
            payload.count = payload.selectedNum;
            //添加的新商品不被选中
            payload.checked = true;
            Toast({
                type: "success",
                message: `加入购物车成功`,
                // 弹框的时候禁止点击
                forbidClick: true,
                duration: 1500
            });
            context.commit(ADD_TO_CART, payload);
        }
    },
}