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
    margin: auto;
  display: flex;
  justify-content: center;
  width: auto;
  border: 15px black;
  margin: 20px;
  border-radius: 5px;
  display: flex;
  flex-flow: row;
}

</style>