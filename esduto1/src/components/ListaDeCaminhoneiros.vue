<template>
  <div>
  <v-row class="justify-space-around mt-5 purple darken-4 white--text " >
      <v-col  cols="12" sm="12" md="1" lg="1" xl="1" align="center">
        <span  >
        <b>Nome</b>
        </span>
      </v-col>
      <v-col cols="12" sm="12" md="1" lg="1" xl="1" align="center">
        <span>
         <b>Idade</b>
        </span>
      </v-col>
      <v-col cols="12" sm="12" md="2" lg="2" xl="1" align="center">
        <span>
         <b>Email</b>
        </span>
      </v-col>
    </v-row >
    <v-row  class="justify-space-around purple lighten-5 ">
      <v-col cols="12" sm="12" md="1" lg="1" xl="1" align="center">
          <span align="start" sm="1" class="d-md-none d-lg-none d-xl-none">
            <b>Nome:</b>
          </span>
          <div class="text-truncate"  v-for="caminhoneiro in caminhoneiros" :key="caminhoneiro.nome" >
            {{ caminhoneiro.nome }}
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="1" lg="1" xl="1" align="center">
        <span align="start" sm="1" class="d-md-none d-lg-none d-xl-none">
            <b>Idade:</b>
          </span>
          <div class="text-truncate"  v-for="caminhoneiro in caminhoneiros" :key="caminhoneiro.idade" >
            {{ caminhoneiro.idade }}
          </div>
        </v-col>
         <v-col cols="12" sm="12" md="2" lg="2" xl="1" align="center">
         <span align="start" sm="1" class="d-md-none d-lg-none d-xl-none">
            <b>Email:</b>
          </span>
          <div class="text-truncate"  v-for="caminhoneiro in caminhoneiros" :key="caminhoneiro.email" >
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

</style>
