<template>
  <div>
    <span class="title red">{{ MESYAC }} ({{ Leto }})</span><br />
    <span class="subtitle">Месяц Белаго Сiянiя и Покоя Мiра</span>
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
      <td>Дни Памяти и Почитания Предковъ: 7, 13, 18 {{ MESYAC }}</td>
    </tr>
    <tr>
      <td class="roditelskie_dni square">&nbsp;</td>
      <td>
        Родительские дни: 23, 24, 25, 26, 27, 28, 29, 30, 31, 32 {{ MESYAC }}
      </td>
    </tr>
    <tr>
      <td class="post square">&nbsp;</td>
      <td>Даждьбожий ПОСТЪ: 1 - 18 {{ MESYAC }}</td>
    </tr>
    <tr>
      <td class="sedmica square">&nbsp;</td>
      <td>Однодневный ПОСТЪ: {{ OdnodnevnyPost }} {{ MESYAC }}</td>
    </tr>
  </table>
  <br />
  <div class="red">Славяно-Арийckiя праzдниkи на месяц {{ MESYAC }}</div>
  <div class="spisok_prazdnikov">
    <span class="red">1</span
    >&nbsp;-&nbsp;День&nbsp;ДАЖДЬБОГА&nbsp;и&nbsp;МАРЕНЫ
    <span class="red">4</span>&nbsp;-&nbsp;День&nbsp;Марьяны&nbsp;и&nbsp;Марены
    <span class="red">7</span>&nbsp;-&nbsp;День&nbsp;Успокоенiя
    <span class="red">13</span>&nbsp;-&nbsp;День&nbsp;Переменъ,&nbsp;Коляда
    <span class="red">18</span>&nbsp;-&nbsp;День&nbsp;Спасителя&nbsp;Расы
    <span class="red">20</span>&nbsp;-&nbsp;День&nbsp;Всеволода&nbsp;Вечнаго
    <span class="red">22</span>&nbsp;-&nbsp;День&nbsp;Великаго&nbsp;Покоя
    <span class="red">29</span>&nbsp;-&nbsp;РОДОГОЩЬ
    <span class="red">33</span
    >&nbsp;-&nbsp;Зимний&nbsp;День&nbsp;БОГА&nbsp;ПЕРУНА
    <span class="red">38</span>&nbsp;-&nbsp;День&nbsp;Александра&nbsp;Основателя
  </div>
</template>

<script>
import SetkaMesyaca from "./SetkaMesyaca.vue";
export default {
  name: "Beilet",
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
      MESYAC: "Бейлѣтъ",
      Prazdniki: [
        "День ДАЖДЬБОГА и МАРЕНЫ",
        "",
        "",
        "День Марьяны и Марены",
        "",
        "",
        "День Успокоенiя",
        "",
        "",
        "",
        "",
        "",
        "День Переменъ, Коляда",
        "",
        "",
        "",
        "",
        "День Спасителя Расы",
        "",
        "День Всеволода Вечнаго",
        "",
        "День Великаго Покоя",
        "",
        "",
        "",
        "",
        "",
        "",
        "РОДОГОЩЬ",
        "",
        "",
        "",
        "Зимний День БОГА ПЕРУНА",
        "",
        "",
        "",
        "",
        "День Александра Основателя",
        "",
        "",
        "",
      ],
      DniPredkov: [
        0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
      RoditelskieDni: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
      Post: [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
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
