<template>
  <nav id="navbar" class="navbar navbar-expand-lg navbar-light bg-ligh">
    <ul class="navbar-nav mr-auto navbar-left">
      <li v-if="isUserAuthenticated" class="nav-item">
        <router-link class="nav-link" to="/courses">Courses</router-link>
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
    </ul>
    <ul class="navbar-nav mr-auto navbar-right">
      <li v-if="isUserAuthenticated" class="nav-item">
        <button type="button" @click="$emit('addCourse')" class="nav-link btn btn-success">Add course</button>
      </li>
      <li v-if="isUserAuthenticated" class="nav-item">
        <button type="button" @click="logout()" class="nav-link btn btn-danger">Logout</button>
      </li>
    </ul>
  </nav>
</template>

<style>
  nav {
    border: 2px solid black;
    box-shadow: 5px 2.5px 2.5px gray;
  }
  .navbar-left {
    display: flex;
    width: 70%;
  }
  .navbar-right {
    display: flex;
    width: 30%;
    justify-content: end;
  }

  button {
    margin: 0 0.5em;
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