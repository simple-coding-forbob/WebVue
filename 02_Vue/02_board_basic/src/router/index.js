import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  // home 메뉴
  {
    path: '/',
    component: HomeView
  },
  // dept 메뉴 ; url(/dept), page(DeptView.vue)
  {
    path: '/dept',
    component: () => import('../views/DeptView.vue')
  },
  // customer 메뉴 ; url(/customer), page(CustomerView.vue)
  {
    path: '/customer',
    component: () => import('../views/CustomerView.vue')
  },
  // books 메뉴 ; url(/books), page(BookView.vue)
  {
    path: '/books',
    component: () => import('../views/BookView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
