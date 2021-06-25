<template>
  <body class="filter">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Charm" />
    <div class="heading">
      <h1>Filter by:</h1>
    </div>
    <hr />
    <div>
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
    <div class="categories">
      <h2 class="heading2">Categories</h2>
      <div class="attributes">
        <input
          type="checkbox"
          id="categorie1"
          class="checkboxes"
          v-model="categorieValues[0]"
        />
        <label for="alcohol">{{ categorieNames[0] }}</label
        ><br /><br />
        <input
          type="checkbox"
          id="categorie2"
          class="checkboxes"
          v-model="categorieValues[1]"
        />
        <label for="alcohol">{{ categorieNames[1] }}</label
        ><br /><br />
        <input
          type="checkbox"
          id="categorie3"
          class="checkboxes"
          v-model="categorieValues[2]"
        />
        <label for="alcohol">{{ categorieNames[2] }}</label
        ><br /><br />
        <input
          type="checkbox"
          id="categorie4"
          class="checkboxes"
          v-model="categorieValues[3]"
        />
        <label for="alcohol">{{ categorieNames[3] }}</label
        ><br /><br />
        <input
          type="checkbox"
          id="categorie5"
          class="checkboxes"
          v-model="categorieValues[4]"
        />
        <label for="alcohol">{{ categorieNames[4] }}</label
        ><br /><br />
        <input
          type="checkbox"
          id="categorie6"
          class="checkboxes"
          v-model="categorieValues[5]"
        />
        <label for="alcohol">{{ categorieNames[5] }}</label
        ><br /><br />
        <input
          type="checkbox"
          id="categorie7"
          class="checkboxes"
          v-model="categorieValues[6]"
        />
        <label for="alcohol">{{ categorieNames[6] }}</label
        ><br /><br />
        <input
          type="checkbox"
          id="categorie8"
          class="checkboxes"
          v-model="categorieValues[7]"
        />
        <label for="alcohol">{{ categorieNames[7] }}</label
        ><br /><br />
        <input
          type="checkbox"
          id="categorie9"
          class="checkboxes"
          v-model="categorieValues[8]"
        />
        <label for="alcohol">{{ categorieNames[8] }}</label
        ><br /><br />
        <input
          type="checkbox"
          id="categorie10"
          class="checkboxes"
          v-model="categorieValues[9]"
        />
        <label for="alcohol">{{ categorieNames[9] }}</label
        ><br /><br />
        <input
          type="checkbox"
          id="categorie11"
          class="checkboxes"
          v-model="categorieValues[10]"
        />
        <label for="alcohol">{{ categorieNames[10] }}</label
        ><br /><br />
      </div>
    </div>
  </body>
</template>


<script>
export default {
  name: "FilterField",
  data: function () {
    return {
      alcoholFree: false,
      alcoholic: false,

      alcohol: false,
      categorieNames: [],

      hover: false,
      categorieValues: [],
      categories: [],
    };
  },

  methods: {

    // Init all CAtegories to be false, when site is visited
    setCategoriesFalse() {
      for (let i = 0; i < 11; i++) {
        this.categorieValues[i] = false;
      }
    },

    // get all available categories from API
    loadCategories() {
      let api = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      this.axios.get(api).then((response) => {
        for (let i = 0; i < response.data.drinks.length; i++) {
          this.categorieNames[i] = response.data.drinks[i].strCategory;
        }
      });
    },

    // fill the categories Array to be given to the parent (Main.vue)
    fillCategories() {
      let tempCats = [];
      for (let i = 0; i < 11; i++) {
        tempCats[i] = { categorieValue: false, categorieName: "" };
      }
      for (let i = 0; i < 11; i++) {
        tempCats[i].categorieName = this.categorieNames[i];
        tempCats[i].categorieValue = this.categorieValues[i];
        this.categories[i] = tempCats[i];
      }
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
  },
  created: function () {
    this.loadCategories();
    this.setCategoriesFalse();
    this.fillCategories();
  },
  updated: function () {
    this.fillCategories();
    this.updateCategories();
    this.updateAlcohol();
  },
};
</script>


<style scoped>
.filter {
  border: 2px solid black;
  background-color: #9dfcecd0;
  border-radius: 10px;
  width:440px;
}

.heading {
  font-size: 14px;
  font-family: "Charm", sans-serif;
  letter-spacing: 2px;
}

.heading2 {
  font-family: "Charm", sans-serif;
  letter-spacing: 2px;
}

div {
  padding: 0px 50px 0px 50px;
  margin-top: 20px;
  margin-bottom: 30px;
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
</style>