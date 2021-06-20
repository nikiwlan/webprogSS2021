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
        <input type="checkbox" id="categorie1" class ="checkboxes" v-model="categorie1" @select="$emit('categorie1Selected', categorie1)" />
        <label for="alcohol">{{categories[0]}}</label><br><br>
        <input type="checkbox" id="categorie2" class ="checkboxes" v-model="categorie2" />
        <label for="alcohol">{{categories[1]}}</label><br><br>
        <input type="checkbox" id="categorie3" class ="checkboxes" v-model="categorie3" />
        <label for="alcohol">{{categories[2]}}</label><br><br>
        <input type="checkbox" id="categorie4" class ="checkboxes" v-model="categorie4" />
        <label for="alcohol">{{categories[3]}}</label><br><br>
        <input type="checkbox" id="categorie5" class ="checkboxes" v-model="categorie5" />
        <label for="alcohol">{{categories[4]}}</label><br><br>
        <input type="checkbox" id="categorie6" class ="checkboxes" v-model="categorie6" />
        <label for="alcohol">{{categories[5]}}</label><br><br>
        <input type="checkbox" id="categorie7" class ="checkboxes" v-model="categorie7" />
        <label for="alcohol">{{categories[6]}}</label><br><br>
        <input type="checkbox" id="categorie8" class ="checkboxes" v-model="categorie8" />
        <label for="alcohol">{{categories[7]}}</label><br><br>
        <input type="checkbox" id="categorie9" class ="checkboxes" v-model="categorie9" />
        <label for="alcohol">{{categories[8]}}</label><br><br>
        <input type="checkbox" id="categorie10" class ="checkboxes" v-model="categorie10" />
        <label for="alcohol">{{categories[9]}}</label><br><br>
        <input type="checkbox" id="categorie11" class ="checkboxes" v-model="categorie11" />
        <label for="alcohol">{{categories[10]}}</label><br><br>
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

export default {
  name: "FilterField",
  data: function () {
    return {
      alcohol: false,
      categorie1: false,
      categorie2: false,
      categorie3: false,
      categorie4: false,
      categorie5: false,        
      categorie6: false,
      categorie7: false,
      categorie8: false,
      categorie9: false,
      categorie10: false,
      categorie11: false,         
      glas1: false,
      glas2: false,

      hover: false,
      categories:[],
      glases:[],
    };
  },

  methods: {
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
    updateCategories(){
      if(this.categorie1){
        this.$emit('categorie1-selected', this.categorie1);
      }
    }
  },
  created: function () {
    this.loadCategories();
    this.loadGlases();
  },
  updated: function(){
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