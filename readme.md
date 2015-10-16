# ruth-aaron [![Build Status](https://travis-ci.org/gillstrom/ruth-aaron.svg?branch=master)](https://travis-ci.org/gillstrom/ruth-aaron)

> Check if two consecutive integers is a [Ruth-Aron pair](https://en.wikipedia.org/wiki/Ruth%E2%80%93Aaron_pair).


## Install

```
$ npm install --save ruth-aaron
```


## Usage

```js
var ruthAaron = require('ruth-aaron');

ruthAaron(948, 949);
//=> true

ruthAaron(24, 25, {distinct: true});
//=> true
```


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
