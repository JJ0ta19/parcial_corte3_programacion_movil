import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import DasboardPage from '../views/DasboardPage.vue'
import CarroPage from '@/views/CarroPage.vue';
import CategoriaPage from '@/views/CategoriaPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },{
    path: '/carro',
    name: 'Carro',
    component: CarroPage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DasboardPage
  },
  {
    path: '/categoria',
    name: 'Categoria',
    component: CategoriaPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
