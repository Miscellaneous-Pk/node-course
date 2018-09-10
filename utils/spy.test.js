const expect = require('expect');
const rewire = require('rewire');

const app = rewire('../logger');

describe('Logger',() => {
  var db = {
    addUser : expect.createSpy()
  }

  app.__set__('db',db);

  it('should take the arguments of email and password',() => {
    var email = 'qasimali22@hotmail.com';
    var password = '123abc';

    app.login(email,password);
    expect(db.addUser).toHaveBeenCalledWith({email, password});

  })
})
