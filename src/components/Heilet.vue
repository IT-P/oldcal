<template>
  <div>
    <span class="title red">{{ MESYAC }} ({{ Leto }})</span><br />
    <span class="subtitle">Месяц Полученiя Даров Природы</span>
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
      <td class="zhertvy_perunu square">&nbsp;</td>
      <td>Отбор беzkровныхъ жертвъ Перуну: 21 {{ MESYAC }}</td>
    </tr>
    <tr>
      <td class="dni_predkov square">&nbsp;</td>
      <td>Дни Памяти и Почитания Предковъ: 8, 13, 30, 38 {{ MESYAC }}</td>
    </tr>
    <tr>
      <td class="roditelskie_dni square">&nbsp;</td>
      <td>Родительские дни: 9, 17, 27, 34, 35 {{ MESYAC }}</td>
    </tr>
    <tr>
      <td class="post square">&nbsp;</td>
      <td>Свѣтлый ПОСТЪ: 32 Вейлѣтъ - 8 {{ MESYAC }}</td>
    </tr>
    <tr>
      <td class="sedmica square">&nbsp;</td>
      <td>
        Однодневный ПОСТЪ - каждая Седьмица (кроме праздничных дней):
        {{ OdnodnevnyPost }} {{ MESYAC }}
      </td>
    </tr>
    <tr>
      <td class="zhatva square">&nbsp;</td>
      <td>Начало жатвы: 40 {{ MESYAC }}</td>
    </tr>
  </table>
  <br />
  <div class="red">Славяно-Арийckiя праzдниkи на месяц {{ MESYAC }}</div>
  <div class="spisok_prazdnikov">
    <span class="red">1</span>&nbsp;-&nbsp;Русалiи
    <span class="red">2</span>&nbsp;-&nbsp;Ярилинъ&nbsp;День
    <span class="red">3</span>&nbsp;-&nbsp;День&nbsp;Омовенiя
    <span class="red">4</span>&nbsp;-&nbsp;Русалiи
    <span class="red">5</span>&nbsp;-&nbsp;Русалiи
    <span class="red">6</span>&nbsp;-&nbsp;Русалiи
    <span class="red">7</span>&nbsp;-&nbsp;КУПАЛА
    <span class="red">8</span>&nbsp;-&nbsp;День&nbsp;Зари-Мерцаны
    <span class="red">9</span>&nbsp;-&nbsp;День&nbsp;Великай&nbsp;Инглiи
    <span class="red">13</span>&nbsp;-&nbsp;День&nbsp;Александра&nbsp;Странниkа
    <span class="red">17</span>&nbsp;-&nbsp;День&nbsp;Земли&nbsp;Свята&nbsp;Расы
    <span class="red">18</span>&nbsp;-&nbsp;День&nbsp;Орея&nbsp;Вендагарскаго
    <span class="red">21</span>&nbsp;-&nbsp;ПЕРУНИЦА
    <span class="red">22</span>&nbsp;-&nbsp;День&nbsp;Сбора&nbsp;Плодовъ
    <span class="red">27</span>&nbsp;-&nbsp;День&nbsp;БОГА&nbsp;УДРЗЕЦА
    <span class="red">30</span>&nbsp;-&nbsp;День&nbsp;Игоря&nbsp;Святомудраго
    <span class="red">33</span>&nbsp;-&nbsp;Вышний День&nbsp;ПЕРУНА
    <span class="red">34</span>&nbsp;-&nbsp;День&nbsp;Летиницы
    <span class="red">35</span>&nbsp;-&nbsp;РИТА
    <span class="red">38</span>&nbsp;-&nbsp;День&nbsp;Александра&nbsp;Ярославича
    <span class="red">40</span>&nbsp;-&nbsp;ЖИТНИЧЬ
  </div>
</template>

<script>
import SetkaMesyaca from "./SetkaMesyaca.vue";
export default {
  name: "Heilet",
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
      MESYAC: "Хейлѣтъ",
      Prazdniki: [
        "Русалiи",
        "Ярилинъ День",
        "День Омовенiя",
        "Русалiи",
        "Русалiи",
        "Русалiи",
        "КУПАЛА",
        "День Зари-Мерцаны",
        "День Великай Инглiи",
        "",
        "",
        "",
        "День Александра Странниkа",
        "",
        "",
        "",
        "День Земли Свята Расы",
        "День Орея Вендагарскаго",
        "",
        "",
        "ПЕРУНИЦА",
        "День Сбора Плодовъ",
        "",
        "",
        "",
        "",
        "День БОГА УДРЗЕЦА",
        "",
        "",
        "День Игоря Святомудраго",
        "",
        "",
        "Вышний День ПЕРУНА",
        "День Летиницы",
        "РИТА",
        "",
        "",
        "День Александра Ярославича",
        "",
        "ЖИТНИЧЬ",
        "",
      ],
      DniPredkov: [
        0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
      ],
      RoditelskieDni: [
        0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0,
      ],
      Post: [
        1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
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
        "zhertvy_perunu",
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
