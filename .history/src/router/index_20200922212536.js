import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Home = () => import('../views/home/Home.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Mine = () => import('../views/mine/Mine.vue')
const Sort = () => import('../views/sort/Sort.vue')
const Detail = () => import('../views/detail/Detail.vue')

const routes = [{
    //默认首页
    path: '',
    redirect: "/home",
  }, {
    //首页
    path: '/home',
    component: Home,
  }, {
    //购物车
    path: '/cart',
    component: Cart
  }, {
    //我的
    path: '/mine',
    component: Mine
  }, {
    //分类
    path: '/sort',
    component: Sort,
    children: [
      //我的子页
      {
        //未购买
        path: 'nobuy',
        component: NoBuy
      }
    ]
  },
  {
    //首页点击商品图片信息
    path: '/detail/:id',
    component: Detail
  }
]


const router = new VueRouter({
  mode: 'history',
  routes
})



export default router