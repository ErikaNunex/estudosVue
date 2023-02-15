<template>
  <v-container>
    <v-row>
      <v-col>
        <Scores :player_life="playerLife" :monster_life="monsterLife" />
      </v-col>
    </v-row>
    <v-row>
      <v-col v-if="hasResult">
        <Result :player_life="playerLife" :monster_life="monsterLife" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Scores from "@/components/jogo/Scores.vue";
import Result from "@/components/jogo/Result.vue";
export default {
  name: "JogoVue",
  components: {
    Scores,
    Result,
  },
  data() {
    return {
      playerLife: 100,
      monsterLife: 100,
    };
  },
  computed: {
    hasResult() {
      return this.playerLife == 0 || this.monsterLife == 0;
    },
  },
};
</script>
<style></style>
