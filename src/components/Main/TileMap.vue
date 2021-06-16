<template>
    <div class = "tile-map">
        <div class = "tile-line">
        <Tile><h1>Hello World</h1></Tile>
        <Tile><h1>Hello World</h1></Tile>
        <Tile><h1>Hello World</h1></Tile>
        </div>
        <div>
        <Tile><h1>Hello World</h1></Tile>
        <Tile><h1>Hello World</h1></Tile>
        <Tile><h1>Hello World</h1></Tile>
        </div>
    </div>
</template>


<script>
import Tile from './Tile.vue'

export default {
  name: 'TileMap',
  components: {
      Tile,
  }
}
</script>


<style scoped>
.tile-map {
  width: 300px;
  border: 15px black;
  padding: 50px;
  margin: 20px;
  float: left;
  display: flex;
  flex-flow: row;
}
</style>