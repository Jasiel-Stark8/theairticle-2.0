import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/DashboardPage.vue'
import SignUp from '../components/SignUp.vue'
import SignIn from '../components/SignIn.vue'
import SideBar from '../views/SideBar.vue'
import GenerationPage from '../components/GenerationPage.vue'
import Profile from '../components/ProfilePage.vue'
import Content from '../components/ContentPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/sidebar',
      name: 'sidebar',
      component: SideBar
    },
    {
      path: '/generation',
      name: 'generation',
      component: GenerationPage
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/content',
      name: 'content',
      component: Content
    }
  ]
})

export default router
