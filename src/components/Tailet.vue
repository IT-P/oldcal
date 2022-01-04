<template>
  <div>
    <span class="title red">{{ MESYAC }} ({{ Leto }})</span><br />
    <span class="subtitle">Месяц Завершенiя</span>
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
      <td>Дни Памяти и Почитания Предковъ: 6, 12, 24, 31, 41 {{ MESYAC }}</td>
    </tr>
    <tr>
      <td class="roditelskie_dni square">&nbsp;</td>
      <td>Родительские дни: 3, 18, 27, 29, 33, 35 {{ MESYAC }}</td>
    </tr>
    <tr>
      <td class="sedmica square">&nbsp;</td>
      <td>Однодневный ПОСТЪ: {{ OdnodnevnyPost }} {{ MESYAC }}</td>
    </tr>
    <tr>
      <td class="zhatva square">&nbsp;</td>
      <td>Завершенiе жатвы: 21 {{ MESYAC }}</td>
    </tr>
  </table>
  <br />
  <div class="red">Славяно-Арийckiя праzдниkи на месяц {{ MESYAC }}</div>
  <div class="spisok_prazdnikov">
    <span class="red">3</span>&nbsp;-&nbsp;День&nbsp;Ворона&nbsp;ВАРУНЫ
    <span class="red">6</span>&nbsp;-&nbsp;День&nbsp;Александра&nbsp;Мудраго
    <span class="red">9</span>&nbsp;-&nbsp;День&nbsp;ТРЕХЪ&nbsp;ЛУНЪ
    <span class="red">12</span>&nbsp;-&nbsp;День&nbsp;Скiфия&nbsp;Волхва
    <span class="red">16</span>&nbsp;-&nbsp;День&nbsp;Димитрiя&nbsp;Основателя
    <span class="red">18</span>&nbsp;-&nbsp;День&nbsp;СТРИБОГА
    <span class="red">21</span>&nbsp;-&nbsp;Златогорка
    <span class="red">22</span>&nbsp;-&nbsp;Любомиръ
    <span class="red">24</span
    >&nbsp;-&nbsp;День&nbsp;Свентослава&nbsp;Асгардскаго
    <span class="red">27</span>&nbsp;-&nbsp;ДЖИВА-ИНТА
    <span class="red">29</span>&nbsp;-&nbsp;День&nbsp;ЖЕЛИ
    <span class="red">31</span>&nbsp;-&nbsp;День&nbsp;Святослва&nbsp;Правѣднаго
    <span class="red">33</span>&nbsp;-&nbsp;Сеченникъ
    <span class="red">35</span>&nbsp;-&nbsp;День&nbsp;Богини&nbsp;КАРНЫ
    <span class="red">38</span>&nbsp;-&nbsp;День&nbsp;Свѣтоzара&nbsp;Странниkа
    <span class="red">41</span>&nbsp;-&nbsp;День&nbsp;Александра&nbsp;Вещего
  </div>
</template>

<script>
import SetkaMesyaca from "./SetkaMesyaca.vue";
export default {
  name: "Tailet",
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
      MESYAC: "Тайлѣтъ",
      Prazdniki: [
        "",
        "",
        "День Ворона ВАРУНЫ",
        "",
        "",
        "День Александра Мудраго",
        "",
        "",
        "День ТРЕХЪ ЛУНЪ",
        "",
        "",
        "День Скiфия Волхва",
        "",
        "",
        "",
        "День Димитрiя Основателя",
        "",
        "День СТРИБОГА",
        "",
        "",
        "Златогорка",
        "Любомиръ",
        "",
        "День Свентослава Асгардскаго",
        "",
        "",
        "ДЖИВА-ИНТА",
        "",
        "День ЖЕЛИ",
        "",
        "День Святослва Правѣднаго",
        "",
        "Сеченникъ",
        "",
        "День Богини КАРНЫ",
        "",
        "",
        "День Свѣтоzара Странниkа",
        "",
        "",
        "День Александра Вещего",
      ],
      DniPredkov: [
        0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      ],
      RoditelskieDni: [
        0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0,
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
        "zhatva",
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
