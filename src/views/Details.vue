<template>
  <div>
    <body class="main">
      <h1 class="header" @click="goBack()">Cocktails4You</h1>
      <CocktailDetails class="cocktailDetails" :selectedID="selectedID" />
      <div class="view-coktail">
        <p>The cocktail ID: {{ selectedID }}</p>
      </div>
      <Footer />
    </body>
  </div>
</template>

<script>
import Footer from "../components/Footer/Footer.vue";
import CocktailDetails from "../components/Main/CocktailDetails.vue";

export default {
  name: "Details",
  // props: ['selectedID'],
  data() {
    return {
      selectedID: this.$route.params.id,
    };
  },
  components: {
    Footer,
    CocktailDetails,
  },
  methods: {
    goBack() {
      this.$router.push({ name: "Home" });
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

.header {
  float: center;
  width: fit-content;
  padding: 20px 50px 20px 50px;
  margin: 50px auto 50px auto;
  border-radius: 20px;
  background-color: #fff1d6d7;
}
</style>