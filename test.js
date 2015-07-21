'use strict';

var assert = require('assert');
var meth = require('./index.js');

describe('meth', function() {
  it('should execute the function specified', function() {
    var people = [
      {
        getName: function() { return 'Stephen'; }
      },
      {
        getName: function() { return 'Dave'; }
      }
    ];

    assert.deepEqual(people.map(meth('getName')), ['Stephen', 'Dave']);
  });

  it('should accept arguments', function() {
    var people = [
      {
        getName: function(prefix) { return prefix + ' Stephen'; }
      },
      {
        getName: function(prefix) { return prefix + ' Dave'; }
      }
    ];

    var expectedNames = ['Mr. Stephen', 'Mr. Dave'];

    assert.deepEqual(people.map(meth('getName', 'Mr.')), expectedNames);
  });

  it('should maintain `this` context', function() {
    var people = [
      {
        name: 'Stephen',
        getName: function() { return this.name }
      },
      {
        name: 'Dave',
        getName: function() { return this.name }
      }
    ];

    var expectedNames = ['Stephen', 'Dave'];
    assert.deepEqual(people.map(meth('getName')), expectedNames);
  });
});
