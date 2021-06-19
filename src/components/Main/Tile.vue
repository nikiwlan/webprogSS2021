<template>
  <div class="tile" @mouseover="hover = true" @mouseleave="hover = false">
    <div class="tile-image">
      <img
        id="cocktailImg"
        src="../../../content/Cocktail.jpg"
        alt="Cocktail"
      />
      <img
        id="alc-free"
        src="../../../content/AlcFree.png"
        alt="AlcFreeBanner"
      />
    </div>
    <div class="tile-body">
      <div class="cocktail-name">
        <h3>{{ BezeichnungCocktail }} Name des Cocktails laden</h3>
        <div>{{cocktail}}</div>
      </div>
      <div class="cocktail-adsfdsaf">
        <p class="cocktail-info">{{ AnzahlZutaten }} Zutaten</p>
        <p class="cocktail-info">{{ Kategorie }} Kategorie</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Tile",
  data() {
    return {
      hover: false,
      data: {
        cocktail: [],
      },
    };
  },
  methods: {
    mounted() {
      fetch("www.thecocktaildb.com/api/json/v1/1/lookup.php?i=1")
        .then((response) => response.json())
        .then((data) => {
          this.cocktail = data;
        });
    },
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
  width: 30%;
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