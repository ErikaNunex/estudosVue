import Vue from 'vue'
import VueRouter from 'vue-router'
import contador from '@/views/contador.vue'
import lista from '@/views/lista.vue'
import login from '@/views/login.vue'
import store from "../store/index.js"
import dashboard from "@/views/dashboard.vue"
import playground from "@/views/playground.vue"
import jogo from '@/views/jogo.vue'


Vue.use(VueRouter);
const router = new VueRouter({
  mode:'history',
  routes:[
    {
      name:'contador',
      path:'/contador',
      component: contador
    },
    {
      name:'lista',
      path:'/lista',
      component: lista,
  },
    {
      name:'login',
      path:'/',
      component: login
    },
    {
      name:'dashboard',
      path: '/darshboard',
      component:dashboard
    },
    {
      name: 'playground',
      path: '/playground',
      component: playground
    },
    {
      name: 'jogo',
      path: '/jogo',
      component: jogo
    }

  ],
  base:'',
})

router.beforeEach((to,from,next)=>{
    if(to.name !== 'login' &&  store.state.isLogged === false){
      next('/');
      
    }else{
      next();
  }
})



export default router