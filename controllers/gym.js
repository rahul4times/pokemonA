const knex = require('../db/knex.js');
module.exports = {
  // Gym page dislpay
  pageDisplay: function(req, res){
    if(!req.session.gym){
      req.session.gym = [];
    }

    knex('pokemon')
      .then((result)=>{
        res.render('gym', {allPlayer: result, players: req.session.gym});
      })


  }
  //
}
