'use strict';

/*!
 * Module dependencies.
 */

var combs = require('./index')
  , assert = require('assert')
  , ase = assert.strictEqual
  , info = require('./package.json')

describe('Combs', function() {

  function assertArray(a, b) {
    ase(a.length, b.length)
    var strs = b.slice().map(function(x) {
      return x.toString()
    })
    a.forEach(function(x, i) {
      assert(~strs.indexOf(x.toString()))
    })
  }

  it('version', function() {
    ase(info.version, combs.VERSION)
    ase(info.version, require('./combs.min').VERSION)
    ase(info.version, require('./bower.json').version)
  })

  it('numbers', function() {
    var expect = [
      [1]
    , [1, 2]
    , [1, 3]
    , [1, 4]
    , [1, 2, 3]
    , [1, 2, 4]
    , [1, 3, 4]
    , [1, 2, 3, 4]
    , [2]
    , [2, 3]
    , [2, 4]
    , [2, 3, 4]
    , [3]
    , [3, 4]
    , [4]
    ]
    var actual = combs([1, 2, 3, 4])

    assertArray(actual, expect)
  })

  it('depth 2', function() {
    var expect = [
      [1]
    , [1, 2]
    , [1, 3]
    , [1, 4]
    , [2]
    , [2, 3]
    , [2, 4]
    , [3]
    , [3, 4]
    , [4]
    ]
    var actual = combs([1, 2, 3, 4], 2)

    assertArray(actual, expect)
  })

  it('depth 1', function() {
    var expect = [
      [1]
    , [2]
    , ['a']
    , [4]
    ]
    var actual = combs([1, 2, 'a', 4], 1)

    assertArray(actual, expect)
  })

  it('letters', function() {
    var expect = [ 
      [ 'a' ]
    , [ 'b' ]
    , [ 'a', 'b' ]
    , [ 'c' ]
    , [ 'a', 'c' ]
    , [ 'b', 'c' ]
    , [ 'a', 'b', 'c' ] 
    ]
    var actual = combs(['a', 'b', 'c'])

    assertArray(actual, expect)
  })
})
