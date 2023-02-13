<template>
  <div>
    <v-row>
      <v-col align="center">
        <input type="text" v-on:input="alterarTitulo" />
        <p>{{ titulo }}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-card max-width="344" variant="outlined">
        <v-card-item>
          <p class="text-h6 mb-1">Contador:</p>
          <p class="text-h4 mb-1">
            {{ contador }}
          </p>
        </v-card-item>

        <v-card-actions>
          <v-btn class="text-h5" color="#66BB6A" @click="aumentar()">+</v-btn>
          <v-btn class="text-h4" color="#FF8A65" @click="diminuir()">-</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
    <v-row>
      <v-col>
        <p class="text-h6">Resultado: {{ resultado }}</p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ContadorVue",
  data() {
    return {
      titulo: "Pagina Contador",
      contador: 0,
      resultadoContador: "",
      AplicarCor: false,
    };
  },
  components: {},
  computed: {
    resultado() {
      return this.contador != 37 ? "Valor diferente de 37" : "valor igual a 37";
    },
  },
  methods: {
    alterarTitulo(event) {
      this.titulo = event.target.value;
    },
    aumentar() {
      this.contador++;
    },
    diminuir() {
      this.contador--;
    },
  },
  watch: {
    resultado: {
      immediate: true,
      handler() {
        setTimeout(() => {
          this.contador = 0;
        }, 5000);
      },
    },
  },
};
</script>
<style></style>
