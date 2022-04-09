<template>
  <div class="menu">
    <h1>Славянский календарь</h1>
    <img alt="Old calendar logo" src="../assets/simbol-valkirija.png" />
    <h3>Меню</h3>
    <ul>
      <li><router-link class="menu_link" to="/calendar">Календарь</router-link></li>
      <li><router-link class="menu_link" to="/translator">Перевод дат</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "OldCalMenu",
};
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
#logo {
  padding-top: 60px;
}
</style>
