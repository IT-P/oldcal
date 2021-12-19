<template>
  <div>
    <span class="title red">{{ MESYAC }} ({{ Leto }})</span><br />
    <span class="subtitle">Месяц Вьюгъ и Стужи</span>
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
      <td>Однодневный ПОСТЪ: {{ OdnodnevnyPost }} {{ MESYAC }}</td>
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
    <span class="red">37</span>&nbsp;-&nbsp;День&nbsp;БОГА&nbsp;ВЬЛЕСА
    <span class="red">40</span>&nbsp;-&nbsp;День&nbsp;Храма&nbsp;Души
  </div>
</template>

<script>
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
  methods: {
    sedmicy: function () {
      this.OdnodnevnyPost = "";

      var first_sedmica = 8 - this.DenNachalaMesyaca;
      if (first_sedmica < 1) {
        first_sedmica = first_sedmica + 9;
      }
      this.OdnodnevnyPost += first_sedmica;
      for (let i = first_sedmica + 9; i < this.KolichestvoDney + 1; i = i + 9) {
        this.OdnodnevnyPost += ", " + i;
      }
    },
  },
  data() {
    return {
      MESYAC: "Гейлѣтъ",
      Prazdniki: [
        "",
        "День Винитара Воителя",
        "",
        "",
        "",
        "",
        "День Горислава Мученика",
        "",
        "",
        "",
        "",
        "День Светоzара Вечнаго",
        "",
        "",
        "",
        "",
        "День Харiя Правѣднаго",
        "",
        "",
        "",
        "",
        "День Рамхата Странниkа",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "День БОГА ВЬЛЕСА",
        "",
        "",
        "День Храма Души",
        "",
      ],
      DniPredkov: [
        0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
      RoditelskieDni: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0,
      ],
      Post: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
      ],
      OdnodnevnyPost: "",
      DopolnitelnyeStili: [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
      ],
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
