import {
  ADD_COUNTER,
  ADD_TO_CART,
  CLEAR_CART_LIST,
  PICTURE_CLICK,
  STOCK_COUNT,
} from "./mutation-types";

import {
  Toast
} from "vant";

import {
  formatDate
} from "common/utils";
export default {
  [ADD_COUNTER](state, payload) {
    //给商品个数++
    for (let i = 0; i < state.cartList.length; i++) {
      if (payload.selectedSkuComb.id == state.cartList[i].selectedSkuComb.id) {
        state.cartList[i].selectedNum += payload.selectedNum;
      }
    }
  },
  [ADD_TO_CART](state, payload) {
    //给cartList添加新得商品
    state.cartList.push(payload);
  },
  [CLEAR_CART_LIST](state) {
    //存储提交订单的数据
    let data = state.cartList.filter((item) => !item.checked);
    for (let value of data) {
      //1.将时间戳转成Date对象
      const date = new Date();
      //2.将date格式化
      value.date = formatDate(date, "yyyy-MM-dd hh:mm:ss");
      //添加至最前
      state.submitList.splice(0, 0, value);
    }
    // 判断选中哪些数据,过滤没选中的数组返回一个新数组即可
    let result = state.cartList.filter((item) => item.checked);
    state.cartList = result;
  },
  //库存数量
  [STOCK_COUNT](state, iid) {
    const Num = state.submitList.filter((item) => {
      return item.selectedSkuComb.id === iid
    })
    state.stockCount = 100 - (Num.reduce((preValue, item) => {
      return preValue + item.selectedNum
    }, 0));
  },
  //历史记录
  [PICTURE_CLICK](state, goodsItem) {
    let empty = null;
    empty = state.save.find((item) => {
      return item.iid === goodsItem.iid;
    });
    if (empty) {
      //点击重复的图片放到第一个
      for (let i in state.save) {
        if (state.save[i] === goodsItem) {
          state.save.splice(i, 1);
          state.save.splice(0, 0, empty);
        }
      }
    } else {
      //第一次点击的图片放到第一个
      state.save.splice(0, 0, goodsItem);
    }
  },
  //收藏商品
  collectIonClick(state, product) {
    state.collectIon = !state.collectIon;
    product.judge = state.collectIon;
    if (product.judge === true) {
      Toast({
        type: "success",
        message: `收藏成功`,
        // 弹框的时候禁止点击
        forbidClick: true,
        duration: 1000
      });
    } else { 
      Toast({
        type: "success",
        message: `取消收藏`,
        // 弹框的时候禁止点击
        forbidClick: true,
        duration: 1000
      });
    }; 
    state.collectIonStore.unshift(product)
    let deWeightThree = () => {
      let map = new Map();
      for (let item of state.collectIonStore) {
          if (!map.has(item.iid)) {
              map.set(item.iid, item);
          }
      }
      return [...map.values()];
    }
    state.collectIonStore = deWeightThree()
    state.collectIonStore.some((item, i)=> {
      if (item.iid === product.iid && item.judge === false) {
        state.collectIonStore.splice(i, 1)  
      } 
    })
  },
  //关注店铺
  followClick(state, product) {
    state.followIon = !state.followIon;
    product.follow = state.followIon;
    if (product.follow === true) {
      Toast({
        type: "success",
        message: `已关注`,
        // 弹框的时候禁止点击
        forbidClick: true,
        duration: 1000,
        icon: 'like-o'
      });
    } else { 
      Toast({
        type: "success",
        message: `已取消`,
        // 弹框的时候禁止点击
        forbidClick: true,
        duration: 1000,
        icon: 'like-o'
      });
    }; 
    state.followStore.unshift(product)   
    let deWeightThree = () => {
      let map = new Map();
      for (let item of state.followStore) {
          if (!map.has(item.iid)) {
              map.set(item.iid, item);
          }
      }     
      return [...map.values()];
    }
    state.followStore = deWeightThree()
    state.followStore.some((item, i)=> {
      if (item.iid === product.iid && item.follow === false) {
        state.followStore.splice(i, 1)  
      } 
    })
  },
  //收藏/关注 判断
  collectClick(state,iid) {
       //商品收藏判断
      state.collectIon = state.collectIonStore.some(
        (item) => {
          return iid === item.iid && item.judge === true;
        }
      );
      //店铺关注判断
      state.followIon = state.followStore.some(
        (item) => {
          return iid === item.iid && item.follow === true;
        }
      );
   }
}