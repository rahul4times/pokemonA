const knex = require('../db/knex.js');
module.exports = {
  pageDisplay: function(req, res){
    res.render('gym');
  }
}
