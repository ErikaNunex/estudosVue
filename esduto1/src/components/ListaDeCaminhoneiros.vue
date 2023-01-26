<template>
  <div>
    <v-simple-table
    fixed-header
    height="300px" >
      <thead>
        <th class="text-let">Nome</th>
        <th class="text-left">Idade</th>
      </thead>
      <tbody>
        <td >
          <tr v-for="caminhoneiro in caminhoneiros" :key="caminhoneiro.nome">{{ caminhoneiro.nome }}</tr>
        </td>
        <td>
          <tr v-for="caminhoneiro in caminhoneiros" :key="caminhoneiro.idade">{{ caminhoneiro.idade }}</tr>
        </td>
      </tbody>

    </v-simple-table>

  </div>
</template>

<script>


export default {
  name:
    "ListaDeCaminhoneiros",
  props: ['caminhoneiros']

}

</script>
 

<style >

</style>
