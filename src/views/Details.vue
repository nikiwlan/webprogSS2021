<template>
  <div>
    <body class="main">
      <CocktailDetails
        class="cocktailDetails"
        :selectedID="selectedID"
        @selectedCocktailID="goBack"
      />
      <div class="view-coktail"></div>
      <Footer />
    </body>
  </div>
</template>

<script>
import Footer from "../components/Footer/Footer.vue";
import CocktailDetails from "../components/Main/CocktailDetails.vue";

export default {
  name: "Details",
  data() {
    return {
      selectedID: 0,
    };
  },
  components: {
    Footer,
    CocktailDetails,
  },
  methods: {
    goBack(id) {
      this.randomCocktail = id;
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