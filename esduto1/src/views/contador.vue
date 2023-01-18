<template>
    <div >
        <h1>Tela do contador</h1>
        <Botao @emitirSinal='voltarParaTelaDeBotão()'/>
    </div>
  </template>
  
  <script>
  import router from '@/router';
    import Botao from '@/components/Botao.vue';
    export default{
    name:'ContadorVue',
    components:{
        Botao
    },
    methods:{
        voltarParaTelaDeBotão(){
       router.push('/botao')
        
    }
    }
}
  </script>
  
  <style>
  
  </style>