
const pokemon = require("../controllers/pokemon.js")

module.exports = function(app){

  // Index page - it redirects to /pokemon
  app.get('/', pokemon.index);

  // Getting to pokemon Page
  app.get('/pokemon', pokemon.allPokemon);

  // Getting to create new pokemon page
  app.get('/newpokemon', pokemon.newPokemonPage);

  // Creating new pokemon
  app.post('/createpokemon', pokemon.createOne);

  // Pokemon profile
  app.get('/showpage/:id', pokemon.profile);

  // Getting to edit pokemon page
  app.get('/editpokemon/:id', pokemon.editPage);






}
