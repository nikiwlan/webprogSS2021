# webprogss2021

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


-----------------------------------------------------------------------------------------------------
App running at:

- Local: http://localhost:8080/
- Network: http://192.168.178.21:8080/

URL zur Andwedung in der Cloud:

https://sharp-volhard-eda050.netlify.app

----------------------------------------------------------------------------------------------------

**Material**

- Volesungsinhalte Webprogrammierung (Marius Hofmeister)
- Stack overflow

links:

- https://stackoverflow.com/questions/49330055/how-to-include-a-cdn-to-vuejs-cli-without-npm-or-webpack
- https://www.youtube.com/watch?v=8Rmj5UY5mJk&list=PL4iZ5TIExu5siXdSNsyLIIJh0W6pAbAbj
- https://www.youtube.com/watch?v=qZXt1Aom3Cs&list=PL4iZ5TIExu5siXdSNsyLIIJh0W6pAbAbj&index=2
- https://www.youtube.com/watch?v=InoAIgBZIEA
- https://www.youtube.com/watch?v=4crYg6Wr0_k
- https://www.youtube.com/watch?v=8rn3SK4N8Go&t=6s
- https://www.youtube.com/watch?v=juocv4AtrHo&t=571s
- https://www.freecodecamp.org/news/how-to-deal-with-nested-callbacks-and-avoid-callback-hell-1bc8dc4a2012/
https://dev.to/nickparsons/javascript-promises-and-why-asyncawait-wins-the-battle-1g8a

-----------------------------------------------------------------------------------------------------

API:
- https://www.thecocktaildb.com/api.php

Free API Functions:
- Search cocktail by name
- Search ingredient by name
- List all cocktails by first letter
- Lookup full cocktail details by id
- Lookup ingredient by ID
- Lookup a random cocktail
- Search by ingredient
- Filter by alcoholic
- Filter by Category
- Filter by Glass
- List the categories, glasses, ingredients or alcoholic filters

-----------------------------------------------------------------------------------------------------
**Geplante Applikation:**

Features:
- all cocktails / get inspired
- Suche nach Cocktail name / Ingredient name
- Filter nach Categories / Alc
- Random Cocktail => roll the dice
- Anzeige Einzelner Cocktail mit Details

Components: 
- Kachel Cocktail
- Kacheln Feld 
- Suche/Titel
- Filter Funtionen
- Footer
- (Startbild)
- Cocktail Rezept mit Bild
- (Router)

Architecture:
- siehe StructureTree

-----------------------------------------------------------------------------------------------------
**End-Applikation:**

Struktur:
- **main.js** -> Eingang der Applikation
- **App** -> Aufruf der verschiednen Router
- **Views** -> beid Router "Details" und "Home"
- **Router** -> Definiton der Router
- **Main** -> Body der Hauptseite 
- **Header** -> Header Bereich der Applikation
- **Footer** -> Footer der Applikation (Wird in beiden Routern verwendet)
- **Content** -> Statischer Content

End-Architecture:
- Wie geplant strukturiert
- In kleine logische Components unterteilt (z.B. Home in Main, Header und Footer -> Main weiter unterteilt)
- Router im nachhinein hinzugefügt (App.vue routet zu Home.vue & Details.vue)
- Liste aller Cocktails wird einmal initial geladen (im Web-Cache für spätere Verwendung local gespeichert)
- Diese Liste wird für die Suchfunktion wie auch für alle Filter verwendet

Features: 
- alle geplanten features wurden umgesetzt

-----------------------------------------------------------------------------------------------------


**created by:**

Niklas Langes (32029) & Erik Cichy (32883)
