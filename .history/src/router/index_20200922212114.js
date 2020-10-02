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
    //
    path: '/cart',
    component: Cart
  }, {
    path: '/mine',
    component: Mine
  }, {
    path: '/sort',
    component: Sort,
  },
  {
    path: '/detail/:id',
    component: Detail
  }
]


const router = new VueRouter({
  mode: 'history',
  routes
})



export default router