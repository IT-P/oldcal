<template>
  <div>
    <span class="title red">{{ MESYAC }} ({{ Leto }})</span><br />
    <span class="subtitle">Месяц Божественнаго Начала</span>
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
      <td>Дни Памяти и Почитания Предковъ: 9, 16, 24, 36, 40 {{ MESYAC }}</td>
    </tr>
    <tr>
      <td class="roditelskie_dni square">&nbsp;</td>
      <td>Родительские дни: 14, 27, 38 {{ MESYAC }}</td>
    </tr>
    <tr>
      <td class="post square">&nbsp;</td>
      <td>Святый ПОСТЪ: 23 - 31 {{ MESYAC }}</td>
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
    <span class="red">1</span>&nbsp;-&nbsp;НОВОЛѢТIЕ
    <span class="red">4</span>&nbsp;-&nbsp;День&nbsp;Ивана&nbsp;Омiйскаго
    <span class="red">6</span>&nbsp;-&nbsp;Праzдниkъ&nbsp;Урожая
    <span class="red">9</span>&nbsp;-&nbsp;День&nbsp;Сергiя&nbsp;Странниkа
    <span class="red">11</span>&nbsp;-&nbsp;День&nbsp;Ольги&nbsp;Премудрой
    <span class="red">14</span>&nbsp;-&nbsp;День&nbsp;Великай&nbsp;Рассенiи
    <span class="red">16</span>&nbsp;-&nbsp;День&nbsp;Василiя&nbsp;Буслаева
    <span class="red">19</span>&nbsp;-&nbsp;День&nbsp;Харiя&nbsp;Мудраго
    <span class="red">22</span>&nbsp;-&nbsp;День&nbsp;Вѣдъ
    <span class="red">24</span>&nbsp;-&nbsp;День&nbsp;Трояна
    <span class="red">27</span>&nbsp;-&nbsp;День&nbsp;Святибора
    <span class="red">31</span>&nbsp;-&nbsp;День&nbsp;Моисiя&nbsp;Волхва
    <span class="red">36</span>&nbsp;-&nbsp;День&nbsp;Сканда&nbsp;Ирiйскаго
    <span class="red">38</span>&nbsp;-&nbsp;День&nbsp;БОГИНИ&nbsp;РОЖАНЫ
    <span class="red">40</span>&nbsp;-&nbsp;День&nbsp;Мудрых&nbsp;Странников
  </div>
</template>

<script>
import SetkaMesyaca from "./SetkaMesyaca.vue";
export default {
  name: "Ramhat",
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
      MESYAC: "Рамхатъ",
      Prazdniki: [
        "НОВОЛѢТIЕ",
        "",
        "",
        "День Ивана Омiйскаго",
        "",
        "Праzдниkъ Урожая",
        "",
        "",
        "День Сергiя Странниkа",
        "",
        "День Ольги Премудрой",
        "",
        "",
        "День Великай Рассенiи",
        "",
        "День Василiя Буслаева",
        "",
        "",
        "День Харiя Мудраго",
        "",
        "",
        "День Вѣдъ",
        "",
        "День Трояна",
        "",
        "",
        "День Святибора",
        "",
        "",
        "",
        "День Моисiя Волхва",
        "",
        "",
        "",
        "",
        "День Сканда Ирiйскаго",
        "",
        "День БОГИНИ РОЖАНЫ",
        "",
        "День Мудрых Странников",
        "",
      ],
      DniPredkov: [
        0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0,
      ],
      RoditelskieDni: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
      ],
      Post: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
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
