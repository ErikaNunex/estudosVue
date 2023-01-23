<template>
    <div>
        <form>
            <label for="usuario">Usuario</label>
            <input v-model="modelLogin.usuario" type="text"/>

            <label for="senha">Senha</label>
            <input v-model="modelLogin.senha" type="password"/>

            <button  @click='sendLogin()' type="button">entrar</button>
        </form>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
import store from "../store/index.js"

export default{
    name:'FormLogin',
    data:()=>({
        modelLogin:{
         usuario: '',
         senha: ''
        }
    }),
    methods:{
       ...mapActions(['login', 'logout']),

       sendLogin(){
       store.dispatch('login',this.modelLogin)
       }
    }
    
}

</script>