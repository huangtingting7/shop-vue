import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Search from '@/components/search'
import  GoodsInfo from '@/components/goodsInfo'
import Buy from '@/components/buyInfo'
import Pay from '@/components/orderPay'
import Community from '@/components/community'
import ShopingCart from '@/components/shoppingCart'
import Me from '@/components/me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
    },
    {
      path:'/goods/:id',
        name:'goodsInfo',
        component:GoodsInfo,
    },
    {
      path:'/goods/:id/buy',
      name:'buyInfo',
      component:Buy,
    },
    {
      path:'/goods/:id/buy/pay',
      name:'pay',
      component:Pay,
    },
    {
      path:'/community',
      name:'community',
      component:Community,
    },
    {
      path:'/shoppingCart',
      name:'shoppingCart',
      component:ShopingCart,
    },
    {
      path:'/me',
      name:'Me',
      component:Me,
    },
    {
      path:'*',
      redirect:'/'
    }
  ]
})
