import {
    ADD_COUNTER,
    ADD_TO_CART,
    CLEAR_CART_LIST,
} from './mutation-types'

import {
    formatDate
} from "common/utils";
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
        //存储提交订单的数据
        let data = state.cartList.filter(item => !item.checked)
        for (let value of data) {
            //1.将时间戳转成Date对象
            const date = new Date();
            //2.将date格式化
            value.date = formatDate(date, "yyyy-MM-dd hh:mm:ss");
            //添加至最前
            state.submitList.splice(0, 0, value)
        }
        // 判断选中哪些数据,过滤没选中的数组返回一个新数组即可
        let result = state.cartList.filter(item => item.checked);
        state.cartList = result;
    },
    //历史记录
    pictureClick(state, goodsItem) {
        let empty = null;
        empty = state.save.find((item) => {
            return item.iid === goodsItem.iid
        })
        if (empty) {
            state.save.splice(0, 0, empty;
            }
            else {
                state.save.splice(0, 0, goodsItem);
            }
        }
    }