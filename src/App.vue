<template>
  <div>
    <div class="backgroundImg"></div>
    <body class="main">
      <Header
        @searchFieldMessage="updateSearch"
        @selectedCocktailID="selectCocktail"
      />
      <Main :searchField="searchField" :randomCocktail="randomCocktail" />
      <Footer />
    </body>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Main from "./components/Main/Main.vue";
import Footer from "./components/Footer/Footer.vue";

export default {
  name: "App",
  data() {
    return {
      searchField: "",
      randomCocktail: 0,
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
    selectCocktail(id) {
      this.randomCocktail = id;
    },
  },
};
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: table;
  flex-flow: column;
}

.main {
  /* background-image: url("../content/strand-palmen-1.jpg");
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover; */
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
}

.backgroundImg {
  position: fixed;
  height: 3000px;
  width: 10000px;
  background-image: url("../content/strand-palmen-1.jpg");
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>
