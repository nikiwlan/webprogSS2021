<template>
  <div class="search-field">
    <input v-model="message" placeholder="edit me" />
    <p>Message is: {{ message }}</p>
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
};
</script>


<style scoped>
</style>