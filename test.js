import test from 'ava';
import hasOwnProp from '.';

test('main', t => {
	t.true(hasOwnProp({foo: true}, 'foo'));
	t.false(hasOwnProp({foo: true}, 'bar'));
});
