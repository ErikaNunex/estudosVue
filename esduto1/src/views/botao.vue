<template>
    <div >
        <h1>Tela do botão</h1>
     <Botao @emitirSinal="redirecionar"/>
    </div>
  </template>
  
  <script>
 
import router from '@/router';
import Botao from '../components/Botao.vue'
 export default{
    name:'BotaoVue',
    components:{
        Botao
    },
    methods:{
    redirecionar(){
       router.push('/contador')
        
    }
    }
 }
  
  </script>
  
  <style>
  
  </style>