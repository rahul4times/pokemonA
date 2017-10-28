const knex = require('../db/knex.js');
module.exports = {
  // Gym page dislpay
  pageDisplay: function(req, res){
    if(!req.session.gym){
      req.session.gym = [];
    }
    if(!req.session.winner){
      req.session.winner = [];
    }

    knex('pokemon')
      .orderBy('id')
      .then((result)=>{
        res.render('gym', {firstPlayer: result, secondPlayer: result, players: req.session.gym, winner: req.session.winner});
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
    delete req.session.winner;

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
  //Battle
  battle: function(req, res){
    var player_one = req.params.fpid;
    var player_two = req.params.spid;
    var firstPlayerInfo = [];
    var secondPlayerInfo = [];

    knex('pokemon')
      .then((result)=>{

        var pokemonTable = result;

        for(let i=0; i<pokemonTable.length; i++){
          if(pokemonTable[i].id === parseInt(player_one)){
            firstPlayerInfo.push(pokemonTable[i]);
          }
        }

        for(let j=0; j<pokemonTable.length; j++){
          if(pokemonTable[j].id = player_two){
            secondPlayerInfo.push(pokemonTable[j])
          }
        }

        if(firstPlayerInfo[0].cp > secondPlayerInfo[0].cp){
          req.session.winner.push(firstPlayerInfo[0].name);
        } else{
          req.session.winner.push(secondPlayerInfo[0].name);
        }

        req.session.save(()=>{
          res.redirect('/gym');
        })

      })




  }





}
