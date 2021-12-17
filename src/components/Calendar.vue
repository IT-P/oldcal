<template>
  <div align="center">
    <div>
      <span class="arrow" @click="leto_nazad()">&laquo;</span>
      &nbsp;&nbsp;
      <span class="arrow" @click="tekuschee_leto()">Текущее лето</span>
      &nbsp;&nbsp;
      <span class="arrow" @click="leto_vpered()">&raquo;</span>
    </div>
    <h1>Коляды Даръ {{ LETO }}</h1>
    <div style="page-break-after: always"></div>
    <table border="0" class="zagolovok" width="800px">
      <tr>
        <th class="bok" width="33%">
          {{ NAZVANIYA_LET[LETO_V_KRUGE_ZHIZNI - 1] }} <br />
          {{ LETO_V_KRUGE_ZHIZNI }}-е Лѣто 53-го Круга<br />
          на Круголѣте Числобога
        </th>
        <th>
          <span class="title red" width="34%">ЭПОХА ВОЛКА</span>
        </th>
        <th class="bok" width="33%">
          Лѣто {{ 5500 + LETO }}<br />отъ Великай Стужи<br />на Круголѣте
          Числобога
        </th>
      </tr>
    </table>
    <ramhat v-bind:DenNachalaMesyaca="dni_nedeli_nachala_krugoleta[LETO_V_KRUGE_ZHIZNI-1]"></ramhat>
  </div>
</template>

<script>
import Ramhat from "./Ramhat.vue";

export default {
  name: "Calendar",
  components: {
    Ramhat,
  },
  created: function () {
    this.tekuschee_leto();
  },
  methods: {
    tekuschee_leto: function () {
      const current_grig_date = new Date();
      if (current_grig_date.getMonth() < 9) {
        this.LETO = 5508 + current_grig_date.getFullYear();
      }
      if (current_grig_date.getMonth() > 9) {
        this.LETO = 5509 + current_grig_date.getFullYear();
      }
      if (current_grig_date.getMonth() == 9) {
        var tmp_leto = 5509 + current_grig_date.getFullYear();
        var tmp_leto_v_kruge_zhizni = tmp_leto - 7520;
        var tmp_leto_v_kruge_let = (tmp_leto_v_kruge_zhizni % 16) - 1;
        if (tmp_leto_v_kruge_let < 0) {
          tmp_leto_v_kruge_let = 15;
        }
        if (
          current_grig_date.getDate() <
          this.grig_den_nachala_leta[tmp_leto_v_kruge_let]
        ) {
          this.LETO = 5508 + current_grig_date.getFullYear();
        }

        if (
          current_grig_date.getDate() >
          this.grig_den_nachala_leta[tmp_leto_v_kruge_let]
        ) {
          this.LETO = 5509 + current_grig_date.getFullYear();
        }

        if (
          current_grig_date.getDate() ==
          this.grig_den_nachala_leta[tmp_leto_v_kruge_let]
        ) {
          if (current_grig_date.getHours() < 18) {
            this.LETO = 5508 + current_grig_date.getFullYear();
          } else {
            this.LETO = 5509 + current_grig_date.getFullYear();
          }
        }
      }
      this.update_leto_vars();
    },
    leto_vpered: function () {
      if (this.LETO < 7664) {
        this.LETO++;
        this.update_leto_vars();
      }
    },
    leto_nazad: function () {
      if (this.LETO > 7521) {
        this.LETO--;
        this.update_leto_vars();
      }
    },
    update_leto_vars: function () {
      this.LETO_V_KRUGE_ZHIZNI = this.LETO - 7520;
      this.LETO_V_KRUGE_LET = this.LETO_V_KRUGE_ZHIZNI % 16;
      if (this.LETO_V_KRUGE_LET == 0) {
        this.LETO_V_KRUGE_LET = 16;
        this.SVYASCHENNOE_LETO = 1;
      }
    },
  },
  data() {
    return {
      LETO: 7521,
      SVYASCHENNOE_LETO: 0,
      LETO_V_KRUGE_ZHIZNI: 0,
      LETO_V_KRUGE_LET: 0,
      NAZVANIYA_LET: [
        "Земной Путь",
        "Чёрный Жрец",
        "Звёздная Дева",
        "Звёздный Мир",
        "Огненный Свиток",
        "Огненный Феникс",
        "Жёлтый Лис",
        "Жёлтый Дракон",
        "Зелёный Змей",
        "Лесной Орёл",
        "Небесный Дельфин",
        "Небесный Конь",
        "Морской Пёс",
        "Морской Тур",
        "Лунный Дом",
        "Лунный Храм",
        "Странник Божий",
        "Белый Жрец",
        "Чёрная Жрица",
        "Земной Мир",
        "Красный Свиток",
        "Звёздный Феникс",
        "Огненный Лис",
        "Огненный Дракон",
        "Золотой Змей",
        "Золотой Орёл",
        "Зелёный Дельфин",
        "Лесной Конь",
        "Песец",
        "Небесный Тур",
        "Морской Дом",
        "Храм Бога Морей",
        "Лунный Странник",
        "Лунный Жрец",
        "Белая Дева",
        "Явь Божия",
        "Чёрный Свиток",
        "Чёрный Феникс",
        "Звёздный Лис",
        "Красный Дракон",
        "Огненный Змей",
        "Огненный Орёл",
        "Золотой Дельфин",
        "Златый Конь",
        "Лесной Пёс",
        "Лесной Тур",
        "Небесный Дом",
        "Небесный Храм",
        "Водный Путь",
        "Жрец Моря",
        "Жрица Луны",
        "Лунный Мир",
        "Белый Свиток",
        "Белый Феникс",
        "Земной Феникс",
        "Чёрный Дракон",
        "Звёздный Змей",
        "Звёздный Орёл",
        "Огненный Дельфин",
        "Огненный Конь",
        "Жёлтый Пёс",
        "Золотой Тур",
        "Лесной Дом",
        "Год Спирали",
        "Сварожий Путь",
        "Жрец Неба",
        "Морская Жрица",
        "Морской Мир",
        "Лунный Свиток",
        "Лунный Феникс",
        "Белый Лис",
        "Белый Дракон",
        "Чёрный Змей",
        "Чёрный Орёл",
        "Звёздный Дельфин",
        "Звёздный Конь",
        "Огненный Пёс",
        "Огненный Тур",
        "Солнечный Дом",
        "Храм Солнца",
        "Лесной Странник",
        "Год Друида",
        "Небесная Дева",
        "Небесная Явь",
        "Синий Свиток",
        "Морской Феникс",
        "Лунная Навь",
        "Лунный Дракон",
        "Белый Змей",
        "Белый Орёл",
        "Чёрный Дельфин",
        "Чёрный Конь",
        "Звёздный Пёс",
        "Звёздный Тур",
        "Огненный Дом",
        "Храм Инглии",
        "Солнечный Странник",
        "Жрец Солнца",
        "Друидесса",
        "Лесной Мир",
        "Небесный Свиток",
        "Феникс Небесный",
        "Морской Лис",
        "Морской Дракон",
        "Лунный Змей",
        "Лунный Орёл",
        "Белый Дельфин",
        "Белый Конь",
        "Чёрный Пёс",
        "Чёрный Тур",
        "Звёздный Дом",
        "Звёздный Храм",
        "Огненный Странник",
        "Огненный Жрец",
        "Солнечная Жрица",
        "Солнечный Мир",
        "Зеленый Свиток",
        "Феникс Леса",
        "Небесная Навь",
        "Небесный Дракон",
        "Морской Змей",
        "Морской Орёл",
        "Лунный Дельфин",
        "Лунный Конь",
        "Белый Пёс",
        "Белый Тур",
        "Земной Дом",
        "Земной Храм",
        "Звёздный Путь",
        "Звёздный Жрец",
        "Жрица Огня",
        "Огненный Мир",
        "Золотой Свиток",
        "Солнечный Феникс",
        "Лесной Лис",
        "Лесной Дракон",
        "Небесный Змей",
        "Небесный Орёл",
        "Морской Дельфин",
        "Морской Конь",
        "Лунный Пёс",
        "Лунный Тур",
        "Божий Дом",
        "Священный Храм Бога",
      ],
      grig_den_nachala_leta: [
        23, 23, 23, 23, 22, 22, 22, 22, 21, 21, 21, 21, 20, 20, 20, 20,
      ],
      dni_nedeli_nachala_krugoleta: [
        1, 6, 2, 7, 3, 8, 4, 9, 5, 1, 6, 2, 7, 3, 8, 4, 4, 9, 5, 1, 6, 2, 7, 3,
        8, 4, 9, 5, 1, 6, 2, 7, 7, 3, 8, 4, 9, 5, 1, 6, 2, 7, 3, 8, 4, 9, 5, 1,
        1, 6, 2, 7, 3, 8, 4, 9, 5, 1, 6, 2, 7, 3, 8, 4, 4, 9, 5, 1, 6, 2, 7, 3,
        8, 4, 9, 5, 1, 6, 2, 7, 7, 3, 8, 4, 9, 5, 1, 6, 2, 7, 3, 8, 4, 9, 5, 1,
        1, 6, 2, 7, 3, 8, 4, 9, 5, 1, 6, 2, 7, 3, 8, 4, 4, 9, 5, 1, 6, 2, 7, 3,
        8, 4, 9, 5, 1, 6, 2, 7, 7, 3, 8, 4, 9, 5, 1, 6, 2, 7, 3, 8, 4, 9, 5, 1,
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.arrow {
  cursor: pointer;
}
</style>
