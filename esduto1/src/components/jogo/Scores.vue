<template>
  <div>
    <v-row class="pa-6">
      <v-col>
        <h1>Jogador</h1>
        <div class="life-bar">
          <div
            class="life"
            :class="{ danger: playerLife < 20 }"
            :style="{ width: playerLife + '%' }"
          ></div>
        </div>
        {{ playerLife }}%
      </v-col>

      <v-col>
        <h1>Monstro</h1>
        <div class="life-bar">
          <div
            class="life"
            :class="{ danger: monsterLife < 20 }"
            :style="{ width: monsterLife + '%' }"
          ></div>
        </div>
        {{ monsterLife }}%
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "ScoreJogo",
  data() {
    return {
      playerLife: 100,
      monsterLife: 100,
    };
  },
  computed: {},
  methods: {},
  watch: {},
};
</script>
<style>
.life-bar {
  width: 80%;
  height: 30px;
  border: 1px solid #aaa;
}
.life-bar .life {
  display: flex;
  height: 100%;
  background-color: aquamarine;
}
.life-bar .life.danger {
  background-color: red;
}
</style>
