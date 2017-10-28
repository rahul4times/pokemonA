
const pokemon = require("../controllers/pokemon.js");
const trainers = require("../controllers/trainers.js");
const gym = require("../controllers/gym.js");

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

  // Edit pokemon
  app.post('/editp/:id', pokemon.edit);

  // Delete pokemon
  app.get('/delete/:id', pokemon.remove);

  // Displaying trainers page
  app.get('/trainers', trainers.all);

  // Displaying trainers profile
  app.get('/trainershow/:id', trainers.oneTrainer);

  // Adding to gym
  app.get('/addtogym/:id', pokemon.addToGym);

  // Removing from gym
  app.get('/removefromgym/:id', pokemon.removeFromGym);

  // Getting to gym page
  app.get('/gym', gym.pageDisplay);

  // Selecting 1st player
  app.post('/selectplayerone', gym.playerOne);

  // Selecting 2nd player
  app.post('/selectplayertwo', gym.playerTwo);

  // Reseting Gym
  app.get('/resetgym', gym.resetGym);

  // Battle
  app.get('/battle/:fpid/:spid', gym.battle);
}
