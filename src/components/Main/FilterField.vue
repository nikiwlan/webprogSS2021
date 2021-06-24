<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Charm" />
  <body class="filter">
    <div class="heading">
      <h1>Filtern nach:</h1>
    </div>
    <hr />
    <div>
      <h2 class="heading2">Alkohol</h2>
      <div class="attributes">
        <input
          type="checkbox"
          id="alcohol"
          class="checkboxes"
          v-model="alcoholFree"
        />
        <label for="alcohol">alkoholfrei</label>
      </div>
      <div class="attributes">
        <input
          type="checkbox"
          id="alcohol"
          class="checkboxes"
          v-model="alcoholic"
        />
        <label for="alcohol">alkoholisch</label>
      </div>
    </div>
    <hr />
    <div class="categories">
      <h2 class="heading2">Kategorien</h2>
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
    setCategoriesFalse() {
      // Init all CAtegories to be false, when site is visited
      for (let i = 0; i < 11; i++) {
        this.categorieValues[i] = false;
      }
    },

    loadCategories() {
      // get all available categories from API
      let api = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      this.axios.get(api).then((response) => {
        for (let i = 0; i < response.data.drinks.length; i++) {
          this.categorieNames[i] = response.data.drinks[i].strCategory;
        }
      });
    },

    fillCategories() {
      // fill the categories Array to be given to the parent (Main.vue)
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

    updateAlcohol() {
      // triggered when User clicks on any of the Alcohol Checkboxes
      this.$emit("alcoholFreeSelected", this.alcoholFree);
      this.$emit("alcoholicSelected", this.alcoholic);
    },

    updateCategories() {
      // triggered when User clicks on any of the Categorie Checkboxes
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
<<<<<<< HEAD
  width: 15%;
=======
  width:430px;
>>>>>>> 81884892556599799059c8e0f3627e77348449e4
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