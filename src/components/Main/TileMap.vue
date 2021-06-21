<template>
  <body class="view">
    <div class="heading">
      <h2>Lass dich inspirieren {{ categories }}</h2>
    </div>
    <div class="tile-map">
      <div v-for="cocktailID in cocktailList" :key="cocktailID">
        <Tile :cocktailID="cocktailID"></Tile>
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
      cocktailList: [],
    };
  },
  props: ["categories", "searchField"],
  methods: {
    getAllCocktails() {
      console.log("Fetching All Cocktails...");
      this.cocktailList = [];

      this.axios
        .get(
          "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
        )
        .then((response) => {
          for (let i = 0; i < response.data.drinks.length; i++) {
            this.cocktailList[this.cocktailList.length] =
              response.data.drinks[i].idDrink;
          }
        });

      this.axios
        .get(
          "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
        )
        .then((response2) => {
          for (let j = 0; j < response2.data.drinks.length; j++) {
            this.cocktailList[this.cocktailList.length] =
              response2.data.drinks[j].idDrink;
          }
        });
    },

    getCocktail(id) {
      this.axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + id)
        .then((response) => {
          if (response.data.drinks != null) {
            return response.data.drinks[0];
          }
          return null;
        });
    },

    filterByAlc() {
      // TODO
      let tempList = [];
      let index = 0;
      let tempCocktail;
      if (index == 0) {
        for (let i; i < this.cocktailList.length; i++) {
          tempCocktail = this.getCocktail(this.cocktailList[i]);
          if (tempCocktail.strAlcoholic == "Alcoholic") {
            tempList[index] = this.cocktailList[i];
            index++;
          }
        }
        this.cocktailList = tempList;
      } else if (index == 1) {
        for (let i; i < this.cocktailList.length; i++) {
          tempCocktail = this.getCocktail(this.cocktailList[i]);
          if (tempCocktail.strAlcoholic == "Non_Alcoholic") {
            tempList[index] = this.cocktailList[i];
            index++;
          }
        }
        this.cocktailList = tempList;
      }
    },

    filterByIng() {
      let tempList = [];
      let index = 0;
      let tempCocktail;
      if (this.categories != null) {
        for (let i; i < this.cocktailList.length; i++) {
          tempCocktail = this.getCocktail(this.cocktailList[i]);
          for (let j; j < this.categories.length; j++) {
            if (tempCocktail.strIngredient1 == this.categories[j]) {
              tempList[index] = this.cocktailList[i];
              index++;
            }
          }
        }
        this.cocktailList = tempList;
      }
    },
  },

  beforeCreate: function () {
    let api = "https://" + "www.thecocktaildb.com/api/json/v1/1/search.php?s=";
    if (this.searchField != "") {
      api = api + this.searchField;
      this.axios.get(api).then((response) => {
        this.cocktailList = [];
        if (response.data.drinks != null) {
          for (let i = 0; i < response.data.drinks.length; i++) {
            this.cocktailList[this.cocktailList.length] =
              response.data.drinks[i].idDrink;
          }
        }
      });
    } else {
      // Fetching All Cocktails
      this.cocktailList = [];

      this.axios
        .get(
          "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
        )
        .then((response) => {
          for (let i = 0; i < response.data.drinks.length; i++) {
            this.cocktailList[this.cocktailList.length] =
              response.data.drinks[i].idDrink;
          }
        });

      this.axios
        .get(
          "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
        )
        .then((response2) => {
          for (let j = 0; j < response2.data.drinks.length; j++) {
            this.cocktailList[this.cocktailList.length] =
              response2.data.drinks[j].idDrink;
          }
        });
    }
  },
  watch: {
    categories: function () {
      console.log("asdfa");
      console.log(this.categories[0]);
      // if (this.categorie.categorieValue) {
      //   console.log("123123123");
      //   this.loadCategorie1();
      //   console.log(this.categorie.categorieName);
      // }

      //       let api =
      //   "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink";
      // this.axios.get(api).then((response) => {
      //   console.log(response.data);
      //   for (let i = 0; i < response.data.drinks.length; i++) {
      //     this.categorie1[i] = response.data.drinks[i].strGlass;
      //   }
    },

    searchField: function () {
      let api =
        "https://" + "www.thecocktaildb.com/api/json/v1/1/search.php?s=";
      if (this.searchField != "") {
        api = api + this.searchField;
        this.axios.get(api).then((response) => {
          this.cocktailList = [];
          if (response.data.drinks != null) {
            for (let i = 0; i < response.data.drinks.length; i++) {
              this.cocktailList[this.cocktailList.length] =
                response.data.drinks[i].idDrink;
            }
          }
        });
      } else {
        // Fetching All Cocktails
        this.cocktailList = [];

        this.axios
          .get(
            "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
          )
          .then((response) => {
            for (let i = 0; i < response.data.drinks.length; i++) {
              this.cocktailList[this.cocktailList.length] =
                response.data.drinks[i].idDrink;
            }
          });

        this.axios
          .get(
            "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
          )
          .then((response2) => {
            for (let j = 0; j < response2.data.drinks.length; j++) {
              this.cocktailList[this.cocktailList.length] =
                response2.data.drinks[j].idDrink;
            }
          });
      }
      this.filterByAlc();
      this.filterByIng();
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
}

.heading {
  position: absolute;
  font-size: 20px;
}

/* .tile-map {
  float: center;
  width: fit-content;
  margin: 50px auto auto auto;
  border: 15px black;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
} */

.tile-map {
  width: fit-content;
  margin: 50px auto auto auto;
  border: 15px black;
  padding: 50px;
  display: flex;
  flex-flow: wrap;
}
</style>