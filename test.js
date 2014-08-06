'use strict';
var test = require('ava');
var hasOwnProp = require('./');

test(function (t) {
	t.assert(hasOwnProp({foo: true}, 'foo'));
});
