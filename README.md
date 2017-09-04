# sedra-cal

[![npm version](https://badge.fury.io/js/sedra-cal.svg)](https://badge.fury.io/js/sedra-cal)
[![npm module downloads](http://img.shields.io/npm/dt/sedra-cal.svg)](https://www.npmjs.org/package/sedra-cal)
[![Build Status](https://travis-ci.org/peshitta/sedra-cal.svg?branch=master)](https://travis-ci.org/peshitta/sedra-cal)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/peshitta/sedra-cal/blob/master/LICENSE)
[![Dependency Status](https://david-dm.org/peshitta/sedra-cal.svg)](https://david-dm.org/peshitta/sedra-cal)
[![devDependencies Status](https://david-dm.org/peshitta/sedra-cal/dev-status.svg)](https://david-dm.org/peshitta/sedra-cal?type=dev)
[![Coverage Status](https://coveralls.io/repos/github/peshitta/sedra-cal/badge.svg?branch=master)](https://coveralls.io/github/peshitta/sedra-cal?branch=master)

Utility to convert between Sedra 3 and CAL ASCII transliterations.

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
If you would like improve this implementation or have feeback please email
[pshitto@gmail.com](mailto:pshitto@gmail.com) or feel free to
[Fork](https://help.github.com/articles/fork-a-repo/) or create a
[Pull Request](https://help.github.com/articles/about-pull-requests/).
Thank you!

## Development

```
npm install
```
```
npm run build
```

## API Reference

* [sedra.util](#sedra.module_util)
    * [.sedraConsonants](#sedra.module_util.sedraConsonants) : <code>Array.&lt;string&gt;</code>
    * [.sedraVowels](#sedra.module_util.sedraVowels) : <code>Array.&lt;string&gt;</code>
    * [.sedra2calMap](#sedra.module_util.sedra2calMap) : <code>Object.&lt;string, string&gt;</code>
    * [.calConsonants](#sedra.module_util.calConsonants) : <code>Array.&lt;string&gt;</code>
    * [.calVowels](#sedra.module_util.calVowels) : <code>Array.&lt;string&gt;</code>
    * [.cal2sedraMap](#sedra.module_util.cal2sedraMap) : <code>Object.&lt;string, string&gt;</code>
    * [.diacretics](#sedra.module_util.diacretics) : <code>Array.&lt;string&gt;</code>
    * [.isSedraConsonant](#sedra.module_util.isSedraConsonant) ⇒ <code>boolean</code>
    * [.isSedraVowel](#sedra.module_util.isSedraVowel) ⇒ <code>boolean</code>
    * [.isCalConsonant](#sedra.module_util.isCalConsonant) ⇒ <code>boolean</code>
    * [.isCalVowel](#sedra.module_util.isCalVowel) ⇒ <code>boolean</code>
    * [.isDiacretic](#sedra.module_util.isDiacretic) ⇒ <code>boolean</code>
    * [.sedra2cal(word)](#sedra.module_util.sedra2cal) ⇒ <code>string</code>
    * [.cal2sedra(word)](#sedra.module_util.cal2sedra) ⇒ <code>string</code>

<a name="sedra.module_util.sedraConsonants"></a>

### sedra.util.sedraConsonants : <code>Array.&lt;string&gt;</code>
Sedra consonants

**Kind**: static constant of [<code>sedra.util</code>](#sedra.module_util)  
<a name="sedra.module_util.sedraVowels"></a>

### sedra.util.sedraVowels : <code>Array.&lt;string&gt;</code>
Sedra vowels

**Kind**: static constant of [<code>sedra.util</code>](#sedra.module_util)  
<a name="sedra.module_util.sedra2calMap"></a>

### sedra.util.sedra2calMap : <code>Object.&lt;string, string&gt;</code>
Sedra to CAL mapping

**Kind**: static constant of [<code>sedra.util</code>](#sedra.module_util)  
<a name="sedra.module_util.calConsonants"></a>

### sedra.util.calConsonants : <code>Array.&lt;string&gt;</code>
CAL consonants

**Kind**: static constant of [<code>sedra.util</code>](#sedra.module_util)  
<a name="sedra.module_util.calVowels"></a>

### sedra.util.calVowels : <code>Array.&lt;string&gt;</code>
CAL vowels

**Kind**: static constant of [<code>sedra.util</code>](#sedra.module_util)  
<a name="sedra.module_util.cal2sedraMap"></a>

### sedra.util.cal2sedraMap : <code>Object.&lt;string, string&gt;</code>
CAL to Sedra mapping

**Kind**: static constant of [<code>sedra.util</code>](#sedra.module_util)  
<a name="sedra.module_util.diacretics"></a>

### sedra.util.diacretics : <code>Array.&lt;string&gt;</code>
Sedra/CAL diacretic characters:
* __'__ dot above, Qushaya
* __,__ dot below, Rukkakha
* **_** line under
* __*__ Seyame

**Kind**: static constant of [<code>sedra.util</code>](#sedra.module_util)  
<a name="sedra.module_util.isSedraConsonant"></a>

### sedra.util.isSedraConsonant ⇒ <code>boolean</code>
Is character c a Sedra 3 consonant

**Kind**: static constant of [<code>sedra.util</code>](#sedra.module_util)  
**Returns**: <code>boolean</code> - true if c is Sedra 3 consonant  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="sedra.module_util.isSedraVowel"></a>

### sedra.util.isSedraVowel ⇒ <code>boolean</code>
Is character c a Sedra 3 vowel

**Kind**: static constant of [<code>sedra.util</code>](#sedra.module_util)  
**Returns**: <code>boolean</code> - true if c is Sedra 3 vowel  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="sedra.module_util.isCalConsonant"></a>

### sedra.util.isCalConsonant ⇒ <code>boolean</code>
Is character c a CAL consonant

**Kind**: static constant of [<code>sedra.util</code>](#sedra.module_util)  
**Returns**: <code>boolean</code> - true if c is CAL consonant  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="sedra.module_util.isCalVowel"></a>

### sedra.util.isCalVowel ⇒ <code>boolean</code>
Is character c a CAL vowel

**Kind**: static constant of [<code>sedra.util</code>](#sedra.module_util)  
**Returns**: <code>boolean</code> - true if c is CAL vowel  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="sedra.module_util.isDiacretic"></a>

### sedra.util.isDiacretic ⇒ <code>boolean</code>
Is character c a diacretic

**Kind**: static constant of [<code>sedra.util</code>](#sedra.module_util)  
**Returns**: <code>boolean</code> - true if c is a diacretic  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="sedra.module_util.sedra2cal"></a>

### sedra.util.sedra2cal(word) ⇒ <code>string</code>
Convert from Sedra 3 to CAL Code transliteration

**Kind**: static method of [<code>sedra.util</code>](#sedra.module_util)  
**Returns**: <code>string</code> - the input word converted to CAL code representation  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | input word in Sedra 3 transliteration |

<a name="sedra.module_util.cal2sedra"></a>

### sedra.util.cal2sedra(word) ⇒ <code>string</code>
Convert from CAL to Sedra 3 transliteration

**Kind**: static method of [<code>sedra.util</code>](#sedra.module_util)  
**Returns**: <code>string</code> - the input word converted to Sedra 3 representation  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | input word in CAL code transliteration |

