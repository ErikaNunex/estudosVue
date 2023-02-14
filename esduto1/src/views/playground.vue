<template>
  <div>
    <div align="end" v-if="mudar" class="quadrado escuro">
      <v-btn @click="mudar = !mudar">{{ mudar ? "claro" : "escuro" }}</v-btn>
    </div>
    <div align="end" v-else class="quadrado claro">
      <v-btn @click="mudar = !mudar">
        {{ mudar ? "claro" : "escuro" }}
      </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  name: "PlaygroundVue",
  data() {
    return {
      mudar: false,
      temaClaro: false,
      temaEscuro: true,
    };
  },
};
</script>
<style>
.quadrado {
  width: 100%;
  height: 919px;
}
.escuro {
  background-image: linear-gradient(to top, #020d1b 10%, #6f96b4 100%);
}
.claro {
  background-image: linear-gradient(to top, #d1a74d 10%, #d0fdff 100%);
}
</style>
