import { createStore } from "vuex";
import { BehaviorSubject } from 'rxjs';
import { collection, getDocs } from "firebase/firestore";
import {firebasedb} from './firebaseSetup'; 

export const isAuthSet = new BehaviorSubject(false);

export const vuestore = createStore({
  state() {
    return {
      auth: null,
      courses: []
    }
  },
  mutations: {
    setAuth(state, auth) {
      state.auth = auth;
      isAuthSet.next(true);
    },
    setCourses(state, courses) {
      state.courses = courses;
    }
  },
  actions: {
    loadCourses() {
      getDocs(collection(firebasedb, 'cources')).then((_snapshot) => {
        const newCourses = _snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() }
        });
        this.commit('setCourses', newCourses);
      });
    }
  }
});