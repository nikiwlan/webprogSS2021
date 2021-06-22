<template>
  <div class="search-field">
    <input v-model="message" placeholder="Search Cocktail By Name" />
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
    searchFieldUpdate() {
      // Triggered when User enters search terms
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
  width: 100%;
  margin-bottom: 25px;
}
</style>