import { createStore } from "vuex";
import nazvaniyaLet from "./NazvaniyaLet";
import opisaniyaLet from "./OpisaniyaLet";
import grigDates from "./GrigDates";
import slavDates from "./SlavDates";

const store = createStore({
  state: () => ({}),
  getters: {},
  actions: {},
  mutations: {},
  modules: {
    NazvaniyaLet: nazvaniyaLet,
    OpisaniyaLet: opisaniyaLet,
    GrigDates: grigDates,
    SlavDates: slavDates,
  },
});

export default store;
