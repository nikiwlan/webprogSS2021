<template>
  <body class = "filter">
    <div class = "heading">
      <h1>Filtern nach:</h1>
    </div>
    <hr>
    <div>  
      <h2>Alkohol</h2>  
      <div class = "attributes">
        <input type="checkbox" id="alcohol" class ="checkboxes" v-model="alcohol" />
        <label for="alcohol">alkoholfrei ?</label>
      </div>
    </div>
    <hr>
    <div class = "categories">
      <h2>Kategorien</h2>
      <div class = "attributes">
        <input type="checkbox" id="categorie1" class ="checkboxes" v-model="categorieNames[0]" />
        <label for="alcohol">{{categorieValues[0]}}</label><br><br>
        <input type="checkbox" id="categorie2" class ="checkboxes" v-model="categorieNames[1]" />
        <label for="alcohol">{{categorieValues[1]}}</label><br><br>
        <input type="checkbox" id="categorie3" class ="checkboxes" v-model="categorieNames[2]" />
        <label for="alcohol">{{categorieValues[2]}}</label><br><br>
        <input type="checkbox" id="categorie4" class ="checkboxes" v-model="categorieNames[3]" />
        <label for="alcohol">{{categorieValues[3]}}</label><br><br>
        <input type="checkbox" id="categorie5" class ="checkboxes" v-model="categorieNames[4]" />
        <label for="alcohol">{{categorieValues[4]}}</label><br><br>
        <input type="checkbox" id="categorie6" class ="checkboxes" v-model="categorieNames[5]" />
        <label for="alcohol">{{categorieValues[5]}}</label><br><br>
        <input type="checkbox" id="categorie7" class ="checkboxes" v-model="categorieNames[6]"/>
        <label for="alcohol">{{categorieValues[6]}}</label><br><br>
        <input type="checkbox" id="categorie8" class ="checkboxes" v-model="categorieNames[7]" />
        <label for="alcohol">{{categorieValues[7]}}</label><br><br>
        <input type="checkbox" id="categorie9" class ="checkboxes" v-model="categorieNames[8]" />
        <label for="alcohol">{{categorieValues[8]}}</label><br><br>
        <input type="checkbox" id="categorie10" class ="checkboxes" v-model="categorieNames[9]" />
        <label for="alcohol">{{categorieValues[9]}}</label><br><br>
        <input type="checkbox" id="categorie11" class ="checkboxes" v-model="categorieNames[10]" />
        <label for="alcohol">{{categorieValues[10]}}</label><br><br>
      </div>
    </div>
    <hr>
    <div class = "glases">
      <h2>Gläser</h2>
      <div class = "attributes">
        <input type="checkbox" id="glas1" class ="checkboxes" v-model="glas1" />
        <label for="alcohol">{{glases[1]}}</label><br><br>
        <input type="checkbox" id="glas2" class ="checkboxes" v-model="glas2" />
       <label for="alcohol">{{glases[2]}}</label><br><br>
      </div>
    </div>
  </body>
</template>


<script>
//import Tile from './components/Tile.vue'
// @click=" $emit('getCategorie', this.categorie[0])"

export default {
  name: "FilterField",
  data: function () {
    return {
      alcohol: false,
      categorieNames: [], 
      glas1: false,
      glas2: false,

      hover: false,
      categorieValues:[],
      glases:[],
      categories: [],

      tempCategorie:{
        categorieValue: false,
        categorieName: '',
      },
    };
  },

  methods: {
    setCategoriesFalse(){
      for(let i = 0; i < 11; i++ ){
        this.categorieValues[i] = false;
      }
    },

    loadCategories() {
      let api =
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      this.axios.get(api).then((response) => {
        console.log(response.data);
        for(let i = 0; i< response.data.drinks.length ; i++){
          this.categories[i] = response.data.drinks[i].strCategory;
        }
      });      
    },
    loadGlases() {
      let api =
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list";
      this.axios.get(api).then((response) => {
        console.log(response.data);
        for(let i = 0; i< response.data.drinks.length ; i++){
          this.glases[i] = response.data.drinks[i].strGlass;
        }
      });      
    },

    fillCategories(){
        for(let i = 0; i < 11; i++ ){
          this.tempCategorie.categorieName = this.categorieNames[i];
          this.tempCategorie.categorieValue = this.categorieValues[i];
          this.categories[i] = this.tempCategorie;
        }
        console.log(this.categories);
    },

    updateCategories(){
      for(let i = 0; i< 11 ; i++){
        this.$emit('categorie1Selected', this.categorieValues[i], this.categorieNames[i]);
      }
    }
  },
  created: function () {
    this.loadCategories();
    this.loadGlases();
    this.setCategoriesFalse();
  },
  updated: function(){
    this.fillCategories();
    this.updateCategories();
  },
};
</script>


<style scoped>
.filter {
  border: 2px solid black;
  background-color: #9dfcecd0;
  display: table;
  flex-flow: column;
}

.heading{
  font-size: 14px;
}

div{
  padding: 0px 50px 0px 50px;
  margin-top: 20px;
  margin-bottom: 30px;
}

.attributes{
  text-align: left;
  padding: 0px 50px 0px 0px;
  font-size: 20px;
}

.checkboxes{
  width: 18px; height: 18px;
  margin-right: 10px;
  }

</style>