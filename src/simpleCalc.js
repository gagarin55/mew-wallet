'use strict'

/**
 * Computes the sum of two values
 * @param {number} valA first value
 * @param {number} [valB=0] second value
 * @returns {number} sum of the two input values
 * @example
 * add(5,10);
 * //returns 15
 */
var add = function (valA, valB = 0) {
  return valA + valB
}

/**
 * Computes the multiplication of two values
 * @param {number} valA first value
 * @param {number} [valB=1] second value
 * @returns {number} multiplication of the two input values
 * @example
 * mul(5,10);
 * //returns 50
 */
var mul = function (valA, valB = 1) {
  return valA * valB
}

module.exports = {
  add: add,
  mul: mul
}
