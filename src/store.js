import { createStore } from "vuex";
import { BehaviorSubject } from 'rxjs';
import axios from 'axios'; 

export const isAuthSet = new BehaviorSubject(false);

export const vuestore = createStore({
  state() {
    return {
      auth: null,
      courses: [],
      requestedCourses: [],
    }
  },
  mutations: {
    setAuth(state, auth) {
      state.auth = auth;
      isAuthSet.next(true);
    },
    setCourses(state, courses) {
      state.courses = courses;
    },
    setRequestedCourses(state, requestedCourses) {
      state.requestedCourses = requestedCourses;
    }
  },
  actions: {
    async loadCourses() {
      const response = await axios.get('http://localhost:8080/api/courses', {
        headers: {
          'Authorization': `Bearer-${this.state.auth.currentUser.accessToken}`
        }
      });
      this.commit('setCourses', response.data);
    },
    async loadRequestedCourses() {
      const response = await axios.get(`http://localhost:8080/api/user/${this.state.auth.currentUser.uid}/registeredCourses`, {
        headers: {
          'Authorization': `Bearer-${this.state.auth.currentUser.accessToken}`
        }
      });
      this.commit('setRequestedCourses', response.data);
    }
  }
});