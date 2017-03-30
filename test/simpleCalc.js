var chai = require('chai')
var expect = chai.expect
var simpleCalc = require('../index')
var getRandomInt = function (min, max) {
  return Math.random() * (max - min) + min
}
describe('Addition', function () {
  it('should add two values', function (done) {
    for (var i = 0; i < 100; i++) {
      var valA = getRandomInt(0, 5000)
      var valB = getRandomInt(0, 5000)
      var result = simpleCalc.add(valA, valB)
      expect(result).to.equal(valA + valB)
    }
    done()
  })
})
describe('Multiplication', function () {
  it('should multiply two values', function (done) {
    for (var i = 0; i < 100; i++) {
      var valA = getRandomInt(0, 5000)
      var valB = getRandomInt(0, 5000)
      var result = simpleCalc.mul(valA, valB)
      expect(result).to.equal(valA * valB)
    }
    done()
  })
})
