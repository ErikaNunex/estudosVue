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
    <v-row>
      <v-col>
        <Buttons
          @stop="giveUp"
          @start="startGame"
          :player_life="playerLife"
          :monster_life="monsterLife"
          :jogando="playing"
          @atacar="attack"
          @curar="healAndHurt"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <Logs :listLogs="logs" v-if="logs.length" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Scores from "@/components/jogo/Scores.vue";
import Result from "@/components/jogo/Result.vue";
import Buttons from "@/components/jogo/Buttons.vue";
import Logs from "@/components/jogo/Logs.vue";
export default {
  name: "JogoVue",
  components: {
    Scores,
    Result,
    Buttons,
    Logs,
  },
  data() {
    return {
      playerLife: 100,
      monsterLife: 100,
      playing: false,
      logs: [],
    };
  },
  computed: {
    hasResult() {
      return this.playerLife == 0 || this.monsterLife == 0;
    },
  },
  methods: {
    startGame() {
      this.playing = true;
      this.playerLife = 100;
      this.monsterLife = 100;
      this.logs = [];
    },
    giveUp() {
      this.playing = false;
    },
    attack(especial) {
      this.hurt(
        "monsterLife",
        5,
        10,
        especial,
        "Jogador",
        "Monstro",
        "monster"
      );
      if (this.monsterLife > 0) {
        this.hurt("playerLife", 7, 12, false, "Monstro", "Jogador", "player");
      }
    },
    hurt(prop, min, max, especial, source, target, clss) {
      const plus = especial ? 5 : 0;
      const hurt = this.getRandom(min + plus, max + plus);
      this[prop] = Math.max(this[prop] - hurt, 0);
      this.registerLog(`${source} atingiu ${target} com ${hurt}.`, clss);
    },
    getRandom(min, max) {
      const value = Math.random() * (max - min) + min;
      return Math.round(value);
    },
    heal(min, max) {
      const plus = 2;
      const recover = this.getRandom(min + plus, max + plus);
      this.playerLife = Math.min(this.playerLife + recover, 100);
      this.registerLog(`Jogador ganhou força de ${plus}.`, "player");
    },
    healAndHurt() {
      this.heal(5, 10);
      this.hurt("playerLife", 7, 12, false, "Monstro", "Jogador", "monster");
    },
    registerLog(text, clss) {
      this.logs.unshift({ text, clss });
    },
  },
  watch: {
    hasResult: {
      handler(value) {
        if (value) this.playing = false;
      },
    },
  },
};
</script>
<style>
.player {
  background-color: dodgerblue;
  color: #fff;
}
.monster {
  background-color: blueviolet;
  color: #fff;
}
</style>
