import { defineStore } from 'pinia'
import type {Entrenador} from '../models/Entrenador'
import {ref} from 'vue'
import {collection,onSnapshot} from "firebase/firestore";
import {db} from '../firebase/firebase'

interface stateEntrenador{
  entrenadores:Entrenador[],
  entrenador:Entrenador | undefined,
  idEditar:string
}

export const useEntrenadoresStore = defineStore('entrenadores',{
  
  state:():stateEntrenador=>({
     entrenadores:[],
     entrenador:undefined,
     idEditar:''
  }),
  actions:{
    setEntrenador(entrenador: Entrenador){
      this.entrenador = entrenador
      this.idEditar = entrenador.id ? entrenador.id : ''
    },
    clearEntrenador(){
      this.entrenador = undefined
    }
  }
 
})
