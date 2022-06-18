<script setup>
  import NavBar from './components/NavBar.vue';
</script>

<template>
  <NavBar></NavBar>
  <div class="viewer">
    <router-view></router-view>
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
