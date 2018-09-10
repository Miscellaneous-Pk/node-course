const expect = require('expect');
const utils = require('./utils');

describe('Utils',() => {

  describe('#add', () => {
    it('should pass the addition',() => {
      var res = utils.add(11,22);

      if (res !== 33) {
        throw new Error(`expected 33, but got ${res}.`);
      }
    })
  })

  describe('#square',() => {
    it('should async square the numbers',(done) => {
      utils.asyncSquare(3,3,(sq) => {
        expect(sq).toBe(9).toBeA('number');
        done();
      })
    })
  })


})
