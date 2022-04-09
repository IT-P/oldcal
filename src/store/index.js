import { createStore } from "vuex";
import nazvaniyaLet from "./NazvaniyaLet";
import opisaniyaLet from "./OpisaniyaLet";
import grigDates from "./GrigDates";
import slavDates from "./SlavDates";
import Ramhat from "./Ramhat";
import Ailet from "./Ailet";
import Beilet from "./Beilet";
import Geilet from "./Geilet";
import Dailet from "./Dailet";
import Elet from "./Elet";
import Veilet from "./Veilet";
import Heilet from "./Heilet";
import Tailet from "./Tailet";

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
    Ramhat: Ramhat,
    Ailet: Ailet,
    Beilet: Beilet,
    Geilet: Geilet,
    Dailet: Dailet,
    Elet: Elet,
    Veilet: Veilet,
    Heilet: Heilet,
    Tailet: Tailet,

  },
});

export default store;
