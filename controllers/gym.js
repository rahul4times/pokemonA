const knex = require('../db/knex.js');
module.exports = {
  // Gym page dislpay
  pageDisplay: function(req, res){
    if(!req.session.gym){
      req.session.gym = [];
    }
    res.render('gym', {players: req.session.gym});
  }
  //
}
