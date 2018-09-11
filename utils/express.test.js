const request = require('supertest');
const expect = require('expect');

var app = require('../main').app;

describe('Express tests', () => {

  it('should give an ok on home page',(done) => {
    request(app)
      .get('/')
      .expect(200)
      .end(done);
  })

  it('should give an ok on check page',(done) => {
    request(app)
      .get('/check')
      .expect(200)
      .end(done)
  })
})
