<template>
  <body class="view">
    <div class="heading">
      <h2>Lass dich inspirieren</h2>
    </div>
    <div class="tile-map">
      <div v-for="cocktail in filteredCocktails" :key="cocktail">
        <Tile
          :cocktailID="cocktail.id"
          @selectedCocktailID="selectCocktail"
        ></Tile>
      </div>
    </div>
  </body>
</template>


<script>
import Tile from "./Tile.vue";

export default {
  name: "TileMap",
  components: {
    Tile,
  },
  data() {
    return {
      allCocktails: [],
      filteredCocktails: [],
      tempID: 0,
    };
  },
  props: ["categories", "searchField", "alcoholFree", "alcoholic"],
  methods: {
    getAlcFree: async (axios) => {
      return await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
      );
    },

    getAlc: async (axios) => {
      return await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
      );
    },

    selectCocktail(id) {
      this.$emit("selectedCocktailID", id);
    },

    filterCocktails() {
      let tempList = [];
      let index = 0;
      if (this.categories != 0) {
        for (let i = 0; i < this.allCocktails.length; i++) {
          for (let j = 0; j < this.categories.length; j++) {
            if (this.allCocktails[i].category === this.categories[j]) {
              tempList[index] = this.allCocktails[i];
              index++;
            }
          }
        }
        this.filteredCocktails = tempList;
      } else {
        this.filteredCocktails = this.allCocktails;
      }
    },
  },

  async created() {
    let Cocktails = await this.getAlcFree(this.axios);
    for (let i = 0; i < Cocktails.data.drinks.length; i++) {
      let x = await this.axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" +
          Cocktails.data.drinks[i].idDrink
      );
      this.allCocktails.push({
        name: x.data.drinks[0].strDrink,
        id: x.data.drinks[0].idDrink,
        alc: false,
        category: x.data.drinks[0].strCategory,
      });
    }
    Cocktails = await this.getAlc(this.axios);
    for (let i = 0; i < Cocktails.data.drinks.length; i++) {
      let x = await this.axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" +
          Cocktails.data.drinks[i].idDrink
      );
      this.allCocktails.push({
        name: x.data.drinks[0].strDrink,
        id: x.data.drinks[0].idDrink,
        alc: true,
        category: x.data.drinks[0].strCategory,
      });
    }
  },
  watch: {
    categories: function () {
      this.filterCocktails();
    },
  },
};
</script>

<style scoped>
.view {
  padding: 50px;
  float: center;
  width: fit-content;
  background-color: #fff1d6d7;
  border-radius: 20px;
}

.heading {
  position: absolute;
  font-size: 20px;
}

.tile-map {
  width: fit-content;
  margin: 50px auto auto auto;
  border: 15px black;
  padding: 50px;
  display: flex;
  flex-flow: wrap;
}
</style>