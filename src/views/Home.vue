<template>
  <div>
    <body class="main">
      <Header
        @searchFieldMessage="updateSearch"
        @selectedCocktailID="selected"
      />
      <Main :searchField="searchField" @selectedCocktailID="selected" />
      <Footer />
    </body>
  </div>
</template>

<script>
import Header from "../components/Header/Header.vue";
import Main from "../components/Main/Main.vue";
import Footer from "../components/Footer/Footer.vue";

export default {
  name: "Home",
  data() {
    return {
      searchField: "",
    };
  },
  components: {
    Header,
    Main,
    Footer,
  },

  methods: {
    // Triggered when Search Terms are changed
    updateSearch(message) {
      this.searchField = message;
    },
    
    // Triggered when User clicks on Tile or Dice Button
    selected(id) {
      this.$router.push({ name: "Details", params: { id: id } });
    },
  },
};
</script>

<style scoped>
.main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>