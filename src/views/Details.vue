<template>
  <div>
    <body class="main">
      <h1 class="header" @click="goBack()">Cocktails4You</h1>
      <CocktailDetails class="cocktailDetails" :selectedID="selectedID" />
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
  margin: auto;
  width: fit-content;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: table;
  border-radius: 20px;
}

.header {
  float: center;
  width: fit-content;
  padding: 20px 50px 20px 50px;
  margin: 50px auto 50px auto;
  border-radius: 20px;
  background-color: #fff1d6d7;
  font-style:italic;
}
.header:hover {
  background-color: #d4cab3d7;
  box-shadow: 3px 3px rgb(117, 117, 117);
}
</style>