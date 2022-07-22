import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/routes/HomeView.vue'
import ProjectsView from '@/routes/ProjectsView.vue';
import AboutView from '@/routes/AboutView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsView
  },
  {
    path: '/about',
    name: 'AboutMe',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
