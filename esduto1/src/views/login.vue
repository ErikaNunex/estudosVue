<template>
  <v-container class="mt-12">
    <v-row no-gutters class="justify-center">
      <v-col align="center">
        <h1 class="text-center">Login</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <FormLogin />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import FormLogin from "@/components/FormLogin.vue";
export default {
  name: "LoginView",
  components: {
    FormLogin,
  },
};
</script>
