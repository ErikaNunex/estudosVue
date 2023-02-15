<template>
  <div>
    <p v-if="monster_life == 0">Você ganhou</p>
    <p v-if="player_life == 0">Você perdeu</p>
  </div>
</template>
<script>
export default {
  name: "ResusltJogo",
  props: ["player_life", "monster_life"],
};
</script>
<style></style>
