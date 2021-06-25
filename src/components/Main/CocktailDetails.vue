<template>
  <body class="main">
    <div class="info">
      <div class="ingredient-count">
        <img
          id="count"
          src="../../../content/Ingredient-Icon.png"
          alt="ingredient"
        />
        <h3 class="count">{{ cocktail.ingredientsCount }} Ingredients</h3>
      </div>
      <hr />
      <div class="ingredient">
        <h2>Ingredients</h2>
        <ul id="ingredientList">
          <li v-for="(ing, index) in cocktail.ingredients" :key="ing">
            {{ ing }}  <a v-if="cocktail.ingredientMeasure[index] != null">({{cocktail.ingredientMeasure[index]}})</a>
          </li>
        </ul>
        <br />
        <h3>Glass</h3>
        <p>{{ cocktail.glass }}</p>
        <br />
        <h2>Preparation</h2>
        <p>{{ cocktail.instructions }}</p>
      </div>
    </div>
    <div class="image">
      <img id="cocktailImg" :src="cocktail.srcImg" alt="Cocktail" />
      <div class="cocktail-name">
        <h4>{{ cocktail.name }}</h4>
      </div>
    </div>
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
        ingredientMeasure: [],
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
    // the Ingridients are loaded into the Array
    initIngredients() {
      this.setIngredient(this.tempCocktail.drinks[0].strIngredient1, this.tempCocktail.drinks[0].strMeasure1);
      this.setIngredient(this.tempCocktail.drinks[0].strIngredient2, this.tempCocktail.drinks[0].strMeasure2);
      this.setIngredient(this.tempCocktail.drinks[0].strIngredient3, this.tempCocktail.drinks[0].strMeasure3);
      this.setIngredient(this.tempCocktail.drinks[0].strIngredient4, this.tempCocktail.drinks[0].strMeasure4);
      this.setIngredient(this.tempCocktail.drinks[0].strIngredient5, this.tempCocktail.drinks[0].strMeasure5);
      this.setIngredient(this.tempCocktail.drinks[0].strIngredient6, this.tempCocktail.drinks[0].strMeasure6);
      this.setIngredient(this.tempCocktail.drinks[0].strIngredient7, this.tempCocktail.drinks[0].strMeasure7);
      this.setIngredient(this.tempCocktail.drinks[0].strIngredient8, this.tempCocktail.drinks[0].strMeasure8);
      this.setIngredient(this.tempCocktail.drinks[0].strIngredient9, this.tempCocktail.drinks[0].strMeasure9);
      this.setIngredient(this.tempCocktail.drinks[0].strIngredient10, this.tempCocktail.drinks[0].strMeasure10);
      this.setIngredient(this.tempCocktail.drinks[0].strIngredient11, this.tempCocktail.drinks[0].strMeasure11);
      this.setIngredient(this.tempCocktail.drinks[0].strIngredient12, this.tempCocktail.drinks[0].strMeasure12);
      this.setIngredient(this.tempCocktail.drinks[0].strIngredient13, this.tempCocktail.drinks[0].strMeasure13);
      this.setIngredient(this.tempCocktail.drinks[0].strIngredient14, this.tempCocktail.drinks[0].strMeasure14);
      this.setIngredient(this.tempCocktail.drinks[0].strIngredient15, this.tempCocktail.drinks[0].strMeasure15);
    },

    // Helper function to keep the code smaller
    setIngredient(Ing, Measure) {
      if (Ing != null) {
        this.cocktail.ingredients[this.cocktail.ingredientsCount] = Ing;
        this.cocktail.ingredientMeasure[this.cocktail.ingredientsCount] = Measure;
        this.cocktail.ingredientsCount++;
      }
    },
  },

  // Loads the selected Cocktail and it´s data
  beforeCreate: function () {
    let api =
      "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" +
      this.selectedID;
    this.axios.get(api).then((response) => {
      this.tempCocktail = response.data;
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
  background-color: #fff1d6d7;
  max-width: 75%;
  min-width: 1200px;
}

h2 {
  font-size: 36px;
}

h3 {
  font-size: 28px;
}

h4 {
  font-size: 32px;
  color: white;
}

ul {
  list-style-type: square;
  line-height: 1.5;
}

.info {
  color: black;
  padding: 0px 40px 0px 40px;
  margin: 0 auto;
  float: left;
  max-width: 40%;
  min-width: 350px;
}

.ingredient-count {
  padding: 20px;
}

.ingredient {
  font-size: 24px;
  margin-left: 20px;
  text-align: left;
}
#count {
  margin: 15px 30px auto auto;
  float: left;
  width: 60px;
  height: auto;
}

.image {
  background-color: rgba(30, 30, 31, 0.979);
  float: left;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 20px;
  margin: 50px;
  margin-left: 100px;
  max-width: 32%;
}

.cocktail-name {
  text-align: center;
  padding: 10px 20px;
}

#cocktailImg {
  max-width: 100%;
}
</style>