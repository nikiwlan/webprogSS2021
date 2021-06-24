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
    };
  },
  props: ["categories", "searchField", "alcoholFree", "alcoholic"],
  methods: {
    selectCocktail(id) {
      this.$emit("selectedCocktailID", id);
    },

    filterCocktails() {
      console.log("filterCocktails");
      this.filteredCocktails = this.allCocktails;
      // Applying Filters
      // this.filterByAlc();
      this.filterByCat();
      // this.filterByName();
    },

    filterByAlc() {
      // TODO
      let tempList = [];
      let index = 0;
      if (this.alcoholic && !this.alcoholFree) {
        for (let i = 0; i < this.allCocktails.length; i++) {
          if (this.allCocktails[i].alc == true) {
            tempList[index] = this.allCocktails[i];
            index++;
          }
        }
        this.allCocktails = tempList;
      } else if (!this.alcoholic && this.alcoholFree) {
        for (let i = 0; i < this.allCocktails.length; i++) {
          if (this.allCocktails[i].alc == false) {
            tempList[index] = this.allCocktails[i];
            index++;
          }
        }
        this.allCocktails = tempList;
      }
    },

    filterByCat() {
      let tempList = [];
      let index = 0;
      if (this.categories != 0) {
        for (let i = 0; i < this.filteredCocktails.length; i++) {
          for (let j = 0; j < this.categories.length; j++) {
            if (this.filteredCocktails[i].category === this.categories[j]) {
              tempList[index] = this.filteredCocktails[i];
              index++;
            }
          }
        }
        this.filteredCocktails = tempList;
      }
    },

    filterByName() {
      // TODO
    },
  },

  beforeCreate: function () {
    // Fetching All Cocktails
    console.log("beforeCreate");
    this.axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
      .then((response) => {
        for (let i = 0; i < response.data.drinks.length; i++) {
          this.axios
            .get(
              "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" +
                response.data.drinks[i].idDrink
            )
            .then((respCategory) => {
              this.allCocktails[this.allCocktails.length] = {
                id: respCategory.data.drinks[0].idDrink,
                name: respCategory.data.drinks[0].strDrink,
                alc: true,
                category: respCategory.data.drinks[0].strCategory,
              };
            });
        }
        console.log(this.allCocktails);
      })
      .then(() => {
        this.axios
          .get(
            "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
          )
          .then((response2) => {
            for (let i = 0; i < response2.data.drinks.length; i++) {
              this.axios
                .get(
                  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" +
                    response2.data.drinks[i].idDrink
                )
                .then((respCategory) => {
                  this.allCocktails[this.allCocktails.length] = {
                    id: respCategory.data.drinks[0].idDrink,
                    name: respCategory.data.drinks[0].strDrink,
                    alc: false,
                    category: respCategory.data.drinks[0].strCategory,
                  };
                });
            }
            console.log(this.allCocktails);
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