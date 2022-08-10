import { createWebHistory, createRouter } from 'vue-router';
import {vuestore, isAuthSet} from './store';
import Coaches from './components/Coaches.vue';
import CoacheDetails from './components/CoachDetails.vue';
import Requests from './components/Requests.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import { firstValueFrom } from 'rxjs';
import { filter, map  } from 'rxjs/operators';

const routes = [
  {
    path: '/',
    redirect: '/coaches'
  },
  {
    name: 'Login',
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/coaches',
    component: Coaches,
    meta: { requiresAuth : true }
  },
  {
    path: '/coaches/:id',
    component: CoacheDetails,
    meta: { requiresAuth : true }
  },
  {
    path: '/requests',
    component: Requests,
    meta: { requiresAuth : true }
  }
];

export const vueRouter = createRouter({
  history: createWebHistory(),
  routes,
});

vueRouter.beforeResolve(async (to, from, next) => {
  const userAuth = await firstValueFrom(isAuthSet.asObservable().pipe(filter(isReady => !!isReady), map(() => vuestore.state.auth)));
  if (to.meta?.requiresAuth) {
    if (!!userAuth?.currentUser) {
      next();
    } else {
      next({path: '/login'})
    }
  } else {
    next();
  }
});
