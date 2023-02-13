<template>
  <v-main align="end">
    <v-row>
      <v-col>
        <a>Lista</a>
        <a @click="$emit(redirecionar())">contador</a>
      </v-col>
      <v-col>
        <v-btn @click="getOut()">Sair</v-btn>
      </v-col>
    </v-row>
  </v-main>
</template>
<script>
import router from "@/router";
import { mapActions } from "vuex";
import store from "../store/index.js";

export default {
  name: "NavBar",
  data() {},
  emits: "emitirSinal",
  methods: {
    ...mapActions["logout"],

    getOut() {
      store.dispatch("logout");
    },
    redirecionar() {
      router.push("/contador");
    },
  },
};
</script>
<style></style>
