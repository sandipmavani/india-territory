

> Territories of India By PinCode 

[![NPM Version](https://img.shields.io/npm/v/india-territories.svg?maxAge=2592000)](https://www.npmjs.com/package/india-territories)
[![NPM Downloads](https://img.shields.io/npm/dt/india-territories.svg?maxAge=2592000)](https://www.npmjs.com/package/india-territories)

- **76462** PinCode 


## Installation

```js
$ npm install --save india-territories
```

### Usage

```js
var indiaTerritores = require('india-territories');


// get area detail from pin code
indiaTerritores.searchFromPINCode('######', function(res){
  console.log(res);
});


// get city detail by name
indiaTerritores.searchFromCity('City Name', function(res){
  console.log(res);
});

