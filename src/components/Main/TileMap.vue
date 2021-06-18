<template>
  <body class = "view">
    <div class = "heading">
            <h2>Lass dich inspirieren</h2>
    </div>
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
  </body>
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
.view{
  float: center;
  width: fit-content;
  margin: auto;
  display: flex;
  justify-content: center;
}

.heading{
  position: absolute;
  font-size: 20px;
}

.tile-map {
  float: center;
  width:fit-content;
  margin: 50px auto auto auto;
  border: 15px black;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
}

</style>