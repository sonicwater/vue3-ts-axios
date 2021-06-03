import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/index.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home/index.vue'),
    children:[
      {
        path: '/home/data-table-1',
        name: 'DataTable1',
        component: () => import('@/views/Home/Pages/DataTable/DataTable1.vue')
      },
      {
        path: '/home/data-table-2',
        name: 'DataTable2',
        component: () => import('@/views/Home/Pages/DataTable/DataTable2.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
