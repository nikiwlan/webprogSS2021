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
    width: 300px;
    height: 600px;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 5px 5px darkgray;
}

img{
    width: 100%;
}

</style>
