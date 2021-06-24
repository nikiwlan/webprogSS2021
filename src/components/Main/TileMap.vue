<template>
  <body class="view">
    <div class="heading">
      <h2>Lass dich inspirieren</h2>
    </div>
    <div class="tile-map">
      <div v-for="cocktail in allCocktails" :key="cocktail">
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
    };
  },
  props: ["categories", "searchField", "alcoholFree", "alcoholic"],
  methods: {
    selectCocktail(id) {
      this.$emit("selectedCocktailID", id);
    },

    filterCocktails() {
      // Applying Filters
      this.filterByAlc();
      this.filterByIng();
      this.filterByName();
    },

    filterByAlc() {
      // TODO
      let tempList = [];
      let index = 0;
      if (index == 0) {
        for (let i = 0; i < this.allCocktails.length; i++) {
          if (this.allCocktails[i].alc == "Alcoholic") {
            tempList[index] = this.allCocktails[i];
            index++;
          }
        }
        this.allCocktails = tempList;
      } else if (index == 1) {
        for (let i = 0; i < this.allCocktails.length; i++) {
          if (this.allCocktails[i].alc == "Non_Alcoholic") {
            tempList[index] = this.allCocktails[i];
            index++;
          }
        }
        this.allCocktails = tempList;
      }
    },

    filterByIng() {
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
        this.allCocktails = tempList;
      }
    },

    filterByName() {
      // TODO
    },
  },

  beforeCreate: function () {
    // Fetching All Cocktails
    this.axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
      .then((response) => {
        for (let i = 0; i < response.data.drinks.length; i++) {
          this.allCocktails[this.allCocktails.length] = {
            id: response.data.drinks[i].idDrink,
            name: response.data.drinks[i].strDrink,
            alc: response.data.drinks[i].strAlcoholic,
            category: response.data.drinks[i].strCategory,
          };
        }

        this.axios
          .get(
            "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
          )
          .then((response2) => {
            for (let j = 0; j < response2.data.drinks.length; j++) {
              this.allCocktails[this.allCocktails.length] = {
                id: response2.data.drinks[j].idDrink,
                name: response2.data.drinks[j].strDrink,
                alc: response2.data.drinks[j].strAlcoholic,
                category: response2.data.drinks[j].strCategory,
              };
            }
          });
      });
  },
  watch: {
    categories: function () {
      this.filterCocktails();
    },

    searchField: function () {
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