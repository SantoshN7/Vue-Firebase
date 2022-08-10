<script>
  import {getAuth, onAuthStateChanged } from 'firebase/auth';
  import NavBar from './components/NavBar.vue';

  export default {
    components: {
      NavBar
    },
    data() {
      return {
        isLoading: true
      }
    },
    beforeMount() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        const newAuth = user?.auth || auth;
        this.$store.commit('setAuth', newAuth);
        this.isLoading = false;
      });
    }
  }
</script>

<template>
  <div v-show="!isLoading">
    <NavBar></NavBar>
    <div class="viewer">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: blanchedalmond;
}

.viewer {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  padding: 20px;
}
</style>
