import Vue from 'vue'
import VueRouter from 'vue-router'
import Cart from '../views/cart/Cart.vue'
import Category from '../views/category/Category.vue'
const Home = () => import('../views/home/Home.vue')
const Profile = () => import('../views/proflie/Profile.vue')
const GoodsDetail = () => import('../views/detail/goodsDetail.vue')

Vue.use(VueRouter)

// 获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
// 修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path: '',
    redirect: '/home'

  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/goodsDetail/:iid',
    component: GoodsDetail
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
