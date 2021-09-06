import test from 'ava';
import hasOwnProperty from './index.js';

test('main', t => {
	t.true(hasOwnProperty({foo: true}, 'foo'));
	t.false(hasOwnProperty({foo: true}, 'bar'));
});
