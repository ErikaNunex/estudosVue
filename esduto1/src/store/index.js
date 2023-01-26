import Vue from "vue";
import Vuex from 'vuex';
import router from '@/router';


Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        usuarios:
            {
              usuario:'Admin',
              senha:'123456'
            },
        isLogged:!!localStorage.getItem('usuarios'),

    },
    actions:{
        login( {state}, modelLogin){
            if(modelLogin.usuario == state.usuarios.usuario && modelLogin.senha == state.usuarios.senha){
                localStorage.setItem('usuarios', modelLogin );
                router.push('/lista')
            
            } else{
                alert('usuario não existe')
            }
        },
        logout(){
            if(localStorage.getItem('usuarios')){
                localStorage.removeItem('usuarios');
            }
        }

    },
    mutations:{
        setLogged({state}){
            state.isLogged == !state.isLogged
        }
    }
})

export default  store ;