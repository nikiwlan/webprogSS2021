<template>
  <body class = "view">
    <div class = "heading">
            <h2>Lass dich inspirieren {{cat}}</h2>
    </div>
    <div class = "tile-map">
        <div id = "line1">
          <Tile><h1>Hello World</h1></Tile>
          <Tile><h1>Hello World</h1></Tile>
        </div>
        <div id = "line2">
          <Tile><h1>Hello World</h1></Tile>
          <Tile><h1>Hello World</h1></Tile>
        </div>
        <div id = "line3">
          <Tile><h1>Hello World</h1></Tile>
          <Tile><h1>Hello World</h1></Tile>
        </div>
    </div>
  </body>
</template>


<script>
import Tile from './Tile.vue'

export default {
  name: 'TileMap',
  components: {
      Tile,
  },
  props:[
    'cat'
  ],
  methods:{

    updateCategories(){
      if(this.cat){
        this.loadCategorie1();
        console.log(this.cat.categorieName);
      }
    },

      loadCategorie1() {
      let api =
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink";
      this.axios.get(api).then((response) => {
        console.log(response.data);
        for(let i = 0; i< response.data.drinks.length ; i++){
          this.categorie1[i] = response.data.drinks[i].strGlass;
        }
      });
      },   
  },
    updated: function(){
    this.updateCategories();
  },
}
</script>

<style scoped>
.view{
  padding: 50px;
  float: center;
  width: fit-content;
  background-color:#fff1d6d7;
}

.heading{
  position: absolute;
  font-size: 20px;
}

.tile-map {
  float: center;
  width:fit-content;
  margin: 50px auto auto auto;
  border: 15px black;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
}

</style>