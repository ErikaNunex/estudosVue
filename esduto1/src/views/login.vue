<template>
    <div  >
        <v-col class="d-flex justify-content-center mt-5">
            <v-card class=" p-4 mt-5" width="50%">
            <h1 class="text-center">Sou Energy</h1>
            <FormLogin />
        </v-card>
        </v-col>
            
       
    </div>


</template>
<script>
import FormLogin from '@/components/FormLogin.vue'
export default {
    name: 'LoginView',
    components: {
        FormLogin
    },

} 
</script>