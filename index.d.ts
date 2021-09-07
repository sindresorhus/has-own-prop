/**
Shortcut for `Object.prototype.hasOwnProperty.call(object, property)`.

@example
```
import hasOwnProperty from 'has-own-prop';

hasOwnProperty({}, 'hello');
//=> false

hasOwnProperty([1, 2, 3], 0);
//=> true
```
*/
export default function hasOwnProperty(object: unknown, key: PropertyKey): boolean;
