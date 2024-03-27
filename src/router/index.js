import { createRouter, createWebHistory } from 'vue-router'
import listView from '../views/listView.vue'
import modifyFormView from '../views/modifyFormView.vue'
import writeFormView from '../views/writeFormView.vue'

const routes = [
  {
    path: '/list',
    name: 'listview',
    component: listView
  },
  {
    path: '/modify/:personId',
    name: 'modifyformview',
    component: modifyFormView
  },
  {
    path: '/write',
    name: 'writeform',
    component: writeFormView
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
