<template>
  <div class="formulario">
    <h2>Formulario registro</h2>

    <input  v-model="cedula" type="text" placeholder="Cedula">
    <input  type="text" placeholder="nombre" v-model="nombre">
    <input type="text" placeholder="email" v-model="email">
    <input type="text" placeholder="telefono" v-model="telefono">

    <button class="btn btn-success" @click="registrar">
        {{entrenador? 'Editar':'Registrar'}}
    </button>
    <button v-show="entrenador" class="btn btn-warning" @click="clearEntrenador">
        Cancelar
    </button>

  
  </div>
</template>

<script setup lang="ts">
    import {ref,watch} from 'vue'
    import {storeToRefs} from 'pinia'
    import {  collection, addDoc,updateDoc,doc } from "firebase/firestore"; 
    import {db} from '../firebase/firebase'

    import {useEntrenadoresStore} from '../stores/entrenadores'
    const {clearEntrenador} =useEntrenadoresStore()
    const {entrenador,idEditar} = storeToRefs(useEntrenadoresStore());
    
    
    const cedula = ref()
    const nombre = ref();
    const email = ref();
    const telefono = ref();

    watch(entrenador, ()=>{
        cedula.value =  entrenador.value?.cedula
        nombre.value =  entrenador.value?.nombre
        email.value =  entrenador.value?.email
        telefono.value =  entrenador.value?.telefono
    })
    
    const registrar = async()=>{

        const entrenadorData = {

            cedula:cedula.value,
            nombre:nombre.value,
            email:email.value,
            telefono:telefono.value,
            estado:false
        };
         
        //Validamos si es de registro o actualizacion
        if(entrenador.value === undefined){
            await addDoc(collection(db, 'entrenadores'), entrenadorData);
        }else{
            await updateDoc(doc(db, "entrenadores", idEditar.value),entrenadorData);
        }

        cedula.value = ''
        nombre.value = ''
        email.value= ''
        telefono.value = ''
    }
</script>

<style>
    .formulario {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 20px;
        background-color: gray;
        max-width: 400px;
    }
</style>