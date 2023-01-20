<template>
    <div >
        <lista-de-caminhoneiros :caminhoneiros="caminhoneiros"/>
    </div>
  </template>
  
  <script>
import ListaDeCaminhoneiros from '@/components/ListaDeCaminhoneiros.vue'
 export default{
    name:'ComponenteLista',
    components:{
        ListaDeCaminhoneiros
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