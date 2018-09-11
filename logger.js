const db = require('./db');

var Qasim = 'Qasim';

var name = function(msg, some) {
  return msg + some;
}

module.exports.log = name;

module.exports.login = (email, password) => {
  // check if user already exists
  db.addUser({email, password});
  var result = 31;
  db.pushResult(result);
  // make the user login into the page
}
