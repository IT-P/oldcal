<template>
  <div>
    <span class="title">Рамхатъ</span><br />
    <span class="subtitle">Месяц Божественнаго Начала</span>
  </div>
  <setka-mesyaca :DenNachalaMesyaca="DenNachalaMesyaca" :KolichestvoDney="41"></setka-mesyaca>
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
};
</script>
