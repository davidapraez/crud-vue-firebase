<template>
    <table class="table table-dark">
    <thead>
        <tr>
            <th scope="col">Codigo</th>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Telefono</th>
            <th scope="col">Acción</th>  
        </tr>
    </thead>
    <tbody>
        <tr v-for="entrenador in entrenadores" :key="entrenador.codigo">
            <th>{{entrenador.codigo}}</th>
            <td>{{entrenador.nombre}}</td>
            <td>{{entrenador.email}}</td>
            <td>{{entrenador.telefono}}</td>
            <td><Button>Editar</Button></td>
            <td><Button>Eliminar</Button></td>
            <td><Button>Habilitar</Button></td>
        </tr>
        
    </tbody>
    </table>
</template>

<script setup lang="ts">
    import { onMounted } from '@vue/runtime-core'
    import {useEntrenadoresStore} from '../stores/entrenadores'
    const {entrenadores} = useEntrenadoresStore()

    onMounted(()=>{
       
    })
    
</script>

<style>

</style>