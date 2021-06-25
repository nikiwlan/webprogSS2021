<template>
  <body>
    <div class="browseCocktail">
      <FilterField
        @categoriesSelected="getCategorie"
        @alcoholFreeSelected="getAlcoholFree"
        @alcoholicSelected="getAlcoholic"
      />
      <TileMap
        :categories="categories"
        :searchField="searchField"
        :alcoholFree="alcoholFree"
        :alcoholic="alcoholic"
        @selectedCocktailID="selectCocktail"
      />
    </div>
  </body>
</template>


<script>
import TileMap from "./TileMap.vue";

import FilterField from "./FilterField.vue";

export default {
  name: "Main",
  data: () => {
    return {
      categories: [],
      alcoholFree: "",
      alcoholic: "",
    };
  },
  props: ["searchField"],
  components: {
    TileMap,
    FilterField,
  },
  methods: {

    // Get Categories, that are selected on the Filter
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

    // give Parent (Home.vue) the ID of the selected Cocktail
    selectCocktail(id) {
      this.$emit("selectedCocktailID", id);
    },

    // Triggered when User clicks on "alkoholfrei"
    getAlcoholFree(alcFree) {
      this.alcoholFree = alcFree;
    },

    // Triggered when User clicks on "alkoholisch"
    getAlcoholic(alc) {
      this.alcoholic = alc;
    },
  },
};
</script>


<style scoped>
.browseCocktail {
  margin-left: 100px;
  margin-right: 100px;
  display: flex;
  flex-flow: row;
  /* justify-content: center;  */
}

</style>