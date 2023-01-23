import Vue from "vue";
import Vuex from 'vuex';


Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        usuarios:
            {
              usuario:'Admin',
              senha:'Admin123456'
            },
        isLogged:{
          //  !!localStorage.getItem("user")
        }
    },
    actions:{
        login( modelLogin){
            console.log(this.state.usuarios)
            debugger;
            if(modelLogin.usuario === this.state.usuarios.usuario && modelLogin.senha === this.state.usuarios.senha){
                localStorage.setItem('usuarios', modelLogin );
            } else{
                console.log('aqui')
                alert('usuario não existe')
            }
        },
        logout(){
            if(localStorage.getItem('usuarios')){
                localStorage.removeItem('usuarios');
            }
        }
    }
})

export default  store ;