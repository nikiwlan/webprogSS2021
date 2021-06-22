<template>
  <body class="main">
    <h1>{{ cocktail.name }}</h1>
    <img id="cocktailImg" :src="cocktail.srcImg" alt="Cocktail" />
    <div class="info">
      <ul id="ingredientList">
        <li v-for="ing in ingredients" :key="ing">
          {{ ing }}
        </li>
      </ul>
      <p>{{ cocktail.category }}</p>
      <p>{{ cocktail.glass }}</p>
      <p v-if="alcoholic">alcoholic</p>
      <p v-else>alcoholfree</p>
      <p>{{ cocktail.instructions }}</p>
    </div>
    <button v-on:click="goBack()">Zurück</button>
  </body>
</template>


<script>
export default {
  name: "CocktailDetails",
  data() {
    return {
      cocktail: {
        name: "",
        category: "",
        ingredients: [],
        ingredientsCount: 0,
        alcoholic: true,
        srcImg: "",
        glass: "",
        instructions: "",
      },
      tempCocktail: [],
    };
  },
  props: ["selectedID"],
  methods: {
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
        this.cocktail.ingredients[this.cocktail.ingredientsCount] = Ing;
        this.cocktail.ingredientsCount++;
      }
    },

    goBack(){
      this.$emit("goBack");
    }
  },
  beforeCreate: function () {
    let api =
      "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" +
      this.selectedID;
    this.axios.get(api).then((response) => {
      this.tempCocktail = response.data;
      //console.log(response.data);
      this.cocktail.name = this.tempCocktail.drinks[0].strDrink;
      this.cocktail.category = this.tempCocktail.drinks[0].strCategory;
      if (this.tempCocktail.drinks[0].strAlcoholic != "Alcoholic") {
        this.cocktail.alcoholic = false;
      }
      this.cocktail.srcImg = this.tempCocktail.drinks[0].strDrinkThumb;
      this.cocktail.glass = this.tempCocktail.drinks[0].strGlass;
      this.cocktail.instructions = this.tempCocktail.drinks[0].strInstructions;
      this.initIngredients();
    });
  },
};
</script>


<style scoped>
.main {
  padding: 50px;
  float: center;
  width: fit-content;
  background-color: #fff1d6d7;
}
</style>