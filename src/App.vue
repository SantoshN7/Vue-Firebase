<script>
  import {getAuth, onAuthStateChanged } from 'firebase/auth';
  import NavBar from './components/NavBar.vue';
  import AddCourse from './components/AddCourse.vue';

  export default {
    components: {
    NavBar,
    AddCourse,
},
    data() {
      return {
        isLoading: true,
        showModal: false,
      }
    },
    methods: {
      showAddCourseDialog() {
        this.showModal = true;
      },
      dialogClosed() {
        this.showModal = false;
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
  <div class="app" v-show="!isLoading">
    <NavBar @addCourse="showAddCourseDialog()"></NavBar>
    <div class="viewer">
      <router-view></router-view>
    </div>
    <Teleport to="body">
      <div v-if="showModal" class="teleport-modal">
        <AddCourse @close="dialogClosed()"></AddCourse>
      </div>
    </Teleport>
  </div>
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: blanchedalmond;
}

.app {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  width: 100%;
}

.viewer {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
}

.teleport-modal {
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 999;
  top: 30%;
  left: 35%;
  min-height: 50px;
  width: 500px;
  padding: 30px;
  border: 2px solid black;
  box-shadow: 5px 2.5px 2.5px gray;
  background: antiquewhite;
}

.button-group {
  display: flex;
  flex-direction: row;
  justify-content: end;
}

.template-modal-title {
  display: flex;
  justify-content: flex-start;
  font-size: larger;
  font-weight: 600;
  margin: 2px;
  padding: 2px;
}

.template-modal-body {
  display: flex;
  flex-direction: column;
  margin: 2px;
  padding: 2px;

}
</style>
