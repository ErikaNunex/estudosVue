<template>
    <div class="barra">
        <h1>Barra Lateral</h1>
    </div>

</template>
<script>
export default{
    name:'BarraLateral',
    
}
</script>
<style scoped lang="css">
.barra{
    padding: 1rem  ;
    background-color: #ffff ;
    width: 100% ;
    height: 100vh ;
}
@media only screen and (max-width:768px){
    barra{
        padding: 2.5rem;
        height:auto;
    }
}
</style>