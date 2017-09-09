/**
* @file Utility to convert from Sedra 3 to CAL ASCII transliteration
* @version 1.0.3
* @author Greg Borota
* @copyright (c) 2017 Greg Borota.
* @license MIT
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

// https://peshitta.github.io
// https://sedra.bethmardutho.org/about/fonts
// http://cal1.cn.huc.edu/searching/fullbrowser.html

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.peshitta = global.peshitta || {}, global.peshitta.sedra = {})));
}(this, (function (exports) { 'use strict';

/** @module peshitta.sedra */
/**
 * Sedra consonants
 * @constant
 * @type { string[] }
*/
var consonants = [
  'A',
  'B',
  'G',
  'D',
  'H',
  'O',
  'Z',
  'K',
  'Y',
  ';',
  'C',
  'L',
  'M',
  'N',
  'S',
  'E',
  'I',
  '/',
  'X',
  'R',
  'W',
  'T'
];

/**
 * Sedra vowels
 * @constant
 * @type { string[] }
*/
var vowels = ['a', 'o', 'e', 'i', 'u'];

/**
 * Sedra/CAL diacretic characters:
 * * __'__ dot above, Qushaya
 * * __,__ dot below, Rukkakha
 * * **_** line under
 * * __*__ Seyame
 * @constant
 * @type { string[] }
*/
var diacretics = ["'", ',', '_', '*'];

/**
 * Sedra to CAL map
 * @constant
 * @type { Object.<string, string> }
*/
var toCalMap = Object.create(null, ( obj = {}, obj[consonants[0]] = { value: ')', enumerable: true }, obj[consonants[1]] = { value: 'b', enumerable: true }, obj[consonants[2]] = { value: 'g', enumerable: true }, obj[consonants[3]] = { value: 'd', enumerable: true }, obj[consonants[4]] = { value: 'h', enumerable: true }, obj[consonants[5]] = { value: 'w', enumerable: true }, obj[consonants[6]] = { value: 'z', enumerable: true }, obj[consonants[7]] = { value: 'x', enumerable: true }, obj[consonants[8]] = { value: 'T', enumerable: true }, obj[consonants[9]] = { value: 'y', enumerable: true }, obj[consonants[10]] = { value: 'k', enumerable: true }, obj[consonants[11]] = { value: 'l', enumerable: true }, obj[consonants[12]] = { value: 'm', enumerable: true }, obj[consonants[13]] = { value: 'n', enumerable: true }, obj[consonants[14]] = { value: 's', enumerable: true }, obj[consonants[15]] = { value: '(', enumerable: true }, obj[consonants[16]] = { value: 'p', enumerable: true }, obj[consonants[17]] = { value: 'c', enumerable: true }, obj[consonants[18]] = { value: 'q', enumerable: true }, obj[consonants[19]] = { value: 'r', enumerable: true }, obj[consonants[20]] = { value: '$', enumerable: true }, obj[consonants[21]] = { value: 't', enumerable: true }, obj ));
var obj;

/**
 * Is character c a Sedra 3 consonant?
 * @param { string } c input character
 * @returns { boolean } true if c is Sedra 3 consonant
 */
var isConsonant = function (c) { return consonants.indexOf(c) > -1; };

/**
 * Is character c a Sedra 3 vowel?
 * @param { string } c input character
 * @returns { boolean } true if c is Sedra 3 vowel
 */
var isVowel = function (c) { return vowels.indexOf(c) > -1; };

/**
 * Is character c a diacretic? Same characters used for both Sedra 3 and CAL.
 * @param { string } c input character
 * @returns { boolean } true if c is a diacretic
 */
var isDiacretic = function (c) { return diacretics.indexOf(c) > -1; };

/**
 * @private
 * Maps input character to CAL code
 * @param { string } c input character
 * @returns { string } CAL mapped character
 */
var map = function (c) { return toCalMap[c] || c; };

/**
 * Convert from Sedra 3 to CAL Code transliteration
 * @param {string} word input word in Sedra 3 transliteration
 * @returns {string} the input word converted to CAL code representation
 */
function toCal(word) {
  if (!word) {
    return word;
  }

  var sb = '';
  for (var i = 0, len = word.length, m = (void 0); i < len; i += m.length) {
    var c = word.charAt(i);
    switch (c) {
      case 'i':
        m =
          word.charAt(i + 1) === ';' && isConsonant(word.charAt(i + 2))
            ? 'yi' // Sedra stores as (iy)
            : map(c);
        break;
      case 'u':
        m =
          word.charAt(i + 1) === 'O' && isConsonant(word.charAt(i + 2))
            ? 'wu' // Sedra stores as (uw)
            : map(c);
        break;
      case 'o':
        m =
          word.charAt(i + 1) === 'O' && isConsonant(word.charAt(i + 2))
            ? 'wO' // Eastern O stored as (ow) in Sedra
            : map(c);
        break;
      default:
        m = map(c);
        break;
    }
    sb += m;
  }
  return sb;
}

exports.consonants = consonants;
exports.vowels = vowels;
exports.diacretics = diacretics;
exports.toCalMap = toCalMap;
exports.isConsonant = isConsonant;
exports.isVowel = isVowel;
exports.isDiacretic = isDiacretic;
exports.toCal = toCal;

Object.defineProperty(exports, '__esModule', { value: true });

})));
