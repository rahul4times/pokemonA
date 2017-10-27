const knex = require('../db/knex.js');
module.exports = {
  //redirecting to /pokemon
  index: function(req, res){

    res.redirect('/pokemon')
  },
  // displaying all pokemon
  allPokemon: function(req, res){
    knex('pokemon')
    .orderBy('id')
      .then((result)=>{
        res.render('pokemon', {pokemonList: result});
      })
  },
  // create pokemon page
  newPokemonPage: function(req, res){
    knex('trainers')
      .then((result)=>{
        res.render('newpokemon', {trainerList: result});
      })

  },
  // adding new pokemon
  createOne: function(req, res){
    knex('pokemon')
      .insert({
        name: req.body.name,
        cp: req.body.cp,
        in_gym: req.body.in_gym,
        trainer_id: req.body.trainer_id
      })
      .then(()=>{
        res.redirect('/pokemon');
      })
  },
  // one pokemon profile
  profile: function(req, res){
    knex('pokemon')
      .select('pokemon.name as pname', 'pokemon.cp as pcp',
              'pokemon.in_gym as pingym', 'trainers.name as tname')
      .join('trainers', 'pokemon.trainer_id', 'trainers.id')
      .where('pokemon.id', req.params.id)
      .then((result)=>{

        res.render('show', {onePokemon: result[0]});
      })
  },
  // Getting to edit pokemon page
  editPage: function(req, res){
    knex('pokemon')
      .where('id', req.params.id)
      .then((pokemon)=>{
        knex('trainers')
          .then((trainers)=>{
            console.log(pokemon);
            console.log(trainers);
            res.render('editpokemon', {pokemon: pokemon[0], trainers: trainers});
          })
      })
  },
  // Updating pokemon
  edit: function(req, res){
    knex('pokemon')
      .where('id', req.params.id)
        .update({
          name: req.body.name,
          cp: req.body.cp,
          in_gym: req.body.in_gym,
          trainer_id: req.body.trainer_id
        })
        .then(()=>{
          res.redirect('/showpage/'+ req.params.id);
        })
  },
  // Removing pokemon
  remove: function(req, res){
    knex('pokemon')
      .where('id', req.params.id)
      .del()
      .then(()=>{
        res.redirect('/pokemon');
      })
  }






}
