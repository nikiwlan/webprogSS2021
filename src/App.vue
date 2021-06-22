<template>
  <div>
    <div class="backgroundImg"></div>
    <button class="TESTbttn" v-on:click="goToDetails()">Next Page</button>
    <div class="nav">
      <!-- <router-link :to="{ name: 'Home' }"> Home</router-link> -->
      <router-link :to="{ name: 'Details', params: { id: 11007 } }">
        <!--cocktailID hier-->
        <p>da wo ich drauf klicke</p>
      </router-link>
    </div>
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
  methods: {
    goToDetails() {
      console.log("CLICK   s");
      this.$router.push({ name: "Details" });
      //this.$router.push('/details');
    },
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

.TESTbttn {
  height: 300px;
  width: 100px;
  z-index: 10;
}
</style>
