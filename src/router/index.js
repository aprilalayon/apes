import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Work from '@/views/Work.vue'

const routes = [
  { 
    path: '/apes',
    name: 'Home',
    component: Home
  },
  { 
    path: '/apes/about',
    name: 'About',
    component: About
  },
  { 
    path: '/apes/work',
    name: 'Work',
    component: Work
  },
  {
    path: '/*',
    component: 404
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router