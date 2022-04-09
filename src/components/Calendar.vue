<template>
  <div class="menu">
    <router-link class="menu_link" to="/">Вернуться к меню</router-link>
  </div>
  <div align="center">
    <div>
      <button @click="leto_nazad()">&laquo;</button>
      &nbsp;&nbsp;
      <button @click="tekuschee_leto()">Текущее лето ({{ TEKUSCHEE_LETO }})</button>
      &nbsp;&nbsp;
      <button @click="leto_vpered()">&raquo;</button>
    </div>
    <h1>Коляды Даръ {{ LETO }}</h1>
    <table border="0" class="zagolovok" width="800px">
      <tr>
        <th class="bok" width="33%">
          <!-- {{ NAZVANIYA_LET[LETO_V_KRUGE_ZHIZNI - 1] }} <br /> -->
          {{ nazvaniye_leta(LETO_V_KRUGE_ZHIZNI - 1) }} <br />
          {{ LETO_V_KRUGE_ZHIZNI }}-е Лѣто 53-го Круга<br />
          на Круголѣте Числобога
        </th>
        <th>
          <span class="title red" width="34%">ЭПОХА ВОЛКА</span>
        </th>
        <th class="bok" width="33%">
          Лѣто {{ 5500 + LETO }}<br />отъ Великай Стужи<br />на Круголѣте Числобога
        </th>
      </tr>
    </table>
    <div class="opisanie_leta">
      <!-- {{ OPISNIYA_LET[LETO_V_KRUGE_ZHIZNI - 1] }} -->
      {{ opisaniye_leta(LETO_V_KRUGE_ZHIZNI - 1) }}
    </div>
    <div style="page-break-after: always"></div>
    <ramhat
      :Leto="LETO"
      :DenNachalaMesyaca="dni_nedeli_nachala_krugoleta[LETO_V_KRUGE_ZHIZNI - 1]"
      :KolichestvoDney="kolichestvo_dney_v_mesyace[0]"
      :DenNachalaMesyacaGrig="leto_grig[LETO_V_KRUGE_LET][0] + '.' + (LETO - 5509)"
    />
    <br />
    <br />
    <div style="page-break-after: always"></div>
    <ailet
      v-if="SVYASCHENNOE_LETO"
      :Leto="LETO"
      :DenNachalaMesyaca="
        nachalo_mesyaca_sv[dni_nedeli_nachala_krugoleta[LETO_V_KRUGE_ZHIZNI - 1]][1]
      "
      :KolichestvoDney="kolichestvo_dney_v_mesyace[1]"
      :DenNachalaMesyacaGrig="leto_grig[LETO_V_KRUGE_LET][1] + '.' + (LETO - 5509)"
    />
    <ailet
      v-else
      :Leto="LETO"
      :DenNachalaMesyaca="
        nachalo_mesyaca_prostoe[dni_nedeli_nachala_krugoleta[LETO_V_KRUGE_ZHIZNI - 1]][1]
      "
      :KolichestvoDney="kolichestvo_dney_v_mesyace[1]"
      :DenNachalaMesyacaGrig="leto_grig[LETO_V_KRUGE_LET][1] + '.' + (LETO - 5509)"
    />
    <br />
    <br />
    <div style="page-break-after: always"></div>
    <beilet
      v-if="SVYASCHENNOE_LETO"
      :Leto="LETO"
      :DenNachalaMesyaca="
        nachalo_mesyaca_sv[dni_nedeli_nachala_krugoleta[LETO_V_KRUGE_ZHIZNI - 1]][2]
      "
      :KolichestvoDney="kolichestvo_dney_v_mesyace[2]"
      :DenNachalaMesyacaGrig="leto_grig[LETO_V_KRUGE_LET][2] + '.' + (LETO - 5509)"
    />
    <beilet
      v-else
      :Leto="LETO"
      :DenNachalaMesyaca="
        nachalo_mesyaca_prostoe[dni_nedeli_nachala_krugoleta[LETO_V_KRUGE_ZHIZNI - 1]][2]
      "
      :KolichestvoDney="kolichestvo_dney_v_mesyace[2]"
      :DenNachalaMesyacaGrig="leto_grig[LETO_V_KRUGE_LET][2] + '.' + (LETO - 5509)"
    />
    <br />
    <br />
    <div style="page-break-after: always"></div>
    <geilet
      v-if="SVYASCHENNOE_LETO"
      :Leto="LETO"
      :DenNachalaMesyaca="
        nachalo_mesyaca_sv[dni_nedeli_nachala_krugoleta[LETO_V_KRUGE_ZHIZNI - 1]][3]
      "
      :KolichestvoDney="kolichestvo_dney_v_mesyace[3]"
      :DenNachalaMesyacaGrig="leto_grig[LETO_V_KRUGE_LET][3] + '.' + (LETO - 5508)"
    />
    <geilet
      v-else
      :Leto="LETO"
      :DenNachalaMesyaca="
        nachalo_mesyaca_prostoe[dni_nedeli_nachala_krugoleta[LETO_V_KRUGE_ZHIZNI - 1]][3]
      "
      :KolichestvoDney="kolichestvo_dney_v_mesyace[3]"
      :DenNachalaMesyacaGrig="leto_grig[LETO_V_KRUGE_LET][3] + '.' + (LETO - 5508)"
    />
    <br />
    <br />
    <div style="page-break-after: always"></div>
    <dailet
      v-if="SVYASCHENNOE_LETO"
      :Leto="LETO"
      :DenNachalaMesyaca="
        nachalo_mesyaca_sv[dni_nedeli_nachala_krugoleta[LETO_V_KRUGE_ZHIZNI - 1]][4]
      "
      :KolichestvoDney="kolichestvo_dney_v_mesyace[4]"
      :DenNachalaMesyacaGrig="leto_grig[LETO_V_KRUGE_LET][4] + '.' + (LETO - 5508)"
    />
    <dailet
      v-else
      :Leto="LETO"
      :DenNachalaMesyaca="
        nachalo_mesyaca_prostoe[dni_nedeli_nachala_krugoleta[LETO_V_KRUGE_ZHIZNI - 1]][4]
      "
      :KolichestvoDney="kolichestvo_dney_v_mesyace[4]"
      :DenNachalaMesyacaGrig="leto_grig[LETO_V_KRUGE_LET][4] + '.' + (LETO - 5508)"
    />
    <br />
    <br />
    <div style="page-break-after: always"></div>
    <elet
      v-if="SVYASCHENNOE_LETO"
      :Leto="LETO"
      :DenNachalaMesyaca="
        nachalo_mesyaca_sv[dni_nedeli_nachala_krugoleta[LETO_V_KRUGE_ZHIZNI - 1]][5]
      "
      :KolichestvoDney="kolichestvo_dney_v_mesyace[5]"
      :DenNachalaMesyacaGrig="leto_grig[LETO_V_KRUGE_LET][5] + '.' + (LETO - 5508)"
    />
    <elet
      v-else
      :Leto="LETO"
      :DenNachalaMesyaca="
        nachalo_mesyaca_prostoe[dni_nedeli_nachala_krugoleta[LETO_V_KRUGE_ZHIZNI - 1]][5]
      "
      :KolichestvoDney="kolichestvo_dney_v_mesyace[5]"
      :DenNachalaMesyacaGrig="leto_grig[LETO_V_KRUGE_LET][5] + '.' + (LETO - 5508)"
    />
    <br />
    <br />
    <div style="page-break-after: always"></div>
    <veilet
      v-if="SVYASCHENNOE_LETO"
      :Leto="LETO"
      :DenNachalaMesyaca="
        nachalo_mesyaca_sv[dni_nedeli_nachala_krugoleta[LETO_V_KRUGE_ZHIZNI - 1]][6]
      "
      :KolichestvoDney="kolichestvo_dney_v_mesyace[6]"
      :DenNachalaMesyacaGrig="leto_grig[LETO_V_KRUGE_LET][6] + '.' + (LETO - 5508)"
    />
    <veilet
      v-else
      :Leto="LETO"
      :DenNachalaMesyaca="
        nachalo_mesyaca_prostoe[dni_nedeli_nachala_krugoleta[LETO_V_KRUGE_ZHIZNI - 1]][6]
      "
      :KolichestvoDney="kolichestvo_dney_v_mesyace[6]"
      :DenNachalaMesyacaGrig="leto_grig[LETO_V_KRUGE_LET][6] + '.' + (LETO - 5508)"
    />
    <br />
    <br />
    <div style="page-break-after: always"></div>
    <heilet
      v-if="SVYASCHENNOE_LETO"
      :Leto="LETO"
      :DenNachalaMesyaca="
        nachalo_mesyaca_sv[dni_nedeli_nachala_krugoleta[LETO_V_KRUGE_ZHIZNI - 1]][7]
      "
      :KolichestvoDney="kolichestvo_dney_v_mesyace[7]"
      :DenNachalaMesyacaGrig="leto_grig[LETO_V_KRUGE_LET][7] + '.' + (LETO - 5508)"
    />
    <heilet
      v-else
      :Leto="LETO"
      :DenNachalaMesyaca="
        nachalo_mesyaca_prostoe[dni_nedeli_nachala_krugoleta[LETO_V_KRUGE_ZHIZNI - 1]][7]
      "
      :KolichestvoDney="kolichestvo_dney_v_mesyace[7]"
      :DenNachalaMesyacaGrig="leto_grig[LETO_V_KRUGE_LET][7] + '.' + (LETO - 5508)"
    />
    <br />
    <br />
    <div style="page-break-after: always"></div>
    <tailet
      v-if="SVYASCHENNOE_LETO"
      :Leto="LETO"
      :DenNachalaMesyaca="
        nachalo_mesyaca_sv[dni_nedeli_nachala_krugoleta[LETO_V_KRUGE_ZHIZNI - 1]][8]
      "
      :KolichestvoDney="kolichestvo_dney_v_mesyace[8]"
      :DenNachalaMesyacaGrig="leto_grig[LETO_V_KRUGE_LET][8] + '.' + (LETO - 5508)"
    />
    <tailet
      v-else
      :Leto="LETO"
      :DenNachalaMesyaca="
        nachalo_mesyaca_prostoe[dni_nedeli_nachala_krugoleta[LETO_V_KRUGE_ZHIZNI - 1]][8]
      "
      :KolichestvoDney="kolichestvo_dney_v_mesyace[8]"
      :DenNachalaMesyacaGrig="leto_grig[LETO_V_KRUGE_LET][8] + '.' + (LETO - 5508)"
    />
  </div>
</template>

<script>
import nazvaniyeLeta from "../js/NazvaniyaLet.js";
import opisaniyeLeta from "../js/OpisaniyaLet.js";
// import grig_den_nachala_leta from "../js/DateTranslate.js"
// import tekuscheeLeto from "../js/DateTranslate.js"
import Ramhat from "./Ramhat.vue";
import Ailet from "./Ailet.vue";
import Beilet from "./Beilet.vue";
import Geilet from "./Geilet.vue";
import Dailet from "./Dailet.vue";
import Elet from "./Elet.vue";
import Veilet from "./Veilet.vue";
import Heilet from "./Heilet.vue";
import Tailet from "./Tailet.vue";

export default {
  name: "Calendar",
  components: {
    Ramhat,
    Ailet,
    Beilet,
    Geilet,
    Dailet,
    Elet,
    Veilet,
    Heilet,
    Tailet,
  },
  created: function () {
    this.tekuschee_leto();
  },
  methods: {
    nazvaniye_leta: function (leto) {
      return nazvaniyeLeta(leto);
    },
    opisaniye_leta: function (leto) {
      return opisaniyeLeta(leto);
    },
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
          current_grig_date.getDate() < this.grig_den_nachala_leta[tmp_leto_v_kruge_let]
        ) {
          this.LETO = 5508 + current_grig_date.getFullYear();
        }

        if (
          current_grig_date.getDate() > this.grig_den_nachala_leta[tmp_leto_v_kruge_let]
        ) {
          this.LETO = 5509 + current_grig_date.getFullYear();
        }

        if (
          current_grig_date.getDate() == this.grig_den_nachala_leta[tmp_leto_v_kruge_let]
        ) {
          if (current_grig_date.getHours() < 18) {
            this.LETO = 5508 + current_grig_date.getFullYear();
          } else {
            this.LETO = 5509 + current_grig_date.getFullYear();
          }
        }
      }
      this.TEKUSCHEE_LETO = this.LETO;
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
        this.kolichestvo_dney_v_mesyace[0] = 41;
        this.kolichestvo_dney_v_mesyace[1] = 41;
        this.kolichestvo_dney_v_mesyace[2] = 41;
        this.kolichestvo_dney_v_mesyace[3] = 41;
        this.kolichestvo_dney_v_mesyace[4] = 41;
        this.kolichestvo_dney_v_mesyace[5] = 41;
        this.kolichestvo_dney_v_mesyace[6] = 41;
        this.kolichestvo_dney_v_mesyace[7] = 41;
        this.kolichestvo_dney_v_mesyace[8] = 41;
      } else {
        this.SVYASCHENNOE_LETO = 0;
        this.kolichestvo_dney_v_mesyace[0] = 41;
        this.kolichestvo_dney_v_mesyace[1] = 40;
        this.kolichestvo_dney_v_mesyace[2] = 41;
        this.kolichestvo_dney_v_mesyace[3] = 40;
        this.kolichestvo_dney_v_mesyace[4] = 41;
        this.kolichestvo_dney_v_mesyace[5] = 40;
        this.kolichestvo_dney_v_mesyace[6] = 41;
        this.kolichestvo_dney_v_mesyace[7] = 40;
        this.kolichestvo_dney_v_mesyace[8] = 41;
      }
    },
  },
  data() {
    return {
      LETO: 7521,
      TEKUSCHEE_LETO: 7521,
      SVYASCHENNOE_LETO: 0,
      LETO_V_KRUGE_ZHIZNI: 0,
      LETO_V_KRUGE_LET: 0,
      grig_den_nachala_leta: [
        23,
        23,
        23,
        23,
        22,
        22,
        22,
        22,
        21,
        21,
        21,
        21,
        20,
        20,
        20,
        20,
      ],
      kolichestvo_dney_v_mesyace: [41, 40, 41, 40, 41, 40, 41, 40, 41],
      dni_nedeli_nachala_krugoleta: [
        1,
        6,
        2,
        7,
        3,
        8,
        4,
        9,
        5,
        1,
        6,
        2,
        7,
        3,
        8,
        4,
        4,
        9,
        5,
        1,
        6,
        2,
        7,
        3,
        8,
        4,
        9,
        5,
        1,
        6,
        2,
        7,
        7,
        3,
        8,
        4,
        9,
        5,
        1,
        6,
        2,
        7,
        3,
        8,
        4,
        9,
        5,
        1,
        1,
        6,
        2,
        7,
        3,
        8,
        4,
        9,
        5,
        1,
        6,
        2,
        7,
        3,
        8,
        4,
        4,
        9,
        5,
        1,
        6,
        2,
        7,
        3,
        8,
        4,
        9,
        5,
        1,
        6,
        2,
        7,
        7,
        3,
        8,
        4,
        9,
        5,
        1,
        6,
        2,
        7,
        3,
        8,
        4,
        9,
        5,
        1,
        1,
        6,
        2,
        7,
        3,
        8,
        4,
        9,
        5,
        1,
        6,
        2,
        7,
        3,
        8,
        4,
        4,
        9,
        5,
        1,
        6,
        2,
        7,
        3,
        8,
        4,
        9,
        5,
        1,
        6,
        2,
        7,
        7,
        3,
        8,
        4,
        9,
        5,
        1,
        6,
        2,
        7,
        3,
        8,
        4,
        9,
        5,
        1,
      ],
      nachalo_mesyaca_prostoe: {
        1: [1, 6, 1, 6, 1, 6, 1, 6, 1],
        2: [2, 7, 2, 7, 2, 7, 2, 7, 2],
        3: [3, 8, 3, 8, 3, 8, 3, 8, 3],
        4: [4, 9, 4, 9, 4, 9, 4, 9, 4],
        5: [5, 1, 5, 1, 5, 1, 5, 1, 5],
        6: [6, 2, 6, 2, 6, 2, 6, 2, 6],
        7: [7, 3, 7, 3, 7, 3, 7, 3, 7],
        8: [8, 4, 8, 4, 8, 4, 8, 4, 8],
        9: [9, 5, 9, 5, 9, 5, 9, 5, 9],
      },
      nachalo_mesyaca_sv: {
        1: [1, 6, 2, 7, 3, 8, 4, 9, 5],
        2: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        3: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        4: [4, 9, 5, 1, 6, 2, 7, 3, 8],
        5: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        6: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        7: [7, 3, 8, 4, 9, 5, 1, 6, 2],
        8: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        9: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      leto_grig: {
        1: [
          "23.09",
          "03.11",
          "13.12",
          "23.01",
          "04.03",
          "14.04",
          "24.05",
          "04.07",
          "13.08",
        ],
        2: [
          "23.09",
          "03.11",
          "13.12",
          "23.01",
          "04.03",
          "14.04",
          "24.05",
          "04.07",
          "13.08",
        ],
        3: [
          "23.09",
          "03.11",
          "13.12",
          "23.01",
          "04.03",
          "14.04",
          "24.05",
          "04.07",
          "13.08",
        ],
        4: [
          "23.09",
          "03.11",
          "13.12",
          "23.01",
          "03.03",
          "13.04",
          "23.05",
          "03.07",
          "12.08",
        ],
        5: [
          "22.09",
          "02.11",
          "12.12",
          "22.01",
          "03.03",
          "13.04",
          "23.05",
          "03.07",
          "12.08",
        ],
        6: [
          "22.09",
          "02.11",
          "12.12",
          "22.01",
          "03.03",
          "13.04",
          "23.05",
          "03.07",
          "12.08",
        ],
        7: [
          "22.09",
          "02.11",
          "12.12",
          "22.01",
          "03.03",
          "13.04",
          "23.05",
          "03.07",
          "12.08",
        ],
        8: [
          "22.09",
          "02.11",
          "12.12",
          "22.01",
          "02.03",
          "12.04",
          "22.05",
          "02.07",
          "11.08",
        ],
        9: [
          "21.09",
          "01.11",
          "11.12",
          "21.01",
          "02.03",
          "12.04",
          "22.05",
          "02.07",
          "11.08",
        ],
        10: [
          "21.09",
          "01.11",
          "11.12",
          "21.01",
          "02.03",
          "12.04",
          "22.05",
          "02.07",
          "11.08",
        ],
        11: [
          "21.09",
          "01.11",
          "11.12",
          "21.01",
          "02.03",
          "12.04",
          "22.05",
          "02.07",
          "11.08",
        ],
        12: [
          "21.09",
          "01.11",
          "11.12",
          "21.01",
          "01.03",
          "11.04",
          "21.05",
          "01.07",
          "10.08",
        ],
        13: [
          "20.09",
          "31.10",
          "10.12",
          "20.01",
          "01.03",
          "11.04",
          "21.05",
          "01.07",
          "10.08",
        ],
        14: [
          "20.09",
          "31.10",
          "10.12",
          "20.01",
          "01.03",
          "11.04",
          "21.05",
          "01.07",
          "10.08",
        ],
        15: [
          "20.09",
          "31.10",
          "10.12",
          "20.01",
          "01.03",
          "11.04",
          "21.05",
          "01.07",
          "10.08",
        ],
        16: [
          "20.09",
          "31.10",
          "11.12",
          "21.01",
          "02.03",
          "12.04",
          "23.05",
          "03.07",
          "13.08",
        ],
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.arrow {
  cursor: pointer;
}

.arrow:hover {
  text-decoration: underline;
}
</style>
