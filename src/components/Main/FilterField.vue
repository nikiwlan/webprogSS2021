<template>
  <body class = "filter">
    <h1>Filter</h1>
    <input type="checkbox" id="alcohol" v-model="alcohol" />
    <label for="alcohol">alkoholfrei ?</label>
  </body>
</template>


<script>
//import Tile from './components/Tile.vue'

export default {
  name: "FilterField",
  data: function () {
    return {
      alcohol: false,
    };
  },
};
</script>


<style scoped>
.filter {
  border: 2px solid black;
  background-color: #9dfcec5d;
  display: table;
  flex-flow: column;
}
</style>