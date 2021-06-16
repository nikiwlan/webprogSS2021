<template>
  <body>
    <h1>Cocktails4You</h1>
    <SearchField />
    <button v-on:click="rollTheDice()">Random Cocktail</button>
  </body>
</template>


<script>
import SearchField from "./SearchField.vue";

export default {
  name: "Header",
  components: {
    SearchField,
  },
  methods: {
    rollTheDice() {
      alert("Roll the Dice")
    },
  },
};
</script>


<style scoped>
body {
  width: fit-content;
  border: 15px black;
  padding: 50px;
  margin: 20px;
  border: 1px solid black;
  border-radius: 5px;
}
</style>