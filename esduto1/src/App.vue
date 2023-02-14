<template>
  <v-app id="app">
    <v-container>
      <NavBar v-if="getLogin" />
    </v-container>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    NavBar,
  },
  computed: {
    ...mapGetters(["getLogin"]),
  },
};
</script>

<style></style>
