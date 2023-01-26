<template>
 <v-app id="app">
      <v-container>
        
          <Logout />
      <router-view></router-view>
        

      </v-container>
 </v-app>
</template>

<script>
import Logout from './components/Logout.vue';

export default {
  name: 'App',
  components:{
    Logout
  },
  computed:{
    mostrarBotaoLogout(){
      return this.$store.state.isLogged
    }
  }
 
 

}
</script>

<style>
 
</style>
