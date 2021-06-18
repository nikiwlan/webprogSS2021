<template>
  <body class="main">
    <Header />
    <Main />
    <Footer />
  </body>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Main from "./components/Main/Main.vue";
import Footer from "./components/Footer/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
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
  background-image: url("../content/strand-palmen-1.jpg");
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>
