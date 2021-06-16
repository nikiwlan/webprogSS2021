<template>
  <div>
    <SearchField />
  </div>
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
div {
  width: 300px;
  border: 15px black;
  padding: 50px;
  margin: 20px;
}
</style>