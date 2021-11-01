import {expectType} from 'tsd';
import hasOwnProperty from './index.js';

expectType<boolean>(hasOwnProperty({}, 'hello'));
expectType<boolean>(hasOwnProperty([1, 2, 3], 0));
expectType<boolean>(hasOwnProperty('foo', Symbol('bar')));

const someObject = {};
if (hasOwnProperty(someObject, 'a') && hasOwnProperty(someObject, 'b')) {
	expectType<Record<'a', unknown> & Record<'b', unknown>>(someObject);
}
