<template>
  <div>
    <FilterField />
    <TileMap />
  </div>
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
div {
  width: 300px;
  border: 15px black;
  padding: 50px;
  margin: 20px;
}
</style>