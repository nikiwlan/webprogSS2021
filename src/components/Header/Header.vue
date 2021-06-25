<template>
  <div class="outer-padding">
    <body class="header">
        <h1 id="heading">Cocktails4You</h1>
        <SearchField @searchFieldMessage="updateSearch" />
        <Dice @selectedCocktailID="selectCocktail" />
    </body>
  </div>
</template>


<script>
import SearchField from "./SearchField.vue";
import Dice from "./Dice.vue";

export default {
  name: "Header",
  components: {
    SearchField,
    Dice,
  },
  methods: {
    updateSearch(message) {
      // Triggered when Search Field is changed
      this.$emit("searchFieldMessage", message);
    },
    selectCocktail(id) {
      // Triggered when Dice Button is clicked
      this.$emit("selectedCocktailID", id);
    },
  },
};
</script>


<style scoped>
.header {
  float: center;
  width: fit-content;
  padding: 20px 50px 20px 50px;
  margin: auto auto 50px auto;
  border-radius: 20px;
  background-color: #fff1d6d7;
  font-style: italic;
}

.outer-padding {
  padding: 50px;
}

#heading{
  text-align: center;
}


</style>