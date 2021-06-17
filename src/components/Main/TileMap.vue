<template>
    <div class = "tile-map">
        <div id = "line1">
          <Tile><h1>Hello World</h1></Tile>
          <Tile><h1>Hello World</h1></Tile>
        </div>
        <div id = "line2">
          <Tile><h1>Hello World</h1></Tile>
          <Tile><h1>Hello World</h1></Tile>
        </div>
        <div id = "line3">
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
  margin: 0px 0px 50px 0px;
  width: 100%;
  float: center;
  border: 15px black;
  padding: 50px;
  display: flex;
  flex-flow: row;
}

#line1{
  float: center;
  width: 320px;
}

#line2{
  float: center;
  width: 320px;
}

#line3{
  float: center;
  width: 320px;
}

</style>