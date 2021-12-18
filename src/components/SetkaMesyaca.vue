<template>
  <!-- <div> {{ DenNachalaMesyaca }} </div> -->
  <table class="mesyac">
    <tr>
      <td class="mesyac nazvaniya_dney">Понедѣльникъ</td>
      <td :class="td_style[0]">{{ td_data[0] }}</td>
      <td :class="td_style_grig[0]">
        {{ td_data_grig_top[0] }}
        <hr :class="hr_style_grig[0]" />
        {{ td_data_grig_bottom[0] }}
      </td>
      <td :class="td_style[9]">{{ td_data[9] }}</td>
      <td :class="td_style_grig[9]">
        {{ td_data_grig_top[9] }}
        <hr :class="hr_style_grig[9]" />
        {{ td_data_grig_bottom[9] }}
      </td>
      <td :class="td_style[18]">{{ td_data[18] }}</td>
      <td :class="td_style_grig[18]">
        {{ td_data_grig_top[18] }}
        <hr :class="hr_style_grig[18]" />
        {{ td_data_grig_bottom[18] }}
      </td>
      <td :class="td_style[27]">{{ td_data[27] }}</td>
      <td :class="td_style_grig[27]">
        {{ td_data_grig_top[27] }}
        <hr :class="hr_style_grig[27]" />
        {{ td_data_grig_bottom[27] }}
      </td>
      <td :class="td_style[36]">{{ td_data[36] }}</td>
      <td :class="td_style_grig[36]">
        {{ td_data_grig_top[36] }}
        <hr :class="hr_style_grig[36]" />
        {{ td_data_grig_bottom[36] }}
      </td>
      <td :class="td_style[45]">{{ td_data[45] }}</td>
      <td :class="td_style_grig[45]">
        {{ td_data_grig_top[45] }}
        <hr :class="hr_style_grig[45]" />
        {{ td_data_grig_bottom[45] }}
      </td>
    </tr>
    <tr>
      <td class="mesyac nazvaniya_dney">Вторникъ</td>
      <td :class="td_style[1]">{{ td_data[1] }}</td>
      <td :class="td_style_grig[1]">
        {{ td_data_grig_top[1] }}
        <hr :class="hr_style_grig[1]" />
        {{ td_data_grig_bottom[1] }}
      </td>
      <td :class="td_style[10]">{{ td_data[10] }}</td>
      <td :class="td_style_grig[10]">
        {{ td_data_grig_top[10] }}
        <hr :class="hr_style_grig[10]" />
        {{ td_data_grig_bottom[10] }}
      </td>
      <td :class="td_style[19]">{{ td_data[19] }}</td>
      <td :class="td_style_grig[19]">
        {{ td_data_grig_top[19] }}
        <hr :class="hr_style_grig[19]" />
        {{ td_data_grig_bottom[19] }}
      </td>
      <td :class="td_style[28]">{{ td_data[28] }}</td>
      <td :class="td_style_grig[28]">
        {{ td_data_grig_top[28] }}
        <hr :class="hr_style_grig[28]" />
        {{ td_data_grig_bottom[28] }}
      </td>
      <td :class="td_style[37]">{{ td_data[37] }}</td>
      <td :class="td_style_grig[37]">
        {{ td_data_grig_top[37] }}
        <hr :class="hr_style_grig[37]" />
        {{ td_data_grig_bottom[37] }}
      </td>
      <td :class="td_style[46]">{{ td_data[46] }}</td>
      <td :class="td_style_grig[46]">
        {{ td_data_grig_top[46] }}
        <hr :class="hr_style_grig[46]" />
        {{ td_data_grig_bottom[46] }}
      </td>
    </tr>
    <tr>
      <td class="mesyac nazvaniya_dney">Тритейникъ</td>
      <td :class="td_style[2]">{{ td_data[2] }}</td>
      <td :class="td_style_grig[2]">
        {{ td_data_grig_top[2] }}
        <hr :class="hr_style_grig[2]" />
        {{ td_data_grig_bottom[2] }}
      </td>
      <td :class="td_style[11]">{{ td_data[11] }}</td>
      <td :class="td_style_grig[11]">
        {{ td_data_grig_top[11] }}
        <hr :class="hr_style_grig[11]" />
        {{ td_data_grig_bottom[11] }}
      </td>
      <td :class="td_style[20]">{{ td_data[20] }}</td>
      <td :class="td_style_grig[20]">
        {{ td_data_grig_top[20] }}
        <hr :class="hr_style_grig[20]" />
        {{ td_data_grig_bottom[20] }}
      </td>
      <td :class="td_style[29]">{{ td_data[29] }}</td>
      <td :class="td_style_grig[29]">
        {{ td_data_grig_top[29] }}
        <hr :class="hr_style_grig[29]" />
        {{ td_data_grig_bottom[29] }}
      </td>
      <td :class="td_style[38]">{{ td_data[38] }}</td>
      <td :class="td_style_grig[38]">
        {{ td_data_grig_top[38] }}
        <hr :class="hr_style_grig[38]" />
        {{ td_data_grig_bottom[38] }}
      </td>
      <td :class="td_style[47]">{{ td_data[47] }}</td>
      <td :class="td_style_grig[47]">
        {{ td_data_grig_top[47] }}
        <hr :class="hr_style_grig[47]" />
        {{ td_data_grig_bottom[47] }}
      </td>
    </tr>
    <tr>
      <td class="mesyac nazvaniya_dney">Четверикъ</td>
      <td :class="td_style[3]">{{ td_data[3] }}</td>
      <td :class="td_style_grig[3]">
        {{ td_data_grig_top[3] }}
        <hr :class="hr_style_grig[3]" />
        {{ td_data_grig_bottom[3] }}
      </td>
      <td :class="td_style[12]">{{ td_data[12] }}</td>
      <td :class="td_style_grig[12]">
        {{ td_data_grig_top[12] }}
        <hr :class="hr_style_grig[12]" />
        {{ td_data_grig_bottom[12] }}
      </td>
      <td :class="td_style[21]">{{ td_data[21] }}</td>
      <td :class="td_style_grig[21]">
        {{ td_data_grig_top[21] }}
        <hr :class="hr_style_grig[21]" />
        {{ td_data_grig_bottom[21] }}
      </td>
      <td :class="td_style[30]">{{ td_data[30] }}</td>
      <td :class="td_style_grig[30]">
        {{ td_data_grig_top[30] }}
        <hr :class="hr_style_grig[30]" />
        {{ td_data_grig_bottom[30] }}
      </td>
      <td :class="td_style[39]">{{ td_data[39] }}</td>
      <td :class="td_style_grig[39]">
        {{ td_data_grig_top[39] }}
        <hr :class="hr_style_grig[39]" />
        {{ td_data_grig_bottom[39] }}
      </td>
      <td :class="td_style[48]">{{ td_data[48] }}</td>
      <td :class="td_style_grig[48]">
        {{ td_data_grig_top[48] }}
        <hr :class="hr_style_grig[48]" />
        {{ td_data_grig_bottom[48] }}
      </td>
    </tr>
    <tr>
      <td class="mesyac nazvaniya_dney">Пятница</td>
      <td :class="td_style[4]">{{ td_data[4] }}</td>
      <td :class="td_style_grig[4]">
        {{ td_data_grig_top[4] }}
        <hr :class="hr_style_grig[4]" />
        {{ td_data_grig_bottom[4] }}
      </td>
      <td :class="td_style[13]">{{ td_data[13] }}</td>
      <td :class="td_style_grig[13]">
        {{ td_data_grig_top[13] }}
        <hr :class="hr_style_grig[13]" />
        {{ td_data_grig_bottom[13] }}
      </td>
      <td :class="td_style[22]">{{ td_data[22] }}</td>
      <td :class="td_style_grig[22]">
        {{ td_data_grig_top[22] }}
        <hr :class="hr_style_grig[22]" />
        {{ td_data_grig_bottom[22] }}
      </td>
      <td :class="td_style[31]">{{ td_data[31] }}</td>
      <td :class="td_style_grig[31]">
        {{ td_data_grig_top[31] }}
        <hr :class="hr_style_grig[31]" />
        {{ td_data_grig_bottom[31] }}
      </td>
      <td :class="td_style[40]">{{ td_data[40] }}</td>
      <td :class="td_style_grig[40]">
        {{ td_data_grig_top[40] }}
        <hr :class="hr_style_grig[40]" />
        {{ td_data_grig_bottom[40] }}
      </td>
      <td :class="td_style[49]">{{ td_data[49] }}</td>
      <td :class="td_style_grig[49]">
        {{ td_data_grig_top[49] }}
        <hr :class="hr_style_grig[49]" />
        {{ td_data_grig_bottom[49] }}
      </td>
    </tr>
    <tr>
      <td class="mesyac nazvaniya_dney">Шестица</td>
      <td :class="td_style[5]">{{ td_data[5] }}</td>
      <td :class="td_style_grig[5]">
        {{ td_data_grig_top[5] }}
        <hr :class="hr_style_grig[5]" />
        {{ td_data_grig_bottom[5] }}
      </td>
      <td :class="td_style[14]">{{ td_data[14] }}</td>
      <td :class="td_style_grig[14]">
        {{ td_data_grig_top[14] }}
        <hr :class="hr_style_grig[14]" />
        {{ td_data_grig_bottom[14] }}
      </td>
      <td :class="td_style[23]">{{ td_data[23] }}</td>
      <td :class="td_style_grig[23]">
        {{ td_data_grig_top[23] }}
        <hr :class="hr_style_grig[23]" />
        {{ td_data_grig_bottom[23] }}
      </td>
      <td :class="td_style[32]">{{ td_data[32] }}</td>
      <td :class="td_style_grig[32]">
        {{ td_data_grig_top[32] }}
        <hr :class="hr_style_grig[32]" />
        {{ td_data_grig_bottom[32] }}
      </td>
      <td :class="td_style[41]">{{ td_data[41] }}</td>
      <td :class="td_style_grig[41]">
        {{ td_data_grig_top[41] }}
        <hr :class="hr_style_grig[41]" />
        {{ td_data_grig_bottom[41] }}
      </td>
      <td :class="td_style[50]">{{ td_data[50] }}</td>
      <td :class="td_style_grig[50]">
        {{ td_data_grig_top[50] }}
        <hr :class="hr_style_grig[50]" />
        {{ td_data_grig_bottom[50] }}
      </td>
    </tr>
    <tr>
      <td class="mesyac nazvaniya_dney sedmica">Седьмица</td>
      <td :class="td_style[6]">{{ td_data[6] }}</td>
      <td :class="td_style_grig[6]">
        {{ td_data_grig_top[6] }}
        <hr :class="hr_style_grig[6]" />
        {{ td_data_grig_bottom[6] }}
      </td>
      <td :class="td_style[15]">{{ td_data[15] }}</td>
      <td :class="td_style_grig[15]">
        {{ td_data_grig_top[15] }}
        <hr :class="hr_style_grig[15]" />
        {{ td_data_grig_bottom[15] }}
      </td>
      <td :class="td_style[24]">{{ td_data[24] }}</td>
      <td :class="td_style_grig[24]">
        {{ td_data_grig_top[24] }}
        <hr :class="hr_style_grig[24]" />
        {{ td_data_grig_bottom[24] }}
      </td>
      <td :class="td_style[33]">{{ td_data[33] }}</td>
      <td :class="td_style_grig[33]">
        {{ td_data_grig_top[33] }}
        <hr :class="hr_style_grig[33]" />
        {{ td_data_grig_bottom[33] }}
      </td>
      <td :class="td_style[42]">{{ td_data[42] }}</td>
      <td :class="td_style_grig[42]">
        {{ td_data_grig_top[42] }}
        <hr :class="hr_style_grig[42]" />
        {{ td_data_grig_bottom[42] }}
      </td>
      <td :class="td_style[51]">{{ td_data[51] }}</td>
      <td :class="td_style_grig[51]">
        {{ td_data_grig_top[51] }}
        <hr :class="hr_style_grig[51]" />
        {{ td_data_grig_bottom[51] }}
      </td>
    </tr>
    <tr>
      <td class="mesyac nazvaniya_dney">Осьмица</td>
      <td :class="td_style[7]">{{ td_data[7] }}</td>
      <td :class="td_style_grig[7]">
        {{ td_data_grig_top[7] }}
        <hr :class="hr_style_grig[7]" />
        {{ td_data_grig_bottom[7] }}
      </td>
      <td :class="td_style[16]">{{ td_data[16] }}</td>
      <td :class="td_style_grig[16]">
        {{ td_data_grig_top[16] }}
        <hr :class="hr_style_grig[16]" />
        {{ td_data_grig_bottom[16] }}
      </td>
      <td :class="td_style[25]">{{ td_data[25] }}</td>
      <td :class="td_style_grig[25]">
        {{ td_data_grig_top[25] }}
        <hr :class="hr_style_grig[25]" />
        {{ td_data_grig_bottom[25] }}
      </td>
      <td :class="td_style[34]">{{ td_data[34] }}</td>
      <td :class="td_style_grig[34]">
        {{ td_data_grig_top[34] }}
        <hr :class="hr_style_grig[34]" />
        {{ td_data_grig_bottom[34] }}
      </td>
      <td :class="td_style[43]">{{ td_data[43] }}</td>
      <td :class="td_style_grig[43]">
        {{ td_data_grig_top[43] }}
        <hr :class="hr_style_grig[43]" />
        {{ td_data_grig_bottom[43] }}
      </td>
      <td :class="td_style[52]">{{ td_data[52] }}</td>
      <td :class="td_style_grig[52]">
        {{ td_data_grig_top[52] }}
        <hr :class="hr_style_grig[52]" />
        {{ td_data_grig_bottom[52] }}
      </td>
    </tr>
    <tr>
      <td class="mesyac nazvaniya_dney red">Недѣля</td>
      <td :class="td_style[8]">{{ td_data[8] }}</td>
      <td :class="td_style_grig[8]">
        {{ td_data_grig_top[8] }}
        <hr :class="hr_style_grig[8]" />
        {{ td_data_grig_bottom[8] }}
      </td>
      <td :class="td_style[17]">{{ td_data[17] }}</td>
      <td :class="td_style_grig[17]">
        {{ td_data_grig_top[17] }}
        <hr :class="hr_style_grig[17]" />
        {{ td_data_grig_bottom[17] }}
      </td>
      <td :class="td_style[26]">{{ td_data[26] }}</td>
      <td :class="td_style_grig[26]">
        {{ td_data_grig_top[26] }}
        <hr :class="hr_style_grig[26]" />
        {{ td_data_grig_bottom[26] }}
      </td>
      <td :class="td_style[35]">{{ td_data[35] }}</td>
      <td :class="td_style_grig[35]">
        {{ td_data_grig_top[35] }}
        <hr :class="hr_style_grig[35]" />
        {{ td_data_grig_bottom[35] }}
      </td>
      <td :class="td_style[44]">{{ td_data[44] }}</td>
      <td :class="td_style_grig[44]">
        {{ td_data_grig_top[44] }}
        <hr :class="hr_style_grig[44]" />
        {{ td_data_grig_bottom[44] }}
      </td>
      <td :class="td_style[53]">{{ td_data[53] }}</td>
      <td :class="td_style_grig[53]">
        {{ td_data_grig_top[53] }}
        <hr :class="hr_style_grig[53]" />
        {{ td_data_grig_bottom[53] }}
      </td>
    </tr>
  </table>
</template>
<script>
export default {
  props: {
    Leto: Number,
    DenNachalaMesyaca: Number,
    DenNachalaMesyacaGrig: String,
    KolichestvoDney: Number,
    Prazdniki: Array(String),
    DniPredkov: Array,
    RoditelskieDni: Array,
    Post: Array,
  },
  name: "SetkaMesyaca",
  methods: {
    init: function () {
      var dateParts = this.DenNachalaMesyacaGrig.split(".");
      var DateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);

      for (let i = 0; i < this.KolichestvoDney; i++) {
        let index = this.DenNachalaMesyaca - 1 + i;
        this.td_data[index] = i + 1;
        if (this.Prazdniki[i].length > 0) {
          this.td_style[index] += " red";
        }
        if (this.DniPredkov[i]) {
          this.td_style[index] += " dni_predkov";
        }
        if (this.RoditelskieDni[i]) {
          this.td_style[index] += " roditelskie_dni";
        }
        if (this.Post[i]) {
          this.td_style[index] += " post";
        }
        //Grig
        var curDate = new Date(DateObject);
        var nextDate = new Date(DateObject);
        nextDate.setDate(nextDate.getDate() + 1);

        this.hr_style_grig[index] = "show";

        if (i == 0 || nextDate.getDate() == 1) {
          this.td_style_grig[index] = "mesyac grig_mini";
          this.td_data_grig_top[index] =
            this.grig_month[nextDate.getMonth()] +
            "\n" +
            nextDate.getFullYear() +
            "\n" +
            curDate.getDate() +
            " " +
            this.grig_week[curDate.getDay()];
          this.td_data_grig_bottom[index] =
            nextDate.getDate() + " " + this.grig_week[nextDate.getDay()];
        } else {
          this.td_data_grig_top[index] =
            curDate.getDate() + " " + this.grig_week[curDate.getDay()];
          this.td_data_grig_bottom[index] =
            nextDate.getDate() + " " + this.grig_week[nextDate.getDay()];
        }
        DateObject.setDate(DateObject.getDate() + 1);
      }
    },
    update: function () {
      this.td_data.fill("\xa0", 0, 54);
      this.td_data_grig_top.fill("\xa0", 0, 54);
      this.td_data_grig_bottom.fill("\xa0", 0, 54);
      this.td_style.fill("mesyac", 0, 54);
      this.td_style_grig.fill("mesyac grig", 0, 54);
      this.hr_style_grig.fill("hide", 0, 54);

      this.init();
    },
  },
  created: function () {
    this.init();
  },
  watch: {
    Leto: {
      handler: function () {
        this.update();
      },
    },
  },
  data() {
    return {
      td_data: Array(54).fill("\xa0", 0, 54),
      td_data_grig_top: Array(54).fill("\xa0", 0, 54),
      td_data_grig_bottom: Array(54).fill("\xa0", 0, 54),
      td_style: Array(54).fill("mesyac", 0, 54),
      td_style_grig: Array(54).fill("mesyac grig", 0, 54),
      hr_style_grig: Array(54).fill("hide", 0, 54),
      grig_month: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ],
      grig_week: ["Пн.", "Вт.", "Ср.", "Чт.", "Пт.", "Сб.", "Вс."],
    };
  },
};
</script>

<style scoped>
.hide {
  display: none;
}
.show {
  display: block;
}
</style>
