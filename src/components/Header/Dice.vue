<template>
  <div class="dice">
    <button
      class="diceButton"
      v-on:click="rollTheDice()"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <img
        id="diceImg"
        v-if="hover"
        src="../../../content/dice-icon-png-25.png"
        alt="DiceAction"
      />
      <img
        id="diceImg"
        v-else
        src="../../../content/dice-icon-png-26.png"
        alt="DiceStill"
      />
    </button>
  </div>
</template>


<script>
export default {
  name: "Dice",
  data() {
    return {
      hover: false,
    };
  },
  methods: {
    rollTheDice() {
      alert("Rolled the Dice");
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