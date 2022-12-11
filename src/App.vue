<script setup lang="ts">

  import TablaEntrenadores from './components/TablaEntrenadores.vue';
  import FormularioEntrenador from './components/FormularioEntrenador.vue'
</script>

<template>
  <div class="conta">
    <TablaEntrenadores/>
    <FormularioEntrenador/>
  </div>
</template>

<style scoped>
  body{
    background-color: black;
  }
  .conta{
    display: flex;
    flex-direction: column;
  }
</style>

