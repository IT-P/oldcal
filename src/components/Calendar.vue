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
          {{ NAZVANIYA_LET[LETO_V_KRUGE_ZHIZNI - 1] }} <br />
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
    <div class="opisanie_leta" v-if="opisanie_leta">
      <div style="text-align: center" class="title red">Описание лета:</div>
      <div style="text-align: center">
        {{ OPISANIYA_LET[LETO_V_KRUGE_ZHIZNI - 1] }}
      </div>
    </div>
    <br />
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
import { mapState } from "vuex";
import store from "../store";
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
  computed: {
    ...mapState({
      NAZVANIYA_LET: (state) => state.NazvaniyaLet.NAZVANIYA_LET,
      OPISANIYA_LET: (state) => state.OpisaniyaLet.OPISANIYA_LET,
      grig_den_nachala_leta: (state) => state.GrigDates.grig_den_nachala_leta,
      leto_grig: (state) => state.GrigDates.leto_grig,
      dni_nedeli_nachala_krugoleta: (state) =>
        state.SlavDates.dni_nedeli_nachala_krugoleta,
      nachalo_mesyaca_prostoe: (state) => state.SlavDates.nachalo_mesyaca_prostoe,
      nachalo_mesyaca_sv: (state) => state.SlavDates.nachalo_mesyaca_sv,
    }),
  },
  methods: {
    tekuschee_leto: function () {
      const current_grig_date = new Date();
      if (current_grig_date.getMonth() < 8) {
        this.LETO = 5508 + current_grig_date.getFullYear();
      }
      if (current_grig_date.getMonth() > 8) {
        this.LETO = 5509 + current_grig_date.getFullYear();
      }
      if (current_grig_date.getMonth() == 8) {
        var tmp_leto = 5509 + current_grig_date.getFullYear();
        var tmp_leto_v_kruge_zhizni = (tmp_leto - 32) % 144;
        if (tmp_leto_v_kruge_zhizni === 0) {
          tmp_leto_v_kruge_zhizni = 144;
        }
        var tmp_leto_v_kruge_let = tmp_leto_v_kruge_zhizni % 16;

        if (tmp_leto_v_kruge_let === 0) {
          tmp_leto_v_kruge_let = 16;
        }
        if (
          current_grig_date.getDate() <
          this.grig_den_nachala_leta[tmp_leto_v_kruge_let - 1]
        ) {
          this.LETO = 5508 + current_grig_date.getFullYear();
        }

        if (
          current_grig_date.getDate() >
          this.grig_den_nachala_leta[tmp_leto_v_kruge_let - 1]
        ) {
          this.LETO = 5509 + current_grig_date.getFullYear();
        }

        if (
          current_grig_date.getDate() ==
          this.grig_den_nachala_leta[tmp_leto_v_kruge_let - 1]
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
      if (
        store.state.OpisaniyaLet.OPISANIYA_LET[this.LETO_V_KRUGE_ZHIZNI - 1].length == 0
      ) {
        this.opisanie_leta = false;
      } else {
        this.opisanie_leta = true;
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
      kolichestvo_dney_v_mesyace: [41, 40, 41, 40, 41, 40, 41, 40, 41],
      opisanie_leta: true,
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
