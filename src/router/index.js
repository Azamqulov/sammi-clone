import { createRouter, createWebHistory } from 'vue-router'

import homeVue from '../modules/home/views/home.vue'
const login = () => import('../modules/auth/views/login.vue')
const teacher = () => import('../modules/home/views/teacher.vue') 
const students = () => import('../modules/home/views/students.vue') 
const lessons = () => import('../modules/home/views/lessons.vue') 
const dashbard = () => import('../modules/home/views/dashbard.vue') 
const dash = () => import('../modules/home/views/dash.vue') 

// 404 page
import page404 from '../views/404.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homeVue
    },
    {
      path: '/teacher',
      name: 'teacher',
      component: teacher
    },
    {
      path: '/students',
      name: 'students',
      component: students
    },
    {
      path: '/lessons',
      name: 'lessons',
      component: lessons
    },
    {
      path: '/dash',
      name: 'dash',
      component: dash
    },
    {
      path: '/dashbard',
      name: 'dashbard',
      component: dashbard
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    // 404 page
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: page404
    }

  ]
})

export default router
