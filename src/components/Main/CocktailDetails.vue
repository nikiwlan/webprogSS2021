<template>
  <body class="main">
    <div class="info">
      <!-- <h1>{{ cocktail.name }}</h1>
      <br /><br /><br /><br /> -->
      <div class="ingredient-count">
        <img
          id="count"
          src="../../../content/Ingredient-Icon.png"
          alt="ingredient"
        />
        <h3 class="count">{{ cocktail.ingredientsCount }} Zutaten</h3>
      </div>
      <hr />
      <div class="ingredient">
        <h2>Zutaten</h2>
        <ul id="ingredientList">
          <li v-for="ing in cocktail.ingredients" :key="ing">
            {{ ing }}
          </li>
        </ul>
        <br />
        <h3>Glas</h3>
        <p>{{ cocktail.glass }}</p>
        <br />
        <h2>Zubereitung</h2>
        <!-- <p>{{ cocktail.category }}</p>
        <p v-if="alcoholic">alcoholic</p>
        <p v-else>alcoholfree</p> -->
        <p>{{ cocktail.instructions }}</p>
      </div>
    </div>
    <div class="image">
      <img id="cocktailImg" :src="cocktail.srcImg" alt="Cocktail" />
      <div class = "cocktail-name">
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
      // the Ingridients are loaded into the Array
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
      // Helper function to keep the code smaller
      if (Ing != null) {
        this.cocktail.ingredients[this.cocktail.ingredientsCount] = Ing;
        this.cocktail.ingredientsCount++;
      }
    },
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
  background-color: #fff1d6d7;
  width:fit-content;
  max-width: 75%;
}

/* h1 {
  font-size: 36px;
  background-color: rgba(0, 238, 255, 0.8);
  border-radius: 10px;
  padding: 20px 40px 20px 40px;
  max-width: 500px;
  width: fit-content;
  margin: 0;
} */

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
  width: fit-content;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 20px;
  margin: 50px;
  margin-left: 200px;
  max-width: 35%;
}

.cocktail-name{
  text-align: center;
  padding: 10px 20px;
}

#cocktailImg{
  max-width: 100%;
}

</style>