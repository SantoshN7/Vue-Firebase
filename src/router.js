import { createWebHistory, createRouter } from 'vue-router';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  }
];

export const vueRouter = createRouter({
  history: createWebHistory(),
  routes,
});
