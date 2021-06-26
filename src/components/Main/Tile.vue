<template>
  <div
    class="tile"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    @click="loadCocktail()"
  >
    <div class="tile-image">
      <img id="cocktailImg" :src="cocktail.srcImg" alt="Cocktail" />
      <img
        v-if="cocktail.alc != 'Alcoholic'"
        id="alc-free"
        src="../../../content/AlcFree.png"
        alt="AlcFreeBanner"
      />
    </div>
    <div class="tile-body">
      <div class="cocktail-name">
        <h3>{{ cocktail.name }}</h3>
      </div>
      <div class="cocktail-bottom">
        <p class="cocktail-info">{{ cocktail.ingredients.length }} Ingredients</p>
        <p class="cocktail-info">{{ cocktail.category }}</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Tile",
  props: ["cocktail"],
  data() {
    return {
      hover: false,
    };
  },
  methods: {

    // triggered when User clicks on this Tile
    loadCocktail() {
      this.$emit("selectedCocktailID", this.cocktail.id);
    },
  },
};
</script>


<style scoped>
.tile {
  float: left;
  width: 280px;
  height: 380px;
  margin: 40px;
  border-radius: 10px;
  box-shadow: 5px 5px darkgray;
  text-align: left;
  background-color: #9dfcecd0;
  /* #fcdb9d */
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
  color: white;
  font-size: 18px;
  background-color: #ff6469d8;
  border-radius: 10px;
  padding: 0px 5px 0px 5px;
  margin-top: 205px;
  position: absolute;
  max-width: 200px;
  margin: 200px auto auto 20px;
}

.tile-image {
  display: grid;
  width: 280px;
  height: 280px;
  position: absolute;
  overflow: hidden;
  border-radius: 10px 10px 0px 0px;
}

.tile-image:hover {
  background-size: 160%;
}

.cocktail-info {
  text-align: center;
  float: left;
  width: 40%;
  height: 100px;
  margin-top: 320px;
  padding-left: 25px;
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