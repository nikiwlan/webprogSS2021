<template>
  <body>
    <FilterField />
    <TileMap />
  </body>
</template>


<script>
import TileMap from "./TileMap.vue";

import FilterField from "./FilterField.vue";

export default {
  name: "Main",
  components: {
    TileMap,
    FilterField,
  },
};
</script>


<style scoped>
body {
  width:fit-content;
  border: 15px black;
  padding: 50px;
  margin: 20px;
  float: left;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-flow: row;
}
</style>