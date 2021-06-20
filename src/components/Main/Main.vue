<template>
  <body>
    <FilterField @categorie1Selected="getCategorie1" />
    <TileMap :cat="categorie" :searchField="searchField"/>
  </body>
</template>


<script>
import TileMap from "./TileMap.vue";

import FilterField from "./FilterField.vue";

export default {
  name: "Main",
  data: () =>{
    return{
      categorie:{
        categorieValue: false,
        categorieName: '',
      }
    }
  },
  props: ["searchField"],
  components: {
    TileMap,
    FilterField,
  },
  methods:{
    getCategorie1(cat, name){
      console.log(cat + name);
      this.categorie.categorieValue = cat;
      this.categorie.categorieName = name;
    },
  },
};
</script>


<style scoped>
body {
    margin: auto;
  display: flex;
  justify-content: center;
  width: auto;
  border: 15px black;
  margin: 20px;
  border-radius: 5px;
  display: flex;
  flex-flow: row;
}

</style>