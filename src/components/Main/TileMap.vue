<template>
  <body class="view">
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Charm"
    />
    <div class="heading">
      <h2 v-if="filteredCocktails.length === allCocktails.length">
        Get Inspired
      </h2>
      <h2
        v-else-if="
          filteredCocktails.length < allCocktails.length &&
          filteredCocktails.length > 0
        "
      >
        {{ filteredCocktails.length }} Drinks found
      </h2>
      <h3 v-else-if="searchField != '' || categories != '' || ingredients != '' || alcoholFree || alcoholic">
        Your search request doesn't match with any Cocktail in our data base
      </h3>
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
  props: [
    "categories",
    "searchField",
    "alcoholFree",
    "alcoholic",
    "ingredients",
  ],
  methods: {
    getAll: async (axios, str) => {
      return await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=" + str
      );
    },

    selectCocktail(id) {
      this.$emit("selectedCocktailID", id);
    },

    filterCocktails() {
      this.filteredCocktails = this.allCocktails;
      this.filterCategory();
      this.filterAlcohol();
      this.filterSearch();
      this.filterIngredients();
    },

    filterCategory() {
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

    filterAlcohol() {
      let tempList = [];
      let index = 0;
      if (this.alcoholic && !this.alcoholFree) {
        for (let i = 0; i < this.filteredCocktails.length; i++) {
          if (this.filteredCocktails[i].alc === "Alcoholic") {
            tempList[index] = this.filteredCocktails[i];
            index++;
          }
        }
        this.filteredCocktails = tempList;
      } else if (!this.alcoholic && this.alcoholFree) {
        for (let i = 0; i < this.filteredCocktails.length; i++) {
          if (this.filteredCocktails[i].alc === "Non alcoholic") {
            tempList[index] = this.filteredCocktails[i];
            index++;
          }
        }
        this.filteredCocktails = tempList;
      }
    },

    filterSearch() {
      let searchTemp = this.searchField.toLowerCase();
      let tempList = [];
      let index = 0;
      if (this.searchField != "") {
        for (let i = 0; i < this.filteredCocktails.length; i++) {
          if (
            this.filteredCocktails[i].name.toLowerCase().includes(searchTemp)
          ) {
            tempList[index] = this.filteredCocktails[i];
            index++;
          }
        }
        this.filteredCocktails = tempList;
      }
    },

    filterIngredients() {
      let tempList = [];
      let index = 0;
      if (this.ingredients != 0) {
        for (let i = 0; i < this.filteredCocktails.length; i++) {
          for (let j = 0; j < this.ingredients.length; j++) {
            for (
              let k = 0;
              k < this.filteredCocktails[i].ingredients.length;
              k++
            ) {
              if (
                this.filteredCocktails[i].ingredients[k] === this.ingredients[j]
              ) {
                tempList[index] = this.filteredCocktails[i];
                index++;
              }
            }
          }
        }
        this.filteredCocktails = tempList;
      }
    },
    initIngredients(obj) {
      let temp = [];
      temp = this.setIngredient(obj.data.drinks[0].strIngredient1, temp);
      temp = this.setIngredient(obj.data.drinks[0].strIngredient2, temp);
      temp = this.setIngredient(obj.data.drinks[0].strIngredient3, temp);
      temp = this.setIngredient(obj.data.drinks[0].strIngredient4, temp);
      temp = this.setIngredient(obj.data.drinks[0].strIngredient5, temp);
      temp = this.setIngredient(obj.data.drinks[0].strIngredient6, temp);
      temp = this.setIngredient(obj.data.drinks[0].strIngredient7, temp);
      temp = this.setIngredient(obj.data.drinks[0].strIngredient8, temp);
      temp = this.setIngredient(obj.data.drinks[0].strIngredient9, temp);
      temp = this.setIngredient(obj.data.drinks[0].strIngredient10, temp);
      temp = this.setIngredient(obj.data.drinks[0].strIngredient11, temp);
      temp = this.setIngredient(obj.data.drinks[0].strIngredient12, temp);
      temp = this.setIngredient(obj.data.drinks[0].strIngredient13, temp);
      temp = this.setIngredient(obj.data.drinks[0].strIngredient14, temp);
      temp = this.setIngredient(obj.data.drinks[0].strIngredient15, temp);
      return temp;
    },

    // Helper function to keep the code smaller
    setIngredient(Ing, temp) {
      if (Ing != null) {
        temp[temp.length] = Ing;
      }
      return temp;
    },

    async updateArray(axios, str) {
      let Cocktails = await this.getAll(axios, str);
      if (Cocktails.data.drinks === null) {
        return;
      }
      for (let i = 0; i < Cocktails.data.drinks.length; i++) {
        let x = await axios.get(
          "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" +
            Cocktails.data.drinks[i].idDrink
        );
        let ing = this.initIngredients(x);
        this.allCocktails.push({
          name: x.data.drinks[0].strDrink,
          id: x.data.drinks[0].idDrink,
          alc: x.data.drinks[0].strAlcoholic,
          category: x.data.drinks[0].strCategory,
          ingredients: ing,
        });
      }
    },
  },

  // Load the data of all Cocktails
  async created() {
    // window.localStorage.clear();
    if (window.localStorage.getItem("allCocktails") != null) {
      this.allCocktails = JSON.parse(localStorage.getItem("allCocktails"));
      this.arrayInitialzed = true;
      return;
    }

    this.allCocktails = [];
    let alphabet = "1234567890qwertzuioplkjhgfdsayxcvbnm".split("");
    for (let i = 0; i < alphabet.length; i++) {
      await this.updateArray(this.axios, alphabet[i]);
    }

    window.localStorage.setItem(
      "allCocktails",
      JSON.stringify(this.allCocktails)
    );
  },

  watch: {
    categories: function () {
      this.filterCocktails();
    },
    searchField: function () {
      this.filterCocktails();
    },
    ingredients: function () {
      this.filterCocktails();
    },
  },
};
</script>

<style scoped>
.view {
  margin-left: 100px;
  padding: 50px;
  width: fit-content;
  background-color: #fff1d6d7;
  border-radius: 20px;
}

.heading {
  text-align: center;
  font-size: 32px;
  font-weight: lighter;
  font-family: "Charm", sans-serif;
  letter-spacing: 2px;
}

.tile-map {
  width: fit-content;
  margin: 50px auto auto auto;
  border: 15px black;
  padding: 0 50px 50px 50px;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
}
.loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #ff6469d8;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>