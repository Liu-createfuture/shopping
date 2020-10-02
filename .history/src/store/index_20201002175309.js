import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutations"
import actions from './actions'
import getters from './getters'

//1.安装插件
Vue.use(Vuex);

//2.创建store对象
const state = {
    //购物车数据
    cartList: [],
    //提交订单数据
    submitList: [],
    //隐藏标签栏
    hide: true,
    //历史记录
    save: [],
    //库存数量
    stockCount: 100,
    //收藏
    
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

//3.挂载Vue实例上
export default store;