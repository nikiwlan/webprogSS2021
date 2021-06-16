<template>
  <body>
    <h1>Cocktails4You</h1>
    <SearchField />
  </body>
</template>


<script>
import SearchField from "./SearchField.vue";

export default {
  name: "Header",
  components: {
    SearchField,
  },
};
</script>


<style scoped>
body {
  width: 300px;
  border: 15px black;
  padding: 50px;
  margin: 20px;
  border: 1px solid black;
  border-radius: 5px;
}
</style>