const knex = require('../db/knex.js');
module.exports = {
  // Gym page dislpay
  pageDisplay: function(req, res){
    if(!req.session.gym){
      req.session.gym = [];
    }


    knex('pokemon')
      .orderBy('id')
      .then((result)=>{
        res.render('gym', {firstPlayer: result, secondPlayer: result, players: req.session.gym});
      })

  },
  // Selecting 1st player
  playerOne: function(req, res){
    knex('pokemon')
      .where('id', req.body.id)
      .update({
        in_gym: 'true'
      })
      .then(()=>{
        req.session.gym.push(req.body.id);
        req.session.save(()=>{
          res.redirect('/gym');
        })

      })
  },
  // Selecting 2nd player
  playerTwo: function(req, res){
    knex('pokemon')
      .where('id', req.body.id)
      .update({
        in_gym: 'true'
      })
      .then(()=>{
        req.session.gym.push(req.body.id);
        req.session.save(()=>{
          res.redirect('/gym');
        })

      })
  },
  // Reseting gym
  resetGym: function(req, res){
    delete req.session.gym;

    knex('pokemon')
      .update({
        in_gym: 'false'
      })
      .then(()=>{
        req.session.save(() => {
          res.redirect('/gym');
        })
      })
  },
  // Battle
  battle: function(req, res){
    var player_One = req.session.gym[0];
    var player_Two = req.session.gym[1];
    knex('pokemon')
      .then((result)=>{
        var pokemonTable = result;
        
      })



  }







}
