# has-own-prop [![Build Status](https://travis-ci.org/sindresorhus/has-own-prop.svg?branch=master)](https://travis-ci.org/sindresorhus/has-own-prop)

> A safer `.hasOwnProperty()`

Shortcut for `Object.prototype.hasOwnProperty.call(obj, prop)`.

You shouldn't use `.hasOwnProperty()` as it won't exist on objects [created with `Object.create(null)`](http://stackoverflow.com/a/12017703/64949) or it can have been overridden.


## Install

```
$ npm install --save has-own-prop
```


## Usage

```js
const hasOwnProp = require('has-own-prop');

const obj = Object.create(null);
obj.unicorn = true;

obj.hasOwnProperty('unicorn');
//=> 'TypeError: undefined is not a function'

hasOwnProp(obj, 'unicorn');
//=> true
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
