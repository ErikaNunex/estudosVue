import Vue from 'vue'
import VueRouter from 'vue-router'
import botao from '@/views/botao.vue'
import contador from '@/views/contador.vue'
import tempo from '@/views/gerenciadorDeTempo.vue'
import lista from '@/views/lista.vue'
import login from '@/views/login.vue'


Vue.use(VueRouter);
const router = new VueRouter({
  mode:'history',
  routes:[
    {
      name:'botao',
      path:'/botao',
      component: botao
    },
    {
      name:'contador',
      path:'/contador',
      component: contador
    },
    {
      name:'tempo',
      path:'/tempo',
      component: tempo
    },
    {
      name:'lista',
      path:'/lista',
      component: lista
    },
    {
      name:'login',
      path:'/',
      component: login
    }

  ],
  base:'',
})

export default router