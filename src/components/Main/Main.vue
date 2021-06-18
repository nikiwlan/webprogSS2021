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
  width: auto;
  border: 15px black;
  padding: 50px;
  margin: 20px;
  border-radius: 5px;
  display: flex;
  flex-flow: row;
  background-color:#fff1d6d7;
}

</style>