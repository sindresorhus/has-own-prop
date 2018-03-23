import test from 'ava';
import m from '.';

test('main', t => {
	t.true(m({foo: true}, 'foo'));
	t.false(m({foo: true}, 'bar'));
});
