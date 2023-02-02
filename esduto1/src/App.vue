<template>
  <v-app id="app">
    <v-container >
      <Logout v-if="getLogin" />
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import Logout from "./components/Logout.vue";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    Logout,
  },
  computed: {
    ...mapGetters(["getLogin"]),
  },
};
</script>

<style>
</style>
