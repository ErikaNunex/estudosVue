<template>
    <div>
        <v-container>
            <v-col md="11">
                <v-text-field 
                v-model="modelLogin.usuario" 
                label="Usuario" 
                required>
                </v-text-field>
            </v-col>

            <v-col md="11">
                <v-text-field 
                v-model="modelLogin.senha" 
                label="Senha" required>
                </v-text-field>
            </v-col>
            <v-col>
                <v-btn
                color="#90CAF9"
                @click='sendLogin()'  
                elevation="7" 
                x-large>Entrar</v-btn>
            </v-col>

        </v-container>
    </div>
</template> 
<script>
import { mapActions, mapMutations} from 'vuex';
export default {
    name: 'FormLogin',
    data: () => ({
        modelLogin: {
            usuario: '',
            senha: ''
        },
    }),
    methods: {
        ...mapActions(['login']),
        ...mapMutations(['setLogged']),
        sendLogin() {
            this.$store.dispatch('login', this.modelLogin)  

        },

    },


}

</script>