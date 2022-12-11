<template>
  <div class="formulario">
    <h2>Formulario registro</h2>

    <input type="text" placeholder="codigo" v-model="codigo">
    <input type="text" placeholder="nombre" v-model="nombre">
    <input type="text" placeholder="email" v-model="email">
    <input type="text" placeholder="telefono" v-model="telefono">

    <button class="btn btn-success" @click="registrar">Registrar</button>
  </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue'
    import {useEntrenadoresStore} from '../stores/entrenadores'
    //import {Entrenador} from '../stores/entrenadores'
    const {addEntrenador} = useEntrenadoresStore()

    const codigo = ref()
    const nombre = ref();
    const email = ref();
    const telefono = ref();
    
    const registrar = ()=>{
        /*const entrenador:Entrenador = {
            codigo:parseInt(codigo.value),
            nombre:nombre.value,
            email:email.value,
            telefono:parseInt(telefono.value),
            estado:false
        };
        addEntrenador(entrenador);*/
    }

</script>

<style>
    .formulario {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 20px;
        background-color: gray;
    }
</style>