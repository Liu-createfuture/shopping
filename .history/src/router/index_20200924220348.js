import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Home = () => import('../views/home/Home.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Mine = () => import('../views/mine/Mine.vue')
const Sort = () => import('../views/sort/Sort.vue')
const Detail = () => import('../views/detail/Detail.vue')


const NoBuy = () => import('../views/mine/child/NavBar/subfield/NoBuy.vue')
const Buy = () => import('../views/mine/child/NavBar/subfield/Buy.vue')
const Record = () => import('../views/mine/child/NavBar/subfield/Record.vue')
const Mines = () => import('../views/mine/child/NavBar/subfield/Mines.vue')

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
  },
  {
    //首页点击商品图片信息
    path: '/detail/:id',
    component: Detail
  },


  //我的-分栏
  {
    //未购买
    path: '/nobuy',
    component: NoBuy
  },
  {
    //已购买
    path: '/buy',
    component: Buy
  },
  {
    //历史记录
    path: '/record',
    component: Record
  },
  {
    //我的
    path: '/mines',
    component: Mines
  }
]


const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  next(df)
})

export default router