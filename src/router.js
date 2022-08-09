import { createWebHistory, createRouter } from 'vue-router';
import Coaches from './components/Coaches.vue';
import CoacheDetails from './components/CoachDetails.vue';
import Requests from './components/Requests.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';

const routes = [
  {
    path: '/',
    redirect: '/coaches'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/coaches',
    component: Coaches
  },
  {
    path: '/coaches/:id',
    component: CoacheDetails
  },
  {
    path: '/requests',
    component: Requests
  }
];

export const vueRouter = createRouter({
  history: createWebHistory(),
  routes,
});
