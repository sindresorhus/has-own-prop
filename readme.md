# has-own-prop

> A safer `.hasOwnProperty()`

Shortcut for `Object.prototype.hasOwnProperty.call(object, property)`. Also comes with a type guard for TypeScript users.

You shouldn't use `.hasOwnProperty()` as it won't exist on [objects created with `Object.create(null)`](https://stackoverflow.com/a/12017703/64949) or it can have been overridden.

## Install

```sh
npm install has-own-prop
```

## Usage

```js
import hasOwnProperty from 'has-own-prop';

const object = Object.create(null);
object.unicorn = true;

object.hasOwnProperty('unicorn');
//=> 'TypeError: undefined is not a function'

hasOwnProperty(object, 'unicorn');
//=> true
```
