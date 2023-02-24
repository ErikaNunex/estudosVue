<template>
  <div>
    <p class="draw" v-if="player_life == 0 && monster_life == 0">Empate</p>
    <p class="win" v-else-if="monster_life == 0">Você ganhou</p>
    <p class="game-over" v-else-if="player_life == 0">Você perdeu</p>
  </div>
</template>
<script>
export default {
  name: "ResusltJogo",
  props: ["player_life", "monster_life"],
};
</script>
<style>
.game-over {
  color: red;
  font-size: 1.3rem;
  font-weight: 600;
}
.win {
  color: green;
  font-size: 1.3rem;
  font-weight: 600;
}
.draw {
  color: rgba(207, 195, 20, 0.938);
  font-size: 1.3rem;
  font-weight: 600;
}
</style>
