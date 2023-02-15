<template>
  <div>
    <v-row class="pa-6">
      <v-col>
        <h1>Jogador</h1>
        <div class="life-bar">
          <div
            class="life"
            :class="{ danger: player_life < 20 }"
            :style="{ width: player_life + '%' }"
          ></div>
        </div>
        {{ player_life }}%
      </v-col>

      <v-col>
        <h1>Monstro</h1>
        <div class="life-bar">
          <div
            class="life"
            :class="{ danger: monster_life < 20 }"
            :style="{ width: monster_life + '%' }"
          ></div>
        </div>
        {{ monster_life }}%
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "ScoreJogo",
  props: ["player_life", "monster_life"],
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
