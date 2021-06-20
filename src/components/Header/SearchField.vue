<template>
  <div class="search-field">
    <input v-model="message" placeholder="Search Cocktail By Name" />
    <p>Cocktail: {{ message }}</p>
  </div>
</template>


<script>
//import Tile from './components/Tile.vue'

export default {
  name: "SearchField",
  components: {
    //     Tile,
  },
  props: {},
  data: function () {
    return {
      message: "",
    };
  },

  methods: {
    searchFieldUpdate() {
      this.$emit("searchFieldMessage", this.message);
    },
  },
  updated: function () {
    this.searchFieldUpdate();
  },
};
</script>


<style scoped>
</style>