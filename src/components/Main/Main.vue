<template>
  <body>
    <FilterField
      @categoriesSelected="getCategorie"
      @alcoholFreeSelected="getAlcoholFree"
      @alcoholicSelected="getAlcoholic"
    />
    <TileMap
      v-if="selectedID == 0"
      :categories="categories"
      :searchField="searchField"
      :alcoholFree="alcoholFree"
      :alcoholic="alcoholic"
      @selectedCocktailID="selectCocktail"
    />
    <CocktailDetails
      v-else
      :selectedID="selectedID"
      @selectedCocktailID="selectCocktail"
    ></CocktailDetails>
  </body>
</template>


<script>
import TileMap from "./TileMap.vue";

import FilterField from "./FilterField.vue";

import CocktailDetails from "./CocktailDetails.vue";

export default {
  name: "Main",
  data: () => {
    return {
      categories: [],
      alcoholFree: "",
      alcoholic: "",
      selectedID: 0,
    };
  },
  props: ["searchField"],
  components: {
    TileMap,
    FilterField,
    CocktailDetails,
  },
  methods: {
    getCategorie(cat) {
      this.categories = [0];
      let index = 0;
      for (let i = 0; i < 11; i++) {
        if (cat[i].categorieValue == true) {
          this.categories[index] = cat[i].categorieName;
          index++;
        }
      }
    },

    selectCocktail(id) {
      this.selectedID = id;
    },

    getAlcoholFree(alcFree) {
      //console.log(alcFree);
      this.alcoholFree = alcFree;
    },

    getAlcoholic(alc) {
      //console.log(alc);
      this.alcoholic = alc;
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