<template>
  <div>
    <span class="title">Рамхатъ</span><br />
    <span class="subtitle">Месяц Божественнаго Начала</span>
  </div>
  <setka-mesyaca
    :DenNachalaMesyaca="DenNachalaMesyaca"
    :KolichestvoDney="41"
    :Prazdniki="Prazdniki"
    :DniPredkov="DniPredkov"
    :RoditelskieDni="RoditelskieDni"
    :Post="Post"
  ></setka-mesyaca>
</template>

<script>
import SetkaMesyaca from "./SetkaMesyaca.vue";
export default {
  name: "Ramhat",
  props: {
    DenNachalaMesyaca: Number,
  },
  components: {
    SetkaMesyaca,
  },
  data() {
    return {
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
        "Дидовъ День",
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
    };
  },
};
</script>
