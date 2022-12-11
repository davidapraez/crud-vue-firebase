import { defineStore } from 'pinia'
import type Entrenador from '/models/Entrenador.ts'

export const useEntrenadoresStore = defineStore('entrenadores', () => {
  
  //Variables
  const entrenadores:Array<Entrenador> = [
    {
      codigo:123,
      nombre:'Diego',
      email:'diego@gmail.com',
      telefono:3222894510,
      estado:true
    },
    {
      codigo:12345,
      nombre:'luis',
      email:'diego@gmail.com',
      telefono:3222894510,
      estado:true
    },
  ]

  //Funciones para la informacion de entrenadores
  const addEntrenador = (entrenador:Entrenador)=>{
    entrenadores.push(entrenador);
    console.log('Entrenador añadido con exito')
  }



  return {entrenadores,addEntrenador}
})
