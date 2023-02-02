<template>
  
      <v-container>
    <v-row >
      <v-col align="center" >
        <h1 class="mb-10">Lista de caminhoneiros</h1>
        <lista-de-caminhoneiros :caminhoneiros="caminhoneiros"/>
      </v-col>
    </v-row>
      </v-container>
   
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
          idade:'31',
          email:'jorge@email.com'
        },
        {
          nome:'Helena',
          idade:'42',
          email:'helena@email.com'
        },
        {
          nome:'Marcos',
          idade:'50',
          email:'marcos@email.com'
        }
      ]
    }
  }
   
 }
  
  </script>
  
  <style>
  
  </style>