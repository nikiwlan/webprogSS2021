<template>
  <body class="filter">
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Charm"
    />
    <div id="heading" class ="filter-blocks">
      <h1>Filter by:</h1>
    </div>
    <hr />
    <div id="alcohol" class ="filter-blocks">
      <h2 class="heading2">Alcohol</h2>
      <div class="attributes">
        <input
          type="checkbox"
          id="alcohol"
          class="checkboxes"
          v-model="alcoholFree"
        />
        <label for="alcohol">Alcohol-free </label>
      </div>
      <div class="attributes">
        <input
          type="checkbox"
          id="alcohol"
          class="checkboxes"
          v-model="alcoholic"
        />
        <label for="alcohol">Alcoholic</label>
      </div>
    </div>
    <hr />
    <div id="categories" class ="filter-blocks">
      <h2 class="heading2">Category</h2>
      <div v-for="category in categories" :key="category">
        <input
          type="checkbox"
          class="checkboxes"
          v-model="category.categorieValue"
        />
        <label for="alcohol">{{ category.categorieName }}</label
        ><br /><br />
      </div>
    </div>

    <hr />
    <div id="ingredients" class ="filter-blocks">
      <h2 class="heading2">Ingredients</h2>
      <div class="attributes">
        <div v-for="ingredient in ingredients" :key="ingredient">
          <input
            type="checkbox"
            class="checkboxes"
            v-model="ingredient.ingredientValue"
          />
          <label for="alcohol">{{ ingredient.ingredientName }}</label
          ><br /><br />
        </div>
      </div>
    </div>
  </body>
</template>


<script>
export default {
  name: "FilterField",
  data: function () {
    return {
      hover: false,

      alcoholFree: false,
      alcoholic: false,

      alcohol: false,

      categories: [],

      ingredients: [],
    };
  },

  methods: {
    // get all available categories from API
    async getCategories(axios) {
      return await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
      );
    },

    // get all available ingredients from API
    async getIngredients(axios) {
      return await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
      );
    },

    // triggered when User clicks on any of the Alcohol Checkboxes
    updateAlcohol() {
      this.$emit("alcoholFreeSelected", this.alcoholFree);
      this.$emit("alcoholicSelected", this.alcoholic);
    },

    // triggered when User clicks on any of the Categorie Checkboxes
    updateCategories() {
      this.$emit("categoriesSelected", this.categories);
    },

    // triggered when User clicks on any of the Ingredient Checkboxes
    updateIngredients() {
      this.$emit("ingredientsSelected", this.ingredients);
    },
  },
  created: async function () {
    let temp = await this.getIngredients(this.axios);
    for (let i = 0; i < temp.data.drinks.length; i++) {
      this.ingredients[i] = {
        ingredientValue: false,
        ingredientName: temp.data.drinks[i].strIngredient1,
      };
    }
    temp = await this.getCategories(this.axios);
    for (let i = 0; i < temp.data.drinks.length; i++) {
      this.categories[i] = {
        categorieValue: false,
        categorieName: temp.data.drinks[i].strCategory,
      };
    }
  },
  updated: async function () {
    if (this.categories[0] != undefined && this.ingredients[0] != undefined) {
      this.updateCategories();
      this.updateAlcohol();
      this.updateIngredients();
    } else {
      console.log("Waiting ...");
    }
  },
};
</script>


<style scoped>
.filter {
  border: 2px solid black;
  background-color: #9dfcecd0;
  border-radius: 10px;
  width: 440px;
}

#heading {
  font-size: 14px;
  font-family: "Charm", sans-serif;
  letter-spacing: 2px;
}

.heading2 {
  font-family: "Charm", sans-serif;
  letter-spacing: 2px;
}



.attributes {
  text-align: left;
  padding: 0px 50px 0px 0px;
  font-size: 20px;
}

.checkboxes {
  width: 18px;
  height: 18px;
  margin-right: 10px;
}

.filter-blocks{
  padding: 0 0 0 50px;
}

</style>