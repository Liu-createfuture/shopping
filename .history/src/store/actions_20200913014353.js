import {
    ADD_COUNTER,
    ADD_TO_CART
} from './mutation-types'

export default {
    addCart(context, payload) {
        return new Promise((resolve, reject) => {
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
                context.commit(ADD_TO_CART, payload);
            }
    },
}