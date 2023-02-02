<template>
  <div>
  <div class="d-none d-md-block d-lg-block">
    <v-row class="justify-space-around mt-5 purple darken-4 white--text" >
        <v-col class="border-right" cols="4"  align="center">
          <span  >
          <b>Nome</b>
          </span>
        </v-col>
        <v-col class="border-right" cols="4"  align="center">
          <span>
           <b>Idade</b>
          </span>
        </v-col>
        <v-col  cols="4"  align="center">
          <span>
           <b>Email</b>
          </span>
        </v-col>
      </v-row >
  </div>
    <v-row  class="justify-space-around purple lighten-5 ">
      <v-col class="border-right"  align="center">
          <div class="text-truncate"  v-for="caminhoneiro in caminhoneiros" :key="caminhoneiro.nome" >
            <span align="start" sm="1" class="d-md-none d-lg-none d-xl-none d-block">
            <b>Nome:</b>
          </span>
            {{ caminhoneiro.nome }}
          </div>
        </v-col>
        <v-col class="border-right"  align="center">
          <div class="text-truncate"  v-for="caminhoneiro in caminhoneiros" :key="caminhoneiro.idade" >
            <span align="start" sm="1" class="d-md-none d-lg-none d-xl-none d-block">
            <b>Idade:</b>
          </span>
            {{ caminhoneiro.idade }}
          </div>
        </v-col>
         <v-col  align="center">
          <div class="text-truncate"  v-for="caminhoneiro in caminhoneiros" :key="caminhoneiro.email" >
            <span align="start" sm="1" class="d-md-none d-lg-none d-xl-none d-block">
            <b>Email:</b>
          </span>
            {{ caminhoneiro.email }}
          </div>
        </v-col>
       
    </v-row>

  </div>
</template>

<script>


export default {
  name:
    "ListaDeCaminhoneiros",
  props: ['caminhoneiros']

}

</script>
 

<style >
  .border-right {
    border-right: white 1px solid;
  }
</style>
