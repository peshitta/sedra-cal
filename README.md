# sedra-cal

[![npm version](https://badge.fury.io/js/sedra-cal.svg)](https://badge.fury.io/js/sedra-cal)
[![npm module downloads](http://img.shields.io/npm/dt/sedra-cal.svg)](https://www.npmjs.org/package/sedra-cal)
[![Build Status](https://travis-ci.org/peshitta/sedra-cal.svg?branch=master)](https://travis-ci.org/peshitta/sedra-cal)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/peshitta/sedra-cal/blob/master/LICENSE)
[![Dependency Status](https://david-dm.org/peshitta/sedra-cal.svg)](https://david-dm.org/peshitta/sedra-cal)
[![devDependencies Status](https://david-dm.org/peshitta/sedra-cal/dev-status.svg)](https://david-dm.org/peshitta/sedra-cal?type=dev)
[![Coverage Status](https://coveralls.io/repos/github/peshitta/sedra-cal/badge.svg?branch=master)](https://coveralls.io/github/peshitta/sedra-cal?branch=master)

Utility to convert from Sedra 3 to CAL ASCII transliteration.

## Installation

```
npm install sedra-cal --save
```

Following packages are available:
* `sedra-cal.js` - UMD ES5 version for use in browser, node, etc.
* `sedra-cal.min.js` - minified version of `sedra-cal.js`
* `sedra-cal.esm.js` - ES6 module version, suitable for bundling with other 
libraries and applications

## More information

[Peshitta App](https://peshitta.github.io)

[Beth Mardutho](https://sedra.bethmardutho.org/about/fonts)

[CAL](http://cal1.cn.huc.edu/searching/fullbrowser.html)

## License

[MIT](https://github.com/peshitta/sedra-cal/blob/master/LICENSE)

## Contributing

The final goal for this work is to learn the Word of God as recorded by
[Peshitta](https://en.wikipedia.org/wiki/Peshitta).
You are welcomed to to improve this implementation or provide feeback. Please
feel free to [Fork](https://help.github.com/articles/fork-a-repo/), create a
[Pull Request](https://help.github.com/articles/about-pull-requests/) or
submit [Issues](https://github.com/peshitta/sedra-cal/issues).
Thank you!

## Development

```
npm install
```
```
npm run build
```

## API Reference

* [sedra](#module_sedra)
    * [.toCalMap](#module_sedra.toCalMap) : <code>Object.&lt;string, string&gt;</code>
    * [.toCal(word)](#module_sedra.toCal) ⇒ <code>string</code>

<a name="module_sedra.toCalMap"></a>

### sedra.toCalMap : <code>Object.&lt;string, string&gt;</code>
Sedra to CAL map

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
<a name="module_sedra.toCal"></a>

### sedra.toCal(word) ⇒ <code>string</code>
Convert from Sedra 3 to CAL Code transliteration

**Kind**: static method of [<code>sedra</code>](#module_sedra)  
**Returns**: <code>string</code> - the input word converted to CAL code representation  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | input word in Sedra 3 transliteration |

