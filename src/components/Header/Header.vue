<template>
  <body class = "header">
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
.header {
  float: center;
  width: fit-content;
  padding: 20px 50px 20px 50px;
  margin: 50px auto 50px auto;
  border-radius: 20px;
  background-color: #fff1d6d7;
}
</style>