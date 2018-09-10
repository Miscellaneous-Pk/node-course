const db = require('./db');

var Qasim = 'Qasim';

var name = function(msg, some) {
  return msg + some;
}

module.exports.log = name;

module.exports.login = (email, password) => {
  // check if user already exists
  db.addUser({email, password});
  // make the user login into the page
}
