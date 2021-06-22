<template>
  <div>
    <div class="backgroundImg"></div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      searchField: "",
      randomCocktail: 0,
    };
  },
};
</script>

<style>
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
