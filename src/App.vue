<template>
  <div>
    <h1> Hello World</h1>
    <TileMap><h1> Hello World</h1></TileMap>
    <SearchField><h1> Hello World</h1></SearchField>
    <FilterField><h1> Hello World</h1></FilterField>
    <Footer><h1> Hello World</h1></Footer>
  </div>
</template>

<script>

import TileMap from './components/TileMap.vue'
import SearchField from './components/SearchField.vue'
import FilterField from './components/FilterField.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
      TileMap,
      SearchField,
      FilterField,
      Footer,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
