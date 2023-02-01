<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-col>
            <v-text-field v-model="modelLogin.usuario" label="Usuario">
            </v-text-field>
          </v-col>

          <v-col>
            <v-text-field v-model="modelLogin.senha" label="Senha">
            </v-text-field>
          </v-col>
          <v-col>
            <v-btn color="#90CAF9" @click="sendLogin()" elevation="7"
              >Entrar</v-btn
            >
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template> 
<script>
import { mapActions } from "vuex";
export default {
  name: "FormLogin",
  data: () => ({
    modelLogin: {
      usuario: "",
      senha: "",
    },
  }),
  methods: {
    ...mapActions(["login"]),
    sendLogin() {
      this.$store.dispatch("login", this.modelLogin);
    },
  },
};
</script>