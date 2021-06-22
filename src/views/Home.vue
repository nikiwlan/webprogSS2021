<template>
  <div>
    <body class="main">
      <Header @searchFieldMessage="updateSearch" @selectedCocktailID="random" />
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
      selectedID: 0,
    };
  },
  components: {
    Header,
    Main,
    Footer,
  },
  methods: {
    updateSearch(message) {
      this.searchField = message;
    },
    random(id) {
      this.selectedID = id;
    },
    selected(id) {
      this.selectedID = id;
    },
  },
};
</script>

<style scoped>
.main {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: table;
  flex-flow: column;
}
</style>