# dom-exist [![Build Status](https://travis-ci.org/klouskingsley/dom-exist.svg?branch=master)](https://travis-ci.org/klouskingsley/dom-exist)

> Check an element is exist in document.body

## Install

- npm

```
$ npm install dom-exist
```

## Usage

```js
const domExist = require('dom-exist')
const ret = domExist(document.getElementById('domId'))

// ret = {result: false, code: -1, msg: 'xxxx'}

```

## Api

#### domExist(*el*)

##### el

Type: `string`(css selector) or `HTMLElement`

#### ret

Type: `object`

##### ret.result

Type: `boolean`: return `true` if exist, `false` if not exist

##### ret.code

Type: `number`: return `0` if element is in document.body, `-1` if element not found, `-2` if element not in document.body

## License

MIT