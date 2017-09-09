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

* [sedra](#peshitta.module_sedra)
    * [.consonants](#peshitta.module_sedra.consonants) : <code>Array.&lt;string&gt;</code>
    * [.vowels](#peshitta.module_sedra.vowels) : <code>Array.&lt;string&gt;</code>
    * [.diacretics](#peshitta.module_sedra.diacretics) : <code>Array.&lt;string&gt;</code>
    * [.toCalMap](#peshitta.module_sedra.toCalMap) : <code>Object.&lt;string, string&gt;</code>
    * [.isConsonant](#peshitta.module_sedra.isConsonant) ⇒ <code>boolean</code>
    * [.isVowel](#peshitta.module_sedra.isVowel) ⇒ <code>boolean</code>
    * [.isDiacretic](#peshitta.module_sedra.isDiacretic) ⇒ <code>boolean</code>
    * [.toCal(word)](#peshitta.module_sedra.toCal) ⇒ <code>string</code>

<a name="peshitta.module_sedra.consonants"></a>

### sedra.consonants : <code>Array.&lt;string&gt;</code>
Sedra consonants

**Kind**: static constant of [<code>sedra</code>](#peshitta.module_sedra)  
<a name="peshitta.module_sedra.vowels"></a>

### sedra.vowels : <code>Array.&lt;string&gt;</code>
Sedra vowels

**Kind**: static constant of [<code>sedra</code>](#peshitta.module_sedra)  
<a name="peshitta.module_sedra.diacretics"></a>

### sedra.diacretics : <code>Array.&lt;string&gt;</code>
Sedra/CAL diacretic characters:
* __'__ dot above, Qushaya
* __,__ dot below, Rukkakha
* **_** line under
* __*__ Seyame

**Kind**: static constant of [<code>sedra</code>](#peshitta.module_sedra)  
<a name="peshitta.module_sedra.toCalMap"></a>

### sedra.toCalMap : <code>Object.&lt;string, string&gt;</code>
Sedra to CAL map

**Kind**: static constant of [<code>sedra</code>](#peshitta.module_sedra)  
<a name="peshitta.module_sedra.isConsonant"></a>

### sedra.isConsonant ⇒ <code>boolean</code>
Is character c a Sedra 3 consonant?

**Kind**: static constant of [<code>sedra</code>](#peshitta.module_sedra)  
**Returns**: <code>boolean</code> - true if c is Sedra 3 consonant  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="peshitta.module_sedra.isVowel"></a>

### sedra.isVowel ⇒ <code>boolean</code>
Is character c a Sedra 3 vowel?

**Kind**: static constant of [<code>sedra</code>](#peshitta.module_sedra)  
**Returns**: <code>boolean</code> - true if c is Sedra 3 vowel  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="peshitta.module_sedra.isDiacretic"></a>

### sedra.isDiacretic ⇒ <code>boolean</code>
Is character c a diacretic? Same characters used for both Sedra 3 and CAL.

**Kind**: static constant of [<code>sedra</code>](#peshitta.module_sedra)  
**Returns**: <code>boolean</code> - true if c is a diacretic  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="peshitta.module_sedra.toCal"></a>

### sedra.toCal(word) ⇒ <code>string</code>
Convert from Sedra 3 to CAL Code transliteration

**Kind**: static method of [<code>sedra</code>](#peshitta.module_sedra)  
**Returns**: <code>string</code> - the input word converted to CAL code representation  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | input word in Sedra 3 transliteration |

