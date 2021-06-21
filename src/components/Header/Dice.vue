<template>
  <div class="dice">
    <button
      class="diceButton"
      v-on:click="rollTheDice()"
      @mouseover="img = imgHover"
      @mouseleave="img = imgDefault"
    >
      <img id="diceImg" :src="img" alt="Dice" />
    </button>
  </div>
</template>


<script>
export default {
  name: "Dice",
  data() {
    return {
      name: "",
      imgHover: require("../../../content/dice-icon-png-25.png"),
      imgDefault: require("../../../content/dice-icon-png-26.png"),
      img: require("../../../content/dice-icon-png-26.png"),
    };
  },
  methods: {
    rollTheDice() {
      let api = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
      this.axios.get(api).then((response) => {
        console.log(response.data);
        this.$emit("selectedCocktailID", response.data.drinks[0].idDrink);
      });
    },
  },
};
</script>


<style scoped>
.diceButton {
  background-color: #9dfcec5d;
}
#diceImg {
  width: 30%;
  height: 30%;
}
</style>