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
    selectCocktail(id) {
      this.$emit("selectedCocktailID", id);
    },

    filterCocktails() {
      console.log("filterCocktails");
      this.filteredCocktails = this.allCocktails;
      // Applying Filters
      // this.filterByAlc();
      // this.filterByCat();
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
    const getAlcoholic = async () => {
      try {
        return await this.axios
          .get(
            "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
          )
          .then((response) => {
            return response.data.drinks;
          });
      } catch (err) {
        console.error(err);
      }
    };
    const getNonAlcoholic = async () => {
      try {
        return await this.axios
          .get(
            "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
          )
          .then((response) => {
            return response.data.drinks;
          });
      } catch (err) {
        console.error(err);
      }
    };
    const getCocktailObject = async (id) => {
      try {
        return await this.axios
          .get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id)
          .then((response) => {
            return {
              id: response.data.drinks[0].idDrink,
              name: response.data.drinks[0].strDrink,
              alc: response.data.drinks[0].strAlcoholic,
              category: response.data.drinks[0].strCategory,
            };
          });
      } catch (err) {
        console.error(err);
      }
    };
    const createArray = async () => {
      try {
        let alco = await getAlcoholic.apply();
        let alcoFree = await getNonAlcoholic.apply();
        let temp = [];
        let cocktail;
        console.log(alco[0]);
        for (let i = 0; alco.length; i++) {
          cocktail = await getCocktailObject.apply(null,[alco[i].idDrink]);
          temp.push(cocktail);
        }
        for (let i = 0; alcoFree.length; i++) {
          cocktail = await getCocktailObject.apply(null,[alcoFree[i].idDrink]);
          temp.push(cocktail);
        }
        return temp;
      } catch (err) {
        console.error(err);
      }
    };
    this.allCocktails = createArray.apply();
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