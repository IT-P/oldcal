<template>
  <div>
    <span class="title red">{{ MESYAC }} ({{ Leto }})</span><br />
    <span class="subtitle">{{ MESYAC_OPISANIE }}</span>
  </div>
  <setka-mesyaca
    :Leto="Leto"
    :DenNachalaMesyaca="DenNachalaMesyaca"
    :DenNachalaMesyacaGrig="DenNachalaMesyacaGrig"
    :KolichestvoDney="KolichestvoDney"
    :Prazdniki="Prazdniki"
    :DniPredkov="DniPredkov"
    :RoditelskieDni="RoditelskieDni"
    :Post="Post"
    :DopolnitelnyeStili="DopolnitelnyeStili"
  ></setka-mesyaca>
  <br />
  <table border="0" class="legenda">
    <tr>
      <td class="dni_predkov square">&nbsp;</td>
      <td>Дни Памяти и Почитания Предковъ: 4, 11, 26, 33 {{ MESYAC }}</td>
    </tr>
    <tr>
      <td class="roditelskie_dni square">&nbsp;</td>
      <td>Родительские дни: 13, 19, 29, 37, 40 {{ MESYAC }}</td>
    </tr>
    <tr>
      <td class="sedmica square">&nbsp;</td>
      <td>
        Однодневный ПОСТЪ - каждая Седьмица (кроме праздничных дней):
        {{ OdnodnevnyPost }} {{ MESYAC }}
      </td>
    </tr>
  </table>
  <br />
  <div class="red">Славяно-Арийckiя праzдниkи на месяц {{ MESYAC }}</div>
  <div class="spisok_prazdnikov">
    <span class="red">4</span>&nbsp;-&nbsp;День&nbsp;Вечеслава&nbsp;Ирiйскаго
    <span class="red">11</span>&nbsp;-&nbsp;День&nbsp;Аристарха&nbsp;Правѣдника
    <span class="red">13</span>&nbsp;-&nbsp;День&nbsp;ЛЕЛИ&nbsp;Небеснай
    <span class="red">16</span>&nbsp;-&nbsp;День&nbsp;Борислава&nbsp;Спасителя
    <span class="red">19</span>&nbsp;-&nbsp;День&nbsp;Родомира&nbsp;Ведуна
    <span class="red">22</span>&nbsp;-&nbsp;День&nbsp;Мудрости&nbsp;Крышьня
    <span class="red">26</span>&nbsp;-&nbsp;СВЯТОЧЬ
    <span class="red">29</span>&nbsp;-&nbsp;День&nbsp;Вѣдамира&nbsp;Асгардскаго
    <span class="red">33</span>&nbsp;-&nbsp;ВѢДА&nbsp;ИНТА
    <span class="red">37</span>&nbsp;-&nbsp;День&nbsp;Матери-Сырой-Земли
    <span class="red">40</span>&nbsp;-&nbsp;День&nbsp;ЛАДЫ-Богородицы
  </div>
</template>

<script>
import { mapState } from "vuex";
import store from "../store";
import SetkaMesyaca from "./SetkaMesyaca.vue";
export default {
  name: "Elet",
  props: {
    Leto: Number,
    DenNachalaMesyaca: Number,
    KolichestvoDney: Number,
    DenNachalaMesyacaGrig: String,
  },
  components: {
    SetkaMesyaca,
  },
  created: function () {
    this.sedmicy();
  },
  watch: {
    DenNachalaMesyaca: {
      handler: function () {
        this.sedmicy();
      },
    },
  },
  computed: {
    ...mapState({
      MESYAC: (state) => state.Elet.MESYAC,
      MESYAC_OPISANIE: (state) => state.Elet.MESYAC_OPISANIE,
      Prazdniki: (state) => state.Elet.Prazdniki,
      DniPredkov: (state) => state.Elet.DniPredkov,
      RoditelskieDni: (state) => state.Elet.RoditelskieDni,
      Post: (state) => state.Elet.Post,
      DopolnitelnyeStili: (state) => state.Elet.DopolnitelnyeStili,
    }),
  },
  methods: {
    sedmicy: function () {
      this.OdnodnevnyPost = "";

      var first_sedmica = 8 - this.DenNachalaMesyaca;
      if (first_sedmica < 1) {
        first_sedmica = first_sedmica + 9;
      }
      if (store.state.Elet.Prazdniki[first_sedmica - 1].length == 0) {
        this.OdnodnevnyPost += first_sedmica;
      }
      for (let i = first_sedmica + 9; i < this.KolichestvoDney + 1; i = i + 9) {
        if (store.state.Elet.Prazdniki[i - 1].length == 0) {
          if (this.OdnodnevnyPost.length > 0) {
            this.OdnodnevnyPost += ", " + i;
          } else {
            this.OdnodnevnyPost += i;
          }
        }
      }
    },
  },
  data() {
    return {
      OdnodnevnyPost: "",
    };
  },
};
</script>

<style scoped>
.square {
  width: 1.3em;
  height: 1.3em;
}
</style>
