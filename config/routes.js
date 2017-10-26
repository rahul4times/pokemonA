
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



  // User login
  // app.post('/login', user.login);
  //
  // // User registration
  // app.post('/register', register.createUser);
  //
  //
  //
  // // After login user will be redirected to profile
  // app.get('/profile', profile.userProfile);
  //
  // // logout
  // app.get('/logout', logout.getOut);


}
