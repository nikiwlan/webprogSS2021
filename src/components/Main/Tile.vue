<template>
    <div class= "tile">
        <div class = "tile-image">
            <img id = "alc-free"  src= "../../../content/AlcFree.png" alt="Cocktail">
        </div>
        <div class= "tile-body">
            <div class = "cocktail-name">
                <h3>{{BezeichnungCocktail}} Name des Cocktails laden </h3>
            </div>  
            <div class = "cocktail-adsfdsaf">
                <p class = "cocktail-info"> {{AnzahlZutaten}} Zutaten</p>
                <p class = "cocktail-info">{{Kategorie}} Kategorie</p>
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
    width: 250px;
    height: 350px;
    margin: 40px;
    border-radius: 10px;
    box-shadow: 5px 5px darkgray;
    text-align: left;
}

.tile-body {
    float: left;
    width: 250px;
    height: 10px;
    margin-bottom: 50px;
    text-align: center;
}

.cocktail-name{

    background-color: rgb(0, 238, 255);
    border-radius: 20px;
    color: black;
    width: 170px;
    padding: 0px 20px 0px 20px;
    margin-top: 220px;
    position: absolute;
    margin-left: 20px;
}

.tile-image{
    background-image: url('../../../content/Cocktail.jpg') ;
    background-repeat: no-repeat;
    background-attachment:scroll;
    background-size:cover;
    width: 250px;
    height: 280px;
    position: absolute;

    border-radius: 10px 10px 0px 0px;
}

.cocktail-info{
    float: left;
    width: 40%;
    height: 100px;
    margin-top: 320px;
    padding-left: 15px;
}

#alc-free{
    width: 40%;
    padding: 10px;
    margin-right: 125px;
}

</style>