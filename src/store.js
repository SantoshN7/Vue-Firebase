import { createStore } from "vuex";
import { BehaviorSubject } from 'rxjs';

export const isAuthSet = new BehaviorSubject(false);

export const vuestore = createStore({
  state() {
    return {
      auth: null
    }
  },
  mutations: {
    setAuth(state, auth) {
      state.auth = auth;
      isAuthSet.next(true);
    }
  }
});