<template>
  <body>
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
body {
  border: 1px solid black;
  border-radius: 5px;
  flex-direction: column;
}
</style>