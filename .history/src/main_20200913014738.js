import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "normalize.css";
import store from './store'
import VueLazyload from "vue-lazyload";

import toast from "./components/common/toast/idnex";

//轮播图
import {
  Swipe,
  SwipeItem
} from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);

//图片懒加载
import {
  Lazyload
} from 'vant';
Vue.use(Lazyload);

//商品导航
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant';
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);

//标签栏
import {
  Tab,
  Tabs
} from 'vant';
Vue.use(Tab);
Vue.use(Tabs);

//购物车提交
import {
  SubmitBar
} from 'vant';
Vue.use(SubmitBar);

import {
  Sku
} from 'vant';
Vue.use(Sku);

//空状态
import {
  Empty
} from 'vant';
Vue.use(Empty);

//商品卡片
import {
  Card
} from 'vant';
Vue.use(Card);

//消息弹出
import {
  Dialog
} from 'vant';
Vue.use(Dialog);

//按钮
import {
  Button
} from 'vant';
Vue.use(Button);

//安装自定义toast插件
Vue.use(toast);

//图片懒加载
Vue.use(VueLazyload, {
  loading: require("./assets/"),
  lazyComponent: true,
});

//创建实例给Vue原型下的$bus
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");