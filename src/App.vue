<template>
  <img alt="Old calendar logo" src="./assets/simbol-valkirija.png">
  <OldCalMenu msg="Славянский календарь"/>
</template>

<script>
import OldCalMenu from './components/OldCalMenu.vue'

export default {
  name: 'App',
  components: {
    OldCalMenu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
