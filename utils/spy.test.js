const expect = require('expect');
const rewire = require('rewire');

const app = rewire('../logger');

describe('Logger',() => {
  var db = {
    addUser : expect.createSpy(),
    pushResult: expect.createSpy()
  }

  app.__set__('db',db);
  var email = 'qasimali22@hotmail.com';
  var password = '123abc';

  it('should take the arguments of email and password',() => {

    app.login(email,password);
    expect(db.addUser).toHaveBeenCalledWith({email, password});

  })

  it('should check the response from db is correct', () => {
    app.login(email,password);
    expect(db.pushResult).toHaveBeenCalledWith(31);
  })
})
