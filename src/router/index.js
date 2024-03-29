import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [

  {
    path: '/',
    name: 'UserSite',
    component: () => import('../views/frontEnd/UserSite.vue'),
    children: [
      {
        path: '',
        name: 'UserHome',
        component: () => import('@/views/frontEnd/UserHome.vue')
      },
      {
        path: 'products',
        name: 'UserPoducts',
        component: () => import('../views/frontEnd/UserProducts.vue')
      },
      {
        path: 'product/:id',
        name: 'UserPoduct',
        component: () => import('../views/frontEnd/UserProduct.vue')
      },
      {
        path: 'cart',
        name: 'UserCart',
        component: () => import('../views/frontEnd/UserCart.vue')
      },
      {
        path: 'order',
        name: 'UserOrder',
        component: () => import('../views/frontEnd/UserOrder.vue')
      },
      {
        path: 'orderPay/:id',
        name: 'UserOrderPay',
        component: () => import('../views/frontEnd/UserOrderPay.vue')
      }
    ]

  },
  {
    path: '/admin',
    name: 'dashBoard',
    component: () => import('../views/dashBoard/AdminDashboard.vue'),
    children: [
      {
        path: 'products',
        name: 'adminPoduct',
        component: () => import('../views/dashBoard/AdminProducts.vue')
      },
      {
        path: 'orders',
        name: 'adminOrder',
        component: () => import('../views/dashBoard/AdminOrders.vue')
      },
      {
        path: 'coupons',
        name: 'adminCoupons',
        component: () => import('../views/dashBoard/AdminCoupons.vue')
      }
    ]

  },

  {
    path: '/login',
    component: () => import('@/views/UserLogin.vue')
  },
  {
    path: '/:pathMath(.*)*',
    component: () => import('@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
