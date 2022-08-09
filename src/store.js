import { createStore } from "vuex";

export const vuestore = createStore({
  state() {
    return {
      auth: null
    }
  },
  mutations: {
    setAuth(state, auth) {
      state.auth = auth;
    }
  }
});