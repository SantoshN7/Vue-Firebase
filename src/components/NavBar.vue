<template>
  <nav id="navbar" class="navbar navbar-expand-lg navbar-light bg-ligh">
    <ul class="navbar-nav mr-auto">
      <li v-if="isUserAuthenticated" class="nav-item">
        <router-link class="nav-link" to="/coaches">Coaches</router-link>
      </li>
      <li v-if="isUserAuthenticated" class="nav-item">
        <router-link class="nav-link" to="/requests">Requests</router-link>
      </li>
      <li v-if="!isUserAuthenticated" class="nav-item">
        <router-link class="nav-link" to="/login">Login</router-link>
      </li>
      <li v-if="!isUserAuthenticated" class="nav-item">
        <router-link class="nav-link" to="/register">Register</router-link>
      </li>
      <li v-if="isUserAuthenticated" class="nav-item">
        <span @click="logout()" class="nav-link">Logout</span>
      </li>
    </ul>
  </nav>
</template>

<style>
  nav {
    border: 1px solid black;
  }
</style>

<script>
  import {signOut} from "firebase/auth";
  import {computed} from '@vue/reactivity'
  import {useStore} from 'vuex'
import {useRouter} from "vue-router";
  export default {
    setup() {
      const router = useRouter();
      const store = useStore();
      const isUserAuthenticated = computed(() => !!store.state.auth?.currentUser);

    const logout = function() {
      signOut(store.state.auth).then(() => {
        router.push('/login');
      })
    }

      return {isUserAuthenticated, logout};
    }
  }
</script>