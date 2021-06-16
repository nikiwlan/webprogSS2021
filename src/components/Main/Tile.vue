<template>
    <div class= "tile">
        <div class = "tile-image">

        </div>  
        <div>
            <img id = "alc-free"  src="../../../content/AlcFree.jpg" alt="Cocktail">
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

.tile-image{
    background-image: url('../../../content/AlcFree.jpg') ;
    background-repeat: no-repeat;
    background-attachment:scroll;
    background-size:cover;
    padding: 20px;
    padding-bottom: 10px;
    width: 200px;
    height: 230px;
    margin: 20px;
    border-radius: 20px;
}

cocktail-info{
    float: left;
    width: 200px;
    height: 100px;
    padding: 20px;
}

#alc-free{
    width: 40%;
}

</style>