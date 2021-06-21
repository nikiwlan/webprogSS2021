<template>
  <body>
    <FilterField @categoriesSelected="getCategorie1" />
    <TileMap :categories="categories" :searchField="searchField" />
  </body>
</template>


<script>
import TileMap from "./TileMap.vue";

import FilterField from "./FilterField.vue";

export default {
  name: "Main",
  data: () => {
    return {
      categories: [],
    };
  },
  props: ["searchField"],
  components: {
    TileMap,
    FilterField,
  },
  methods: {
    getCategorie1(cat) {
      this.categories = [0];
      let index = 0;
      for (let i = 0; i < 11; i++) {
        if (cat[i].categorieValue == true) {
          this.categories[index] = cat[i].categorieName;
          index++;
        }
      }
    },
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