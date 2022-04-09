import { createStore } from "vuex";
import nazvaniyaLet from "./NazvaniyaLet";
import opisaniyaLet from "./OpisaniyaLet";

const store = createStore({
  state: () => ({}),
  getters: {},
  actions: {},
  mutations: {},
  modules: {
    NazvaniyaLet: nazvaniyaLet,
    OpisaniyaLet: opisaniyaLet,
  },
});

export default store;
