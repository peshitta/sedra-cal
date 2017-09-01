## sedra-cal

Utility to convert between Sedra 3 and CAL ASCII transliterations.
See [https://sedra.bethmardutho.org/about/fonts](https://sedra.bethmardutho.org/about/fonts)
for mapping details.

## Installation

```
npm install sedra-cal --save
```

Following packages are available:
* `sedracal.js` - UMD ES5 version for use in browser, node, etc.
* `sedracal.min.js` - minified version of `sedracal.js`
* `sedracal.esm.js` - ES6 module version, suitable for bundling with other 
libraries and applications

## Development

```
npm install
```
```
npm run build
```

# API Reference

* [sedra.util](#sedra.module_util)
    * [.sedra2cal(word)](#sedra.module_util.sedra2cal) ⇒ <code>string</code>
    * [.cal2sedra(word)](#sedra.module_util.cal2sedra) ⇒ <code>string</code>

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


## License

[MIT](https://github.com/peshitta/sedra-cal/blob/master/LICENSE)
