var assert = require('assert');
var sinon = require('sinon');
var index = require('../index');

describe('index', function () {
  it('mogeが返ること', function () {
    var event = {},
      context = { succeed: function () {} };
    var mock = sinon.mock(context);
    mock.expects('succeed').once().withArgs('hoge');
    index.handler(event, context);
    mock.verify();
  })
});
