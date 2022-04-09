<template>
  <div class="menu">
    <router-link class="menu_link" to="/">Вернуться к меню</router-link>
  </div>
  <div class="translator">
    <h3>Перевод дат</h3>
    <input type="date" class="grig_date" v-model="grig_date_string" min="1918-01-01" />
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
      </tr>
      <tr>
        <td align="right">Месяц</td>
        <td>{{ Mesyac }}</td>
      </tr>
      <tr>
        <td align="right">День</td>
        <td>{{ Den }}</td>
      </tr>
      <tr>
        <td align="right">Лето в круге жизни</td>
        <td>{{ LETO_V_KRUGE_ZHIZNI }}</td>
      </tr>
      <tr>
        <td align="right">Лето в круге лет</td>
        <td>{{ LETO_V_KRUGE_LET }}</td>
      </tr>
    </table>
  </div>
  <!-- <div>{{ Den }} {{ Mesyac }} {{ LETO }}</div> -->
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
      LETO_V_KRUGE_ZHIZNI: 0,
      LETO_V_KRUGE_LET: 0,
      Mesyac: "",
      Den: "",
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
    translate: function () {
      var current_grig_date = new Date(this.grig_date_string);
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
          store.state.GrigDates.grig_den_nachala_leta[tmp_leto_v_kruge_let - 1]
        ) {
          this.LETO = 5508 + current_grig_date.getFullYear();
        }

        if (
          current_grig_date.getDate() >
          store.state.GrigDates.grig_den_nachala_leta[tmp_leto_v_kruge_let - 1]
        ) {
          this.LETO = 5509 + current_grig_date.getFullYear();
        }

        if (
          current_grig_date.getDate() ==
          store.state.GrigDates.grig_den_nachala_leta[tmp_leto_v_kruge_let - 1]
        ) {
          if (current_grig_date.getHours() < 18) {
            this.LETO = 5508 + current_grig_date.getFullYear();
          } else {
            this.LETO = 5509 + current_grig_date.getFullYear();
          }
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
