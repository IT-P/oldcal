<template>
  <div class="menu">
    <router-link class="menu_link" to="/">Вернуться к меню</router-link>
  </div>
  <div class="translator">
    <h3>Перевод дат</h3>
    <span>
      <button @click="day_minus()">&nbsp;-&nbsp;</button>
      &nbsp;
      <input type="date" class="grig_date" v-model="grig_date_string" min="1918-01-01" />
      &nbsp;
      <button @click="day_plus()">&nbsp;+&nbsp;</button>
    </span>
  </div>
  <br />
  <!-- <div>
    {{ date }}
  </div> -->
  <div align="center" class="translate">
    <table>
      <tr>
        <td align="right">Лето</td>
        <td>{{ LETO }}</td>
        <td>{{ NAZVANIYE_LETA }}</td>
      </tr>
      <tr>
        <td align="right">Месяц</td>
        <td>{{ MESYAC }}</td>
        <td>{{ MESYAC_OPISANIE }}</td>
      </tr>
      <tr>
        <td align="right">День</td>
        <td>{{ DEN }}</td>
        <td></td>
      </tr>
      <tr>
        <td align="right">Лето в круге жизни</td>
        <td colspan="2">{{ LETO_V_KRUGE_ZHIZNI }}</td>
      </tr>
      <tr>
        <td align="right">Лето в круге лет</td>
        <td colspan="2">{{ LETO_V_KRUGE_LET }}</td>
      </tr>
    </table>
  </div>
  <!-- <div>{{ MESYAC_NACHALO }} {{ date }} {{ DEN }}</div> -->
</template>

<script>
import store from "../store";
export default {
  name: "Translator",
  data() {
    return {
      date: new Date(),
      min_date: new Date("1918-01-01"),
      max_date: new Date("2156-09-22"),
      grig_date_string: "",
      LETO: "",
      NAZVANIYE_LETA: "",
      LETO_V_KRUGE_ZHIZNI: 0,
      LETO_V_KRUGE_LET: 0,
      MESYAC: "",
      MESYAC_OPISANIE: "",
      MESYAC_NACHALO: "",
      DEN: "",
    };
  },
  created: function () {
    this.dateToString();
  },
  watch: {
    grig_date_string: {
      handler: function () {
        this.translate();
      },
    },
  },
  methods: {
    dateToString: function () {
      this.grig_date_string =
        this.date.getFullYear() +
        "-" +
        this.pad(this.date.getMonth() + 1) +
        "-" +
        this.pad(this.date.getDate());
    },
    pad: function (number) {
      if (number < 10) {
        return "0" + number;
      }
      return number;
    },
    day_minus: function () {
      this.date = new Date(this.grig_date_string);
      this.date.setDate(this.date.getDate() - 1);
      this.dateToString();
    },
    day_plus: function () {
      this.date = new Date(this.grig_date_string);
      this.date.setDate(this.date.getDate() + 1);
      this.dateToString();
    },
    translate: function () {
      this.date = new Date(this.grig_date_string);
      var current_grig_date = this.date;
      current_grig_date.setDate(current_grig_date.getDate() - 1);

      if (current_grig_date < this.min_date) {
        current_grig_date = this.min_date;
        this.date = this.min_date;
        this.dateToString();
      }

      if (current_grig_date > this.max_date) {
        current_grig_date = this.max_date;
        this.date = this.max_date;
        this.dateToString();
      }
      // this.Den = current_grig_date;
      if (current_grig_date.getMonth() < 8) {
        this.LETO = 5508 + current_grig_date.getFullYear();
      } else if (current_grig_date.getMonth() > 8) {
        this.LETO = 5509 + current_grig_date.getFullYear();
      } else if (current_grig_date.getMonth() == 8) {
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
          store.state.GrigDates.grig_den_nachala_leta[tmp_leto_v_kruge_let - 1] - 1
        ) {
          this.LETO = 5508 + current_grig_date.getFullYear();
        } else if (
          current_grig_date.getDate() >=
          store.state.GrigDates.grig_den_nachala_leta[tmp_leto_v_kruge_let - 1] - 1
        ) {
          this.LETO = 5509 + current_grig_date.getFullYear();
        }
      }

      this.LETO_V_KRUGE_ZHIZNI = (this.LETO - 32) % 144;
      if (this.LETO_V_KRUGE_ZHIZNI === 0) {
        this.LETO_V_KRUGE_ZHIZNI = 144;
      }
      this.LETO_V_KRUGE_LET = this.LETO_V_KRUGE_ZHIZNI % 16;
      if (this.LETO_V_KRUGE_LET === 0) {
        this.LETO_V_KRUGE_LET = 16;
      }
      this.NAZVANIYE_LETA =
        store.state.NazvaniyaLet.NAZVANIYA_LET[this.LETO_V_KRUGE_ZHIZNI - 1];

      this.getMesyac();
    },
    getMesyac: function () {
      var nach_mes = Array();

      for (let i = 0; i < 9; i++) {
        var tmp_str_array = store.state.GrigDates.leto_grig[this.LETO_V_KRUGE_LET][
          i
        ].split(".");
        nach_mes[i] = new Date(
          this.date.getFullYear() + "-" + tmp_str_array[1] + "-" + tmp_str_array[0]
        );
        nach_mes[i].setDate(nach_mes[i].getDate() - 1);
      }

      if (this.date >= nach_mes[0] && this.date < nach_mes[1]) {
        this.MESYAC = store.state.Ramhat.MESYAC;
        this.MESYAC_OPISANIE = store.state.Ramhat.MESYAC_OPISANIE;
        this.DEN = (this.date - nach_mes[0]) / (1000 * 60 * 60 * 24) + 1;
      } else if (this.date >= nach_mes[1] && this.date < nach_mes[2]) {
        this.MESYAC = store.state.Ailet.MESYAC;
        this.MESYAC_OPISANIE = store.state.Ailet.MESYAC_OPISANIE;
        this.DEN = (this.date - nach_mes[1]) / (1000 * 60 * 60 * 24) + 1;
      } else if (this.date >= nach_mes[2]) {
        this.MESYAC = store.state.Beilet.MESYAC;
        this.MESYAC_OPISANIE = store.state.Beilet.MESYAC_OPISANIE;
        this.DEN = (this.date - nach_mes[2]) / (1000 * 60 * 60 * 24) + 1;
      } else if (this.date < nach_mes[3]) {
        this.MESYAC = store.state.Beilet.MESYAC;
        this.MESYAC_OPISANIE = store.state.Beilet.MESYAC_OPISANIE;
        this.DEN = 42 - (nach_mes[3] - this.date) / (1000 * 60 * 60 * 24);
      } else if (this.date >= nach_mes[3] && this.date < nach_mes[4]) {
        this.MESYAC = store.state.Geilet.MESYAC;
        this.MESYAC_OPISANIE = store.state.Geilet.MESYAC_OPISANIE;
        this.DEN = (this.date - nach_mes[3]) / (1000 * 60 * 60 * 24) + 1;
      } else if (this.date >= nach_mes[4] && this.date < nach_mes[5]) {
        this.MESYAC = store.state.Dailet.MESYAC;
        this.MESYAC_OPISANIE = store.state.Dailet.MESYAC_OPISANIE;
        this.DEN = (this.date - nach_mes[4]) / (1000 * 60 * 60 * 24) + 1;
        // this.MESYAC_NACHALO = nach_mes[4];
      } else if (this.date >= nach_mes[5] && this.date < nach_mes[6]) {
        this.MESYAC = store.state.Elet.MESYAC;
        this.MESYAC_OPISANIE = store.state.Elet.MESYAC_OPISANIE;
        this.DEN = (this.date - nach_mes[5]) / (1000 * 60 * 60 * 24) + 1;
      } else if (this.date >= nach_mes[6] && this.date < nach_mes[7]) {
        this.MESYAC = store.state.Veilet.MESYAC;
        this.MESYAC_OPISANIE = store.state.Veilet.MESYAC_OPISANIE;
        this.DEN = (this.date - nach_mes[6]) / (1000 * 60 * 60 * 24) + 1;
      } else if (this.date >= nach_mes[7] && this.date < nach_mes[8]) {
        this.MESYAC = store.state.Heilet.MESYAC;
        this.MESYAC_OPISANIE = store.state.Heilet.MESYAC_OPISANIE;
        this.DEN = (this.date - nach_mes[7]) / (1000 * 60 * 60 * 24) + 1;
      } else if (this.date >= nach_mes[8]) {
        this.MESYAC = store.state.Tailet.MESYAC;
        this.MESYAC_OPISANIE = store.state.Tailet.MESYAC_OPISANIE;
        this.DEN = (this.date - nach_mes[8]) / (1000 * 60 * 60 * 24) + 1;
      }
      // var current_grig_date = new Date(this.grig_date_string);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grig_date {
  border: 1px solid rgb(3, 77, 124);
  border-radius: 3px;
}
</style>
