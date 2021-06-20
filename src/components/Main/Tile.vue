<template>
  <div
    class="tile"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    v-on:click="loadCocktail()"
  >
    <div class="tile-image">
      <img id="cocktailImg" :src="srcImg" alt="Cocktail" />
      <img
        v-if="!alcoholic"
        id="alc-free"
        src="../../../content/AlcFree.png"
        alt="AlcFreeBanner"
      />
    </div>
    <div class="tile-body">
      <div class="cocktail-name">
        <h3>{{ name }}</h3>
      </div>
      <div class="cocktail-adsfdsaf">
        <p class="cocktail-info">{{ AnzahlZutaten }} Zutaten</p>
        <p class="cocktail-info">{{ cat }}</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Tile",
  data() {
    return {
      alcoholic: true,
      hover: false,
      cocktail: [],
      name: "",
      cat: "",
      srcImg: require("../../../content/Cocktail.jpg"),
      ingredients: [],
      AnzahlZutaten: 0,
    };
  },
  methods: {
    loadName() {
      let api = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
      this.axios.get(api).then((response) => {
        console.log(response.data);
        this.cocktail = response.data;
        this.name = this.cocktail.drinks[0].strDrink;
        this.cat = this.cocktail.drinks[0].strCategory;
        if (this.cocktail.drinks[0].strAlcoholic != "Alcoholic") {
          this.alcoholic = false;
        }
        this.srcImg = this.cocktail.drinks[0].strDrinkThumb;
        this.initIngredients();
      });
    },
    initIngredients() {
      this.setIngredient(this.cocktail.drinks[0].strIngredient1);
      this.setIngredient(this.cocktail.drinks[0].strIngredient2);
      this.setIngredient(this.cocktail.drinks[0].strIngredient3);
      this.setIngredient(this.cocktail.drinks[0].strIngredient4);
      this.setIngredient(this.cocktail.drinks[0].strIngredient5);
      this.setIngredient(this.cocktail.drinks[0].strIngredient6);
      this.setIngredient(this.cocktail.drinks[0].strIngredient7);
      this.setIngredient(this.cocktail.drinks[0].strIngredient8);
      this.setIngredient(this.cocktail.drinks[0].strIngredient9);
      this.setIngredient(this.cocktail.drinks[0].strIngredient10);
      this.setIngredient(this.cocktail.drinks[0].strIngredient11);
      this.setIngredient(this.cocktail.drinks[0].strIngredient12);
      this.setIngredient(this.cocktail.drinks[0].strIngredient13);
      this.setIngredient(this.cocktail.drinks[0].strIngredient14);
      this.setIngredient(this.cocktail.drinks[0].strIngredient15);

      console.log(this.ingredients);
    },
    setIngredient(Ing) {
      if (Ing != null) {
        this.ingredients[this.AnzahlZutaten] = Ing;
        this.AnzahlZutaten++;
      }
    },
    loadCocktail() {
      alert("TODO: Cocktail Details für " + this.name + " anzeigen");
    },
  },
  created: function () {
    this.loadName();
  },
};
</script>


<style scoped>
.tile {
  float: left;
  width: 250px;
  height: 350px;
  margin: 40px;
  border-radius: 10px;
  box-shadow: 5px 5px darkgray;
  text-align: left;
  background-color: #fcdb9d;
}

.tile:hover {
  transform: scale(1.01);
}

.tile:hover {
  box-shadow: 5px 5px rgb(117, 117, 117);
}

.tile-body {
  float: left;
  width: 250px;
  height: 10px;
  margin-bottom: 50px;
  text-align: center;
}

.cocktail-name {
  background-color: rgba(0, 238, 255, 0.8);
  border-radius: 20px;
  color: black;
  width: 170px;
  padding: 0px 20px 0px 20px;
  margin-top: 220px;
  position: absolute;
  margin-left: 20px;
}

.tile-image {
  display: grid;
  width: 250px;
  height: 280px;
  position: absolute;
  overflow: hidden;
  border-radius: 10px 10px 0px 0px;
}

.tile-image:hover {
  background-size: 160%;
}

.cocktail-info {
  float: left;
  width: 40%;
  height: 100px;
  margin-top: 320px;
  padding-left: 15px;
}

#alc-free {
  z-index: 1;
  grid-column: 1;
  grid-row: 1;
  width: 20%;
  padding: 10px;
  margin-right: 125px;
}

#cocktailImg {
  grid-column: 1;
  grid-row: 1;
  height: 280px;
  transition: transform 0.5s ease;
}

.tile:hover .tile-image #cocktailImg {
  transform: scale(1.2);
}
</style>