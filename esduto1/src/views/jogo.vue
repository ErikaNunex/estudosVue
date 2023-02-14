<template>
  <div>
    <Scores :player_life="playerLife" :monster_life="monsterLife" />
  </div>
</template>
<script>
import Scores from "@/components/jogo/Scores.vue";
export default {
  name: "JogoVue",
  components: {
    Scores,
  },
  data() {
    return {
      playerLife: 100,
      monsterLife: 100,
    };
  },
};
</script>
<style></style>
