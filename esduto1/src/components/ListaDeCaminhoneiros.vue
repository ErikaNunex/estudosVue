<template>
  <div >
    <h1>listagem de caminhoneiros</h1>
    <table class="table">
    <thead>
      
        <th scope="col">Nome</th>
        <th scope="col">Idade</th>
    </thead>
    <tbody>
      <td>
        <tr v-for="caminhoneiro in caminhoneiros" :key="caminhoneiro.nome">{{ caminhoneiro.nome}}</tr>
      </td>
      <td>
        <tr v-for="caminhoneiro in caminhoneiros" :key="caminhoneiro.idade">{{ caminhoneiro.idade}}</tr>
      </td>
    </tbody>
    </table>
    
  </div>
</template>

<script>


export default{
  name:
  "ListaDeCaminhoneiros", 
  props:['caminhoneiros']
  
}

</script>
 

<style >

</style>
