<template>
  <v-row>
    <template v-if="jogando">
      <v-col>
        <v-btn @click="atacar()" color="blue">Atacar</v-btn>
      </v-col>
      <v-col>
        <v-btn color="yellow">Ataque especial</v-btn>
      </v-col>
      <v-col>
        <v-btn color="purple">Curar</v-btn>
      </v-col>
      <v-col>
        <v-btn @click="giveUp()" color="red">Desistir</v-btn>
      </v-col>
    </template>
    <v-col v-else>
      <v-btn @click="startGame()" color="green">Iniciar Jogo</v-btn>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "ButtonsJogo",
  props: ["player_life", "monster_life"],
  data() {
    return {
      jogando: false,
    };
  },
  methods: {
    startGame() {
      this.jogando = true;
    },
    giveUp() {
      this.jogando = false;
    },
    atacar() {
      alert("atacar");
    },
  },
};
</script>
