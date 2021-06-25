<template>
  <div class="search-field">
    <input v-model="message" placeholder="Search for Cocktail / Ingredient by Name" />
  </div>
</template>


<script>

export default {
  name: "SearchField",
  data: function () {
    return {
      message: "",
    };
  },

  methods: {

    // Triggered when User enters search terms
    searchFieldUpdate() {
      this.$emit("searchFieldMessage", this.message);
    },
  },
  updated: function () {
    this.searchFieldUpdate();
  },
};
</script>


<style scoped>

input {
  padding-left: 10px;
  font-size: 16px;
  height: 40px;
  width: 95%;
  margin-bottom: 25px;
}
</style>