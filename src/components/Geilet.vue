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
      <td>Дни Памяти и Почитания Предковъ: 7, 12, 17 {{ MESYAC }}</td>
    </tr>
    <tr>
      <td class="roditelskie_dni square">&nbsp;</td>
      <td>Родительские дни: 22, 33, 37, 40 {{ MESYAC }}</td>
    </tr>
    <tr>
      <td class="post square">&nbsp;</td>
      <td>Чистый ПОСТЪ: 23 - 40 {{ MESYAC }}</td>
    </tr>
    <tr>
      <td class="sedmica square">&nbsp;</td>
      <td>
        Однодневный ПОСТЪ - каждая Седьмица (кроме праздничных дней):{{ OdnodnevnyPost }}
        {{ MESYAC }}
      </td>
    </tr>
  </table>
  <br />
  <div class="red">Славяно-Арийckiя праzдниkи на месяц {{ MESYAC }}</div>
  <div class="spisok_prazdnikov">
    <span class="red">2</span>&nbsp;-&nbsp;День&nbsp;Винитара&nbsp;Воителя
    <span class="red">7</span>&nbsp;-&nbsp;День&nbsp;Горислава&nbsp;Мученика
    <span class="red">12</span>&nbsp;-&nbsp;День&nbsp;Светоzара&nbsp;Вечнаго
    <span class="red">17</span>&nbsp;-&nbsp;День&nbsp;Харiя&nbsp;Правѣднаго
    <span class="red">22</span>&nbsp;-&nbsp;День&nbsp;Рамхата&nbsp;Странниkа
    <span class="red">33</span>&nbsp;-&nbsp;День&nbsp;Дида
    <span class="red">37</span>&nbsp;-&nbsp;День&nbsp;БОГА&nbsp;ВЬЛЕСА
    <span class="red">40</span>&nbsp;-&nbsp;День&nbsp;Храма&nbsp;Души
  </div>
</template>

<script>
import { mapState } from "vuex";
import store from "../store";
import SetkaMesyaca from "./SetkaMesyaca.vue";
export default {
  name: "Geilet",
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
      MESYAC: (state) => state.Geilet.MESYAC,
      MESYAC_OPISANIE: (state) => state.Geilet.MESYAC_OPISANIE,
      Prazdniki: (state) => state.Geilet.Prazdniki,
      DniPredkov: (state) => state.Geilet.DniPredkov,
      RoditelskieDni: (state) => state.Geilet.RoditelskieDni,
      Post: (state) => state.Geilet.Post,
      DopolnitelnyeStili: (state) => state.Geilet.DopolnitelnyeStili,
    }),
  },
  methods: {
    sedmicy: function () {
      this.OdnodnevnyPost = "";

      var first_sedmica = 8 - this.DenNachalaMesyaca;
      if (first_sedmica < 1) {
        first_sedmica = first_sedmica + 9;
      }
      if (store.state.Geilet.Prazdniki[first_sedmica - 1].length == 0) {
        this.OdnodnevnyPost += first_sedmica;
      }
      for (let i = first_sedmica + 9; i < this.KolichestvoDney + 1; i = i + 9) {
        if (store.state.Geilet.Prazdniki[i - 1].length == 0) {
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
