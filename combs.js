/**
 * (c) 2014 Beau Sorensen
 * MIT Licensed
 * For all details and documentation:
 * https://github.com/sorensen/possibles
 */

;(function() {
'use strict';

/**
 * Find all unique combinations of the given array elements
 * http://codereview.stackexchange.com/questions/7001/better-way-to-generate-all-combinations
 *
 * @param {Array} input
 * @return {Array} multi-dimentional combinations
 */

function combs(arr, depth) {
  var resp = []
    , len = arr.length
    , total = (1 << len) // total combinations

  for (var i = 1; i < total; i++) {
    var tmp = []
      , good = true

    for (var k = 0; k < len; k++) {
      if ((i & (1 << k))) {
        tmp.push(arr[k])
      }
      // Check for combination depth
      if (depth && tmp.length > depth) {
        good = false
        continue
      }
    }
    // Prevent partial combinations from depth result
    good && resp.push(tmp)
  }
  return resp
}

/*!
 * Current library version, should match `package.json`
 */

combs.VERSION = '0.0.1'

/*!
 * Module exports.
 */

typeof exports !== 'undefined'
  ? module.exports = combs
  : this.combs = combs

}).call(this);