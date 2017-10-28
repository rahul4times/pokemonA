const knex = require('../db/knex.js');
module.exports = {
  //redirecting to /pokemon
  index: function(req, res){

    res.redirect('/pokemon')
  },
  // displaying all pokemon
  allPokemon: function(req, res){
    if(!req.session.gym){
      req.session.gym = [];
    }
    //var msg = req.session.msg;
    knex('pokemon')
    .orderBy('id')
      .then((result)=>{
        res.render('pokemon', {pokemonList: result, gym: req.session.gym});
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
            var otherTrainers = trainers;
            var currentTrainer = [];
            for(let i=0; i<otherTrainers.length; i++){
              if(otherTrainers[i].id === pokemon[0].trainer_id){

                // This displying pokemon current trainer only
                currentTrainer.push(otherTrainers[i]);

                // This removes current trainer and displying rest in drop box
                otherTrainers.splice(i, 1);
              }
            }
            res.render('editpokemon', {pokemon: pokemon[0], trainers: otherTrainers, pokemonTrainer: currentTrainer[0]});
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
  },
  // Assign to gym
  addToGym: function(req, res){
    knex('pokemon')
      .where('id', req.params.id)
      .update({
        in_gym: 'true'
      })
      .then(()=>{
        req.session.gym.push(req.params.id);
        res.redirect('/pokemon');
        //console.log(req.session.gym);
      })

  },
  // Removes from gym
  removeFromGym: function(req, res){
    var gym = req.session.gym;
    console.log(gym.length);
    for(let i=0; i<gym.length; i++){
      if(gym[i] === req.params.id){
        gym.splice(i, 1);
      }
    }

    knex('pokemon')
      .where('id', req.params.id)
      .update({
        in_gym: 'false'
      })
      .then(()=>{
        console.log(req.session.gym);
        req.session.save(() => {
          res.redirect('/pokemon');
        })
      })

  }







}
