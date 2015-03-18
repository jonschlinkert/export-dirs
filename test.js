/*!
 * export-dirs <https://github.com/jonschlinkert/export-dirs>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

/* deps:mocha */
var should = require('should');
var dirs = require('./');

describe('export-dirs', function () {
  it('should export directories as modules', function () {
    dirs('fixtures').should.have.properties(['one', 'two', 'three']);
  });

  it('should export files in the immediate directory as modules', function () {
    dirs('fixtures').should.have.properties(['x', 'y', 'z']);
  });

  it('should expose all exported modules on the `_` object:', function () {
    dirs('fixtures').should.have.property('_');
  });

  it('should throw an error:', function () {
    (function () {
      dirs();
    }).should.throw('export-dirs expects `dir` to be a string.');
  });
});
