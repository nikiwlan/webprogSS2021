<template>
  <div>
      <div class="backgroundImg"></div>
    <div class="nav">
      <router-link :to="{ name: 'Home' }"> Home</router-link>
      <router-link :to="{ name: 'Details' }">Details</router-link>
    </div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
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
    Footer,
  },
};
</script>

<style>
/* body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: table;
  flex-flow: column;
} */

.backgroundImg {
  position: fixed;
  height: 3000px;
  width: 10000px;
  background-image: url("../content/strand-palmen-1.jpg");
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  z-index: -1;
}
</style>
