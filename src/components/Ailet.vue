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
      <td>Дни Памяти и Почитания Предковъ: 4, 16, 29, 36 {{ MESYAC }}</td>
    </tr>
    <tr>
      <td class="roditelskie_dni square">&nbsp;</td>
      <td>Родительские дни: 12, 25 {{ MESYAC }}</td>
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
    <span class="red">2</span>&nbsp;-&nbsp;День&nbsp;Мирослава&nbsp;Тарiйскаго
    <span class="red">4</span>&nbsp;-&nbsp;День&nbsp;Харiя&nbsp;Предвечнаго
    <span class="red">7</span>&nbsp;-&nbsp;День&nbsp;Родамира&nbsp;Тарiйскаго
    <span class="red">12</span>&nbsp;-&nbsp;День&nbsp;БОГИНИ&nbsp;МАКОШИ
    <span class="red">13</span>&nbsp;-&nbsp;День&nbsp;Олега&nbsp;Воителя
    <span class="red">16</span>&nbsp;-&nbsp;День&nbsp;Просвещенныхъ&nbsp;Инглянъ
    <span class="red">19</span>&nbsp;-&nbsp;День&nbsp;Аристарха&nbsp;Мудраго
    <span class="red">22</span>&nbsp;-&nbsp;День&nbsp;Откровенiя&nbsp;Боговъ
    <span class="red">25</span>&nbsp;-&nbsp;День&nbsp;СВАРОГА&nbsp;и&nbsp;СЕМАРГЛА
    <span class="red">29</span>&nbsp;-&nbsp;День&nbsp;Ярослава&nbsp;Мироустроителя
    <span class="red">32</span>&nbsp;-&nbsp;День&nbsp;Хорива&nbsp;Мудраго
    <span class="red">36</span>&nbsp;-&nbsp;День&nbsp;Олега&nbsp;Правѣднаго
  </div>
</template>

<script>
import { mapState } from "vuex";
import store from "../store";
import SetkaMesyaca from "./SetkaMesyaca.vue";
export default {
  name: "Ailet",
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
      MESYAC: (state) => state.Ailet.MESYAC,
      MESYAC_OPISANIE: (state) => state.Ailet.MESYAC_OPISANIE,
      Prazdniki: (state) => state.Ailet.Prazdniki,
      DniPredkov: (state) => state.Ailet.DniPredkov,
      RoditelskieDni: (state) => state.Ailet.RoditelskieDni,
      Post: (state) => state.Ailet.Post,
      DopolnitelnyeStili: (state) => state.Ailet.DopolnitelnyeStili,
    }),
  },
  methods: {
    sedmicy: function () {
      this.OdnodnevnyPost = "";

      var first_sedmica = 8 - this.DenNachalaMesyaca;
      if (first_sedmica < 1) {
        first_sedmica = first_sedmica + 9;
      }
      if (store.state.Ailet.Prazdniki[first_sedmica - 1].length == 0) {
        this.OdnodnevnyPost += first_sedmica;
      }
      for (let i = first_sedmica + 9; i < this.KolichestvoDney + 1; i = i + 9) {
        if (store.state.Ailet.Prazdniki[i - 1].length == 0) {
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
