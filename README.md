# sedra-cal

[![npm version](https://badge.fury.io/js/sedra-cal.svg)](https://badge.fury.io/js/sedra-cal)
[![npm module downloads](http://img.shields.io/npm/dt/sedra-cal.svg)](https://www.npmjs.org/package/sedra-cal)
[![Build Status](https://travis-ci.org/peshitta/sedra-cal.svg?branch=master)](https://travis-ci.org/peshitta/sedra-cal)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/peshitta/sedra-cal/blob/master/LICENSE)
[![Dependency Status](https://david-dm.org/peshitta/sedra-cal.svg)](https://david-dm.org/peshitta/sedra-cal)
[![devDependencies Status](https://david-dm.org/peshitta/sedra-cal/dev-status.svg)](https://david-dm.org/peshitta/sedra-cal?type=dev)
[![Coverage Status](https://coveralls.io/repos/github/peshitta/sedra-cal/badge.svg?branch=master)](https://coveralls.io/github/peshitta/sedra-cal?branch=master)

Convert from Sedra 3 to CAL ASCII transliteration

## Installation

In order to use this library, [Node.js](https://nodejs.org) should be installed. 
Then run:
```
npm install sedra-cal --save
```

Following bundles are available:
* `sedra-cal.js` - UMD ES5 version for use in browser, node, etc.
* `sedra-cal.min.js` - minified version of `sedra-cal.js`
* `sedra-cal.esm.js` - ES6 module version, suitable for bundling with other 
libraries and applications

The package could also be downloaded directly from:
[https://registry.npmjs.org/sedra-cal/-/sedra-cal-1.1.1.tgz](https://registry.npmjs.org/sedra-cal/-/sedra-cal-1.1.1.tgz)

## More information

[Peshitta App](https://peshitta.github.io)

[Beth Mardutho](https://sedra.bethmardutho.org/about/fonts)

[CAL](http://cal1.cn.huc.edu/searching/fullbrowser.html)

For CAL to Sedra 3 conversion see:
[cal-sedra](https://github.com/peshitta/cal-sedra)

## License

[MIT](https://github.com/peshitta/sedra-cal/blob/master/LICENSE)

## Contributing

The final goal for this work is to learn the Word of God as recorded by
[Peshitta](https://en.wikipedia.org/wiki/Peshitta).
You are welcomed to improve this implementation or provide feedback. Please
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

* [sedraCal](#module_sedraCal)
    * [.mapper](#module_sedraCal.mapper) : <code>Mapper</code>
    * [.toCal](#module_sedraCal.toCal) ⇒ <code>string</code>
    * [.toCalMap](#module_sedraCal.toCalMap) : <code>Object.&lt;string, string&gt;</code>

<a name="module_sedraCal.mapper"></a>

### sedraCal.mapper : <code>Mapper</code>
Aramaic mapper

**Kind**: static constant of [<code>sedraCal</code>](#module_sedraCal)  
<a name="module_sedraCal.toCal"></a>

### sedraCal.toCal ⇒ <code>string</code>
Convert from Sedra 3 to CAL Code transliteration

**Kind**: static constant of [<code>sedraCal</code>](#module_sedraCal)  
**Returns**: <code>string</code> - the input word converted to CAL code representation  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | input word in Sedra 3 transliteration |

<a name="module_sedraCal.toCalMap"></a>

### sedraCal.toCalMap : <code>Object.&lt;string, string&gt;</code>
Sedra to CAL consonant map

**Kind**: static constant of [<code>sedraCal</code>](#module_sedraCal)  
