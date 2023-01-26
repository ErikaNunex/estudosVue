<template>
  <div  >
      <v-container>
      <h1>listagem de caminhoneiros</h1>
        <lista-de-caminhoneiros :caminhoneiros="caminhoneiros"/>
      </v-container>
    </div>
  </template>
  
  <script>
import ListaDeCaminhoneiros from '@/components/ListaDeCaminhoneiros.vue';


 export default{
    name:'ComponenteLista',
    components:{
        ListaDeCaminhoneiros,
        
    },
    data(){
    return{
      caminhoneiros:[
        {
          nome:'Jorge',
          idade:'31'
        },
        {
          nome:'Helena',
          idade:'42'
        },
        {
          nome:'Marcos',
          idade:'50'
        }
      ]
    }
  }
   
 }
  
  </script>
  
  <style>
  
  </style>