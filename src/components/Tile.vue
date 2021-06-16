<template>
    <div class= "tile">
        <div class = "tile-image">
            <img src="imageoftheCokctail" alt="Cocktail">
        </div>  
        <div class= "tile-body">
            <h3>{{BezeichnungCocktail}}</h3>
            <p>{{AnzahlZutaten}} Zutaten</p>
            <p>{{Kategorie}}</p>
        </div>
    </div>  
</template>


<script>

export default {
  name: 'Tile',
//   components: {    
//   }
}
</script>


<style scoped>

.tile {
    float: left;
    width: 200px;
    height: 300px;
    margin: 40px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 5px 5px darkgray;
}

.tile-body {
    float: left;
    width: 200px;
    height: 100px;
    margin-top: 200px;
    padding: 20px;
}

img{
    width: 100%;
}

</style>
