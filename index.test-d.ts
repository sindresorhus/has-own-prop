import {expectType} from 'tsd';
import hasOwnProp = require('.');

expectType<boolean>(hasOwnProp({}, 'hello'));
expectType<boolean>(hasOwnProp([1, 2, 3], 0));
expectType<boolean>(hasOwnProp("foo", Symbol('bar')));
