<template>
  <div>
    <span class="title red">{{ MESYAC }} ({{ Leto }})</span><br />
    <span class="subtitle">Месяц Пробужденiя Природы</span>
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
      <td>Дни Памяти и Почитания Предковъ: 5, 14, 19 {{ MESYAC }}</td>
    </tr>
    <tr>
      <td class="roditelskie_dni square">&nbsp;</td>
      <td>Родительские дни: 17, 35, 36, 37, 38 {{ MESYAC }}</td>
    </tr>
    <tr>
      <td class="post square">&nbsp;</td>
      <td>Великiй ПОСТЪ: 23 - 35 {{ MESYAC }}</td>
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
    <span class="red">2</span>&nbsp;-&nbsp;День&nbsp;Вечеzара&nbsp;Мученика
    <span class="red">5</span>&nbsp;-&nbsp;День&nbsp;Аристарха&nbsp;Воителя
    <span class="red">6</span>&nbsp;-&nbsp;День&nbsp;Боруслава&nbsp;Асгардскаго
    <span class="red">14</span>&nbsp;-&nbsp;День&nbsp;Ратибора&nbsp;Странниkа
    <span class="red">17</span>&nbsp;-&nbsp;День&nbsp;Димитрiя&nbsp;Капена
    <span class="red">19</span>&nbsp;-&nbsp;День&nbsp;Игоря&nbsp;Воителя
    <span class="red">22</span>&nbsp;-&nbsp;День&nbsp;Богини&nbsp;Весты
    <span class="red">23</span>&nbsp;-&nbsp;Красногоръ.&nbsp;Масленица
    <span class="red">24</span>&nbsp;-&nbsp;День&nbsp;Харiя&nbsp;Мученика
    <span class="red">25</span>&nbsp;-&nbsp;День&nbsp;Богуслава&nbsp;Мученика
    <span class="red">26</span>&nbsp;-&nbsp;День&nbsp;Тарислава&nbsp;Воителя
    <span class="red">27</span>&nbsp;-&nbsp;День&nbsp;Леды&nbsp;Воительницы
    <span class="red">28</span>&nbsp;-&nbsp;День&nbsp;Богини&nbsp;ТАРЫ
    <span class="red">29</span>&nbsp;-&nbsp;День&nbsp;Святоzара&nbsp;Спасителя
    <span class="red">30</span>&nbsp;-&nbsp;День&nbsp;Сергiя&nbsp;Лучеzарнаго
    <span class="red">31</span>&nbsp;-&nbsp;День&nbsp;Ратислава&nbsp;Асгардскаго
    <span class="red">32</span>&nbsp;-&nbsp;День&nbsp;Руслана&nbsp;Воителя
    <span class="red">33</span>&nbsp;-&nbsp;День&nbsp;Одина&nbsp;Асгардскаго
    <span class="red">34</span>&nbsp;-&nbsp;День&nbsp;Тора&nbsp;Свентогардскаго
    <span class="red">35</span>&nbsp;-&nbsp;День&nbsp;Памяти&nbsp;Предковъ
    <span class="red">36</span>&nbsp;-&nbsp;ПАСХЕТЪ
    <span class="red">37</span>&nbsp;-&nbsp;День&nbsp;МИТРЫ
    <span class="red">38</span>&nbsp;-&nbsp;День&nbsp;Воzрождения&nbsp;ТАРХА
    <span class="red">40</span>&nbsp;-&nbsp;День&nbsp;Айвана&nbsp;Вечнаго
  </div>
</template>

<script>
import SetkaMesyaca from "./SetkaMesyaca.vue";
export default {
  name: "Dailet",
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
      MESYAC: "Дайлѣтъ",
      Prazdniki: [
        "",
        "День Вечеzара Мученика",
        "",
        "",
        "День Аристарха Воителя",
        "День Боруслава Асгардскаго",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "День Ратибора Странниkа",
        "",
        "",
        "День Димитрiя Капена",
        "",
        "День Игоря Воителя",
        "",
        "",
        "День Богини Весты",
        "Красногоръ. Масленица",
        "День Харiя Мученика",
        "День Богуслава Мученика",
        "День Тарислава Воителя",
        "День Леды Воительницы",
        "День Богини ТАРЫ",
        "День Святоzара Спасителя",
        "День Сергiя Лучеzарнаго",
        "День Ратислава Асгардскаго",
        "День Руслана Воителя",
        "День Одина Асгардскаго",
        "День Тора Свентогардскаго",
        "День Памяти Предковъ",
        "ПАСХЕТЪ",
        "День МИТРЫ",
        "День Воzрождения ТАРХА",
        "",
        "День Айвана Вечнаго",
        "",
      ],
      DniPredkov: [
        0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
      RoditelskieDni: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0,
      ],
      Post: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0,
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
