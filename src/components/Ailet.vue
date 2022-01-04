<template>
  <div>
    <span class="title red">{{ MESYAC }} ({{ Leto }})</span><br />
    <span class="subtitle">Месяц Новыхъ Даровъ</span>
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
      <td>Однодневный ПОСТЪ: {{ OdnodnevnyPost }} {{ MESYAC }}</td>
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
    <span class="red">25</span
    >&nbsp;-&nbsp;День&nbsp;СВАРОГА&nbsp;и&nbsp;СЕМАРГЛА
    <span class="red">29</span
    >&nbsp;-&nbsp;День&nbsp;Мирослава&nbsp;Мироустроителя
    <span class="red">32</span>&nbsp;-&nbsp;День&nbsp;Хорива&nbsp;Мудраго
    <span class="red">36</span>&nbsp;-&nbsp;День&nbsp;Олега&nbsp;Правѣднаго
  </div>
</template>

<script>
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
  methods: {
    sedmicy: function () {
      this.OdnodnevnyPost = "";

      var first_sedmica = 8 - this.DenNachalaMesyaca;
      if (first_sedmica < 1) {
        first_sedmica = first_sedmica + 9;
      }
      if (this.Prazdniki[first_sedmica - 1].length == 0) {
        this.OdnodnevnyPost += first_sedmica;
      }
      for (let i = first_sedmica + 9; i < this.KolichestvoDney + 1; i = i + 9) {
        if (this.Prazdniki[i - 1].length == 0) {
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
      MESYAC: "Айлѣтъ",
      Prazdniki: [
        "",
        "День Мирослава Тарiйскаго",
        "",
        "День Харiя Предвечнаго",
        "",
        "",
        "День Родамира Тарiйскаго",
        "",
        "",
        "",
        "",
        "День БОГИНИ МАКОШИ",
        "День Олега Воителя",
        "",
        "",
        "День Просвещенныхъ Инглянъ",
        "",
        "",
        "День Аристарха Мудраго",
        "",
        "",
        "День Откровенiя Боговъ",
        "",
        "",
        "День СВАРОГА и СЕМАРГЛА",
        "",
        "",
        "",
        "День Мирослава Мироустроителя",
        "",
        "",
        "День Хорива Мудраго",
        "",
        "",
        "",
        "День Олега Правѣднаго",
        "",
        "",
        "",
        "",
        "",
      ],
      DniPredkov: [
        0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
      ],
      RoditelskieDni: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
      Post: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
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
