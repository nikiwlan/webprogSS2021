<template>
  <body class="view">
    <div class="heading">
      <h2>Lass dich inspirieren {{ categorie }}</h2>
    </div>
    <div class="tile-map">
      <div id="line1">
        <Tile :cocktailObj="cocktailObj"></Tile>
        <Tile :cocktailObj="cocktailObj"></Tile>
      </div>
      <div id="line2">
        <Tile :cocktailObj="cocktailObj"></Tile>
        <Tile :cocktailObj="cocktailObj"></Tile>
      </div>
      <div id="line3">
        <Tile :cocktailObj="cocktailObj"></Tile>
        <Tile :cocktailObj="cocktailObj"></Tile>
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
      cocktailObj: {
        name: "",
        category: "",
        ingredients: [],
        ingredientsCount: 0,
        alcoholic: true,
        srcImg:"",
      },
      tempCocktail: [],
    };
  },
  props: ["categorie"],
  methods: {
    updateCategories() {
      if (this.categorie.categorieValue){
        this.loadCategorie1();
        console.log("123");
        console.log(this.categorie.categorieName);
      }
    },
    

    loadCategorie1() {
      let api =
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink";
      this.axios.get(api).then((response) => {
        console.log(response.data);
        for (let i = 0; i < response.data.drinks.length; i++) {
          this.categorie1[i] = response.data.drinks[i].strGlass;
        }
      });
    },

    initIngredients() {
      this.setIngredient(this.tempCocktail.drinks[0].strIngredient1);
      this.setIngredient(this.tempCocktail.drinks[0].strIngredient2);
      this.setIngredient(this.tempCocktail.drinks[0].strIngredient3);
      this.setIngredient(this.tempCocktail.drinks[0].strIngredient4);
      this.setIngredient(this.tempCocktail.drinks[0].strIngredient5);
      this.setIngredient(this.tempCocktail.drinks[0].strIngredient6);
      this.setIngredient(this.tempCocktail.drinks[0].strIngredient7);
      this.setIngredient(this.tempCocktail.drinks[0].strIngredient8);
      this.setIngredient(this.tempCocktail.drinks[0].strIngredient9);
      this.setIngredient(this.tempCocktail.drinks[0].strIngredient10);
      this.setIngredient(this.tempCocktail.drinks[0].strIngredient11);
      this.setIngredient(this.tempCocktail.drinks[0].strIngredient12);
      this.setIngredient(this.tempCocktail.drinks[0].strIngredient13);
      this.setIngredient(this.tempCocktail.drinks[0].strIngredient14);
      this.setIngredient(this.tempCocktail.drinks[0].strIngredient15);
    },

    setIngredient(Ing) {
      if (Ing != null) {
        this.cocktailObj.ingredients[this.cocktailObj.ingredientsCount] = Ing;
        this.cocktailObj.ingredientsCount++;
      }
    },
  },
  
  updated: function(){
    this.updateCategories();
  },

  beforeCreate: function () {
    let api = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007";
    this.axios.get(api).then((response) => {
      this.tempCocktail = response.data;
      this.cocktailObj.name = this.tempCocktail.drinks[0].strDrink;
      this.cocktailObj.category = this.tempCocktail.drinks[0].strCategory;
      if (this.tempCocktail.drinks[0].strAlcoholic != "Alcoholic") {
        this.cocktailObj.alcoholic = false;
      }
      this.cocktailObj.srcImg = this.tempCocktail.drinks[0].strDrinkThumb;
      this.initIngredients();
    });
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

.tile-map {
  float: center;
  width: fit-content;
  margin: 50px auto auto auto;
  border: 15px black;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
}
</style>