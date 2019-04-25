import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthGuard from './auth-guard'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Checkout from '../pages/Checkout.vue'
import NewProduct from '../pages/NewProduct.vue'
import ProductList from '@/pages/ProductList'
import Product from '@/pages/Product'

Vue.use(VueRouter)

export default new VueRouter ({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/checkout',
      component: Checkout,
      beforeEnter: AuthGuard
    },
    {
      path: '/new',
      component: NewProduct,
      beforeEnter: AuthGuard
    },
    {
      path: '/list',
      component: ProductList,
      beforeEnter: AuthGuard
    },
    {
      path: '/product/:id',
      props: true,
      component: Product,
      beforeEnter: AuthGuard
    }
  ],
  mode: 'history'
})