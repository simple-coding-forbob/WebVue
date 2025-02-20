import { createRouter, createWebHistory } from 'vue-router'

// TODO: 메뉴 등록하는 곳
const routes = [
  {
    // 웹브라우저 주소 : /
    // 연결될 페이지 :  HomeView.vue
    path: '/',
    component: () => import('../views/HomeView.vue')
  },
  {
    // 웹브라우저 주소 : /about
    // 연결될 페이지 :  AboutView.vue
    path: '/about',
    component: () => import('../views/AboutView.vue')
  },
  {
    // 웹브라우저 주소 : /dept
    // 연결될 페이지 :  DeptView.vue
    path: '/dept',
    component: () => import('../views/DeptView.vue')
  },
  {
    // 웹브라우저 주소 : /emp
    // 연결될 페이지 :  EmpView.vue
    path: '/emp',
    component: () => import('../views/EmpView.vue')
  },
  {
    // 웹브라우저 주소 : /binding
    // 연결될 페이지 :  BindingView.vue
    path: '/binding',
    component: () => import('../views/BindingView.vue')
  },
  {
    // 웹브라우저 주소 : /attribute
    // 연결될 페이지 :  AttributeView.vue
    path: '/attribute',
    component: () => import('../views/AttributeView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
