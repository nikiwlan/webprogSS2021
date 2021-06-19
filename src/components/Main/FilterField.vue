<template>
  <body class = "filter">
    <div class = "heading">
      <h1>Filtern nach:</h1>
    </div>
    <hr>
    <div>  
      <h2>Alkohol</h2>  
      <input type="checkbox" id="alcohol" v-model="alcohol" />
      <label for="alcohol">alkoholfrei ?</label>
    </div>
    <hr>
    <div class = "categories">
      <h2>Kategorien</h2>
      <input type="checkbox" id="categorie1" v-model="alcohol" />
      <label for="alcohol">alkoholfrei ?</label><br>
      <input type="checkbox" id="categorie2" v-model="alcohol" />
      <label for="alcohol">alkoholfrei ?</label><br>
    </div>
    <hr>
    <div class = "glases">
      <h2>Gläser</h2>
      <input type="checkbox" id="glas1" v-model="alcohol" />
      <label for="alcohol">alkoholfrei ?</label><br>
      <input type="checkbox" id="glas2" v-model="alcohol" />
      <label for="alcohol">alkoholfrei ?</label><br>
    </div>
  </body>
</template>


<script>
//import Tile from './components/Tile.vue'

export default {
  name: "FilterField",
  data: function () {
    return {
      alcohol: false,
    };
  },
};
</script>


<style scoped>
.filter {
  border: 2px solid black;
  background-color: #9dfcecd0;
  display: table;
  flex-flow: column;
}

.heading{
  font-size: 14px;
}

div{
  padding: 0px 50px 0px 50px;
  margin-top: 20px;
  margin-bottom: 30px;
}


</style>