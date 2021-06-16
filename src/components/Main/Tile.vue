<template>
    <div class= "tile">
        <div class = "tile-image">
            <img src="../../../content/AlcFree.jpg" alt="Cocktail">
        </div>  
        <div class= "tile-body">
            <div class = "cocktail-name">
                <h3>{{BezeichnungCocktail}} Name</h3>
            </div>
            <div class = "cocktail-info">
                <p>{{AnzahlZutaten}} Zutaten</p>
                <p>{{Kategorie}}</p>
            </div>
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
    height: 150px;
    margin-top: 150px;
    padding: 20px;
}

.cocktail-name{
    float: left;
    width: 200px;
    height: 50px;
    padding: 20px;
}

cocktail-info{
    float: left;
    width: 200px;
    height: 100px;
    padding: 20px;
}

img{
    width: 100%;
}

</style>