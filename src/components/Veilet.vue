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
      <td>Дни Памяти и Почитания Предковъ: 5, 14, 18, 25 {{ MESYAC }}</td>
    </tr>
    <tr>
      <td class="roditelskie_dni square">&nbsp;</td>
      <td>Родительские дни: 9, 22, 27, 30, 39 {{ MESYAC }}</td>
    </tr>
    <tr>
      <td class="post square">&nbsp;</td>
      <td>Свѣтлый ПОСТЪ: 32 {{ MESYAC }} - 8 Хейлѣтъ</td>
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
    <span class="red">5</span>&nbsp;-&nbsp;День&nbsp;Всеволода&nbsp;Мудраго
    <span class="red">9</span>&nbsp;-&nbsp;День&nbsp;Бога&nbsp;Вышьня
    <span class="red">12</span>&nbsp;-&nbsp;День&nbsp;Бога&nbsp;Яровита
    <span class="red">14</span>&nbsp;-&nbsp;День&nbsp;Ратибора&nbsp;Воителя
    <span class="red">18</span>&nbsp;-&nbsp;День&nbsp;Мудрости&nbsp;Будха
    <span class="red">22</span>&nbsp;-&nbsp;РА-М-Ха-ИНТА
    <span class="red">25</span>&nbsp;-&nbsp;День&nbsp;Вѣдаслава&nbsp;Правѣдника
    <span class="red">27</span>&nbsp;-&nbsp;ТРИГЛАВЪ
    <span class="red">30</span>&nbsp;-&nbsp;РОДОНИЦА
    <span class="red">31</span>&nbsp;-&nbsp;День&nbsp;ЧИСЛОБОГА
    <span class="red">32</span>&nbsp;-&nbsp;День&nbsp;ЛАДААДА
    <span class="red">33</span>&nbsp;-&nbsp;День&nbsp;Бога ХОРСА
    <span class="red">34</span>&nbsp;-&nbsp;День&nbsp;Ясуни
    <span class="red">35</span>&nbsp;-&nbsp;День&nbsp;Родовита
    <span class="red">36</span>&nbsp;-&nbsp;День&nbsp;Поzвѣzда
    <span class="red">37</span>&nbsp;-&nbsp;День&nbsp;Родарита
    <span class="red">38</span>&nbsp;-&nbsp;День&nbsp;РОДАГОСТА
    <span class="red">39</span>&nbsp;-&nbsp;День&nbsp;КРОДА
    <span class="red">40</span>&nbsp;-&nbsp;Русалiи
    <span class="red">41</span>&nbsp;-&nbsp;Русалiи
  </div>
</template>

<script>
import { mapState } from "vuex";
import store from "../store";
import SetkaMesyaca from "./SetkaMesyaca.vue";
export default {
  name: "Veilet",
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
      MESYAC: (state) => state.Veilet.MESYAC,
      MESYAC_OPISANIE: (state) => state.Veilet.MESYAC_OPISANIE,
      Prazdniki: (state) => state.Veilet.Prazdniki,
      DniPredkov: (state) => state.Veilet.DniPredkov,
      RoditelskieDni: (state) => state.Veilet.RoditelskieDni,
      Post: (state) => state.Veilet.Post,
      DopolnitelnyeStili: (state) => state.Veilet.DopolnitelnyeStili,
    }),
  },
  methods: {
    sedmicy: function () {
      this.OdnodnevnyPost = "";

      var first_sedmica = 8 - this.DenNachalaMesyaca;
      if (first_sedmica < 1) {
        first_sedmica = first_sedmica + 9;
      }
      if (store.state.Veilet.Prazdniki[first_sedmica - 1].length == 0) {
        this.OdnodnevnyPost += first_sedmica;
      }
      for (let i = first_sedmica + 9; i < this.KolichestvoDney + 1; i = i + 9) {
        if (store.state.Veilet.Prazdniki[i - 1].length == 0) {
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
