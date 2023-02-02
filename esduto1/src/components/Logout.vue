<template>
    <v-main align="end">
        <v-btn
        @click="getOut()"
        >Sair</v-btn>
    </v-main>
</template>
<script>
import { mapActions } from 'vuex';
import store from "../store/index.js";


export default{
    name:'logoutVue',
    methods:{
        ...mapActions[('logout')],

        getOut(){
            store.dispatch('logout')
            
        }
    }
}
</script>
<style>
</style>
