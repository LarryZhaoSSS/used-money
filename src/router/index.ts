import Money from '@/views/Money.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Statistics from '@/views/Statistics.vue'
import Labels from '@/views/Labels.vue'
import NotFound from '@/views/NotFound.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/money'
  },
  {
    path: '/money',
    component: Money
  },
  {
    path: '/statistics',
    component: Statistics
  },
  {
    path: '/labels',
    component: Labels
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
