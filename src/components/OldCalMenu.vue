<template>
  <div id="logo" v-if="showMainMenu">
    <img alt="Old calendar logo" src="../assets/simbol-valkirija.png" >
  </div>
  <div class="menu" v-if="showMainMenu">
    <h1>{{ msg }}</h1>
    <h3>Меню</h3>
    <ul>
      <li><a href="#" @click="toggleCalendar">Календарь</a></li>
      <li><a href="#" @click="toggleTranslator">Перевод дат</a></li>
    </ul>
  </div>
  <div class="menu" v-if="showSmallMenu">
    <ul>
      <li><a href="#" @click="toggleMenu">Вернуться к меню</a></li>
    </ul>
  </div>
  <Calendar v-if="showCalendar" />
  <Translator v-if="showTranslator" />

</template>

<script>
import Calendar from './Calendar.vue'
import Translator from './Translator.vue'

export default {
  name: 'OldCalMenu',
  components: {
    Calendar,
    Translator
  },
  props: {
    msg: String
  },
  data() {
    return{
      showCalendar: false,
      showTranslator: false,
      showMainMenu: true,
      showSmallMenu:false
    }
  },
  methods: {
    toggleCalendar() {
      this.showCalendar = true;
      this.showTranslator = false;
      this.showMainMenu = false;
      this.showSmallMenu = true;
    },
    toggleTranslator() {
      this.showCalendar = false;
      this.showTranslator = true;
      this.showMainMenu = false;
      this.showSmallMenu = true;
    },
    toggleMenu() {
      this.showCalendar = false;
      this.showTranslator = false;
      this.showMainMenu = true;
      this.showSmallMenu = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#logo {
    padding-top: 60px;
}
</style>
