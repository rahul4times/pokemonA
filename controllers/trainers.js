const knex = require('../db/knex.js');
module.exports = {
  // This displaying all trainers
  all: function(req, res){
    knex('trainers')
      .orderBy('id')
        .then((result)=>{
          res.render('trainers', {trainersList: result});
        })
  },
  // This displaying one trainer with its pokemon
  oneTrainer: function(req, res){
    knex('trainers')
      .where('id', req.params.id)
      .then((trainers)=>{
        knex('pokemon')
          .where('trainer_id', req.params.id)
          .then((pokemon)=>{
            res.render('trainershow', {trainerProfile: trainers[0], thisTrainersPokemon: pokemon});
          })
      })
  }
}
