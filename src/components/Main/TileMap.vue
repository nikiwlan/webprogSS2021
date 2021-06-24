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
    getA: async (axios) => {
      console.log(2);
      return await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
      );
    },
    getB: () => {
      console.log(3);
    },

    selectCocktail(id) {
      this.$emit("selectedCocktailID", id);
    },
  },

  async created() {
    this.allCocktails = await this.getA(this.axios);
    console.log(1);

    let x = await this.axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" +
        this.allCocktails.data.drinks[0].idDrink
    );

<<<<<<< HEAD
    console.log(x.data);
=======
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
>>>>>>> 46abf719052c4de10ddc14fb2918c3e9e40e54e2

    console.log(this.allCocktails);
    console.log(this.allCocktails.data.drinks);
    this.getB();
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