<template>
  <body class="main">
    <div class="info">
      <h1>{{ cocktail.name }}</h1>
      <br /><br /><br /><br />
      <div class="ingredient-count">
        <img
          id="ingediant-cion"
          src="../../../content/Ingredient-Icon.png"
          alt="ingredient"
        />
        <h3 id="count">{{ cocktail.ingredientsCount }} Zutaten</h3>
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
      <!-- <div class="container">
        <p>Northern Lights</p>
      </div> -->
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
}

h1 {
  font-size: 36px;
  background-color: rgba(0, 238, 255, 0.8);
  border-radius: 10px;
  padding: 20px 40px 20px 40px;
  max-width: 500px;
  width: fit-content;
  margin: 0;
}

h2 {
  font-size: 28px;
}

h3 {
  font-size: 24px;
}

ul {
  list-style-type: square;
  line-height: 1.5;
}

#cocktailImg {
  float: left;
  width: 40%;
  padding: 100px;
}

.info {
  color: black;
  padding: 0px 40px 0px 40px;
  margin: 0 auto;
  float: left;
  width: 40%;
}

.ingredient-count {
  padding: 20px;
}

.ingredient {
  font-size: 20px;
  margin-left: 20px;
  text-align: left;
}

#count {
  float: left;
  width: 40%;
}

.ingediant-cion {
  width: 10%;
  float: left;
}
</style>