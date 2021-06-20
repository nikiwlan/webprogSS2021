<template>
  <body>
    <FilterField @categorie1Selected="getCategorie1" />
    <TileMap :categorie1="cat1"/>
  </body>
</template>


<script>
import TileMap from "./TileMap.vue";

import FilterField from "./FilterField.vue";

export default {
  name: "Main",
  data: () =>{
    return{
      cat1: '',
    }
  },
  components: {
    TileMap,
    FilterField,
  },
  methods:{
    getCategorie1(categorie1){
      console.log(categorie1);
      this.cat1 = categorie1;
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