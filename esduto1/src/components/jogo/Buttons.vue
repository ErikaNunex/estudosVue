<template>
  <v-row>
    <template v-if="jogando">
      <v-col>
        <v-btn @click="$emit('atacar', false)" color="blue">Atacar</v-btn>
      </v-col>
      <v-col>
        <v-btn @click="$emit('atacar', true)" color="yellow"
          >Ataque especial</v-btn
        >
      </v-col>
      <v-col>
        <v-btn @click="$emit('curar')" color="purple">Curar</v-btn>
      </v-col>
      <v-col>
        <v-btn @click="$emit('stop')" color="red">Desistir</v-btn>
      </v-col>
    </template>
    <v-col v-else>
      <v-btn @click="$emit('start')" color="green">Iniciar Jogo</v-btn>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "ButtonsJogo",
  props: ["player_life", "monster_life", "jogando"],
  emits: ["start", "stop", "atacar", "curar"],
  data() {
    return {};
  },
};
</script>
