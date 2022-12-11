<template>
    
    <table class="table table-dark">
    <thead>
        <tr>
            <th scope="col">Codigo</th>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Telefono</th>
            <th scope="col">Estado</th>
            <th scope="col">Acción</th>  
        </tr>
    </thead>
    <tbody>
        <tr v-for="entrenador in entrenadores" :key="entrenador.cedula">
            <th>{{entrenador.cedula}}</th>
            <td>{{entrenador.nombre}}</td>
            <td>{{entrenador.email}}</td>
            <td>{{entrenador.telefono}}</td>
            <td><div class="estado">
                    <div :class="entrenador.estado ?'active':'inactive'"></div>
                    {{entrenador.estado?'Habilitado':'Desabilitado'}}
                </div>
            </td>
            
            <td><Button class="btn btn-warning" @click="editarTrainer(entrenador.id?entrenador.id:'1')">Editar</Button></td>
            <td><Button class="btn btn-danger" @click="deleteTrainer(entrenador.id?entrenador.id:'1')">Eliminar</Button></td>
            <td><Button class="btn btn-info" @click="activeTrainer(entrenador.id?entrenador.id:'1')">{{entrenador.estado? 'Desactivar':'Activar'}}</Button></td>

        </tr>
        
        
    </tbody>
    </table>
</template>

<script setup lang="ts">


 
    import { onMounted,ref } from 'vue';
    import {db} from '../firebase/firebase'
    import {getDoc,collection,deleteDoc,doc, onSnapshot,updateDoc } from "firebase/firestore";
    import type {Entrenador} from '../models/Entrenador'
    import {useEntrenadoresStore} from '../stores/entrenadores'
    import { storeToRefs } from 'pinia';

    import {LoadingPlugin} from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/css/index.css';
 
    let isLoading = ref(true)

    const {setEntrenador} = useEntrenadoresStore()
    const {entrenador} = storeToRefs(useEntrenadoresStore());

    
    let entrenadores = ref<Array<Entrenador>>([])

    onMounted(()=>{
        onSnapshot(collection(db, "entrenadores"), (response) => {
            let dataEntre:any = []
            response.forEach((doc) => {
                const entreAux = {
                    id:doc.id,
                    cedula:doc.data().cedula,
                    nombre:doc.data().nombre,
                    email:doc.data().email,
                    telefono:doc.data().telefono,
                    estado:doc.data().estado,
                }
                dataEntre.push(entreAux)
            });
            entrenadores.value = dataEntre
    });

       
    })
    //Function delete trainer
    const deleteTrainer = async (id:string) => {
        await deleteDoc(doc(db, 'entrenadores',id))
    }
    //Function Editar
    const editarTrainer = async (id:string) => {
        const query = doc(db, "entrenadores", id);
        const response = await getDoc(query);

       
        const entreAux:Entrenador = {
            id:id,
            cedula:response.data()?.cedula,
            nombre:response.data()?.nombre,
            email:response.data()?.email,
            telefono:response.data()?.telefono,
            estado:response.data()?.estado,
        }
        entrenador.value = entreAux

        setEntrenador(entreAux)
    }
    const activeTrainer = async (id:string) => {
        const query = doc(db, "entrenadores", id);
        const response = await getDoc(query);

        await updateDoc(doc(db, "entrenadores",id),{
            estado:!response.data()?.estado
        });
       
    }
    
    
</script>

<style>
    .active{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color:greenyellow;
    }
    .inactive{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color:rgb(255, 0, 0);
    }
    .estado {
        display:flex;
        gap: 5px;
        justify-content: center;
        align-items: center;
    }

</style>