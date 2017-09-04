(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.sedra = global.sedra || {}, global.sedra.util = {})));
}(this, (function (exports) { 'use strict';

/**
 * @file Utility to convert between Sedra 3 and CAL ASCII transliterations
 * @module sedra.util
 * @version 1.0.0
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
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

// https://peshitta.github.io
// https://sedra.bethmardutho.org/about/fonts
// http://cal1.cn.huc.edu/searching/fullbrowser.html

/**
 * Sedra consonants
 * @constant
 * @type { string[] }
*/
var sedraConsonants = [
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
var sedraVowels = ['a', 'o', 'e', 'i', 'u'];

/**
 * Sedra to CAL mapping
 * @constant
 * @type { Object.<string, string> }
*/
var sedra2calMap = Object.create(null, ( obj = {}, obj[sedraConsonants[0]] = { value: ')', enumerable: true }, obj[sedraConsonants[1]] = { value: 'b', enumerable: true }, obj[sedraConsonants[2]] = { value: 'g', enumerable: true }, obj[sedraConsonants[3]] = { value: 'd', enumerable: true }, obj[sedraConsonants[4]] = { value: 'h', enumerable: true }, obj[sedraConsonants[5]] = { value: 'w', enumerable: true }, obj[sedraConsonants[6]] = { value: 'z', enumerable: true }, obj[sedraConsonants[7]] = { value: 'x', enumerable: true }, obj[sedraConsonants[8]] = { value: 'T', enumerable: true }, obj[sedraConsonants[9]] = { value: 'y', enumerable: true }, obj[sedraConsonants[10]] = { value: 'k', enumerable: true }, obj[sedraConsonants[11]] = { value: 'l', enumerable: true }, obj[sedraConsonants[12]] = { value: 'm', enumerable: true }, obj[sedraConsonants[13]] = { value: 'n', enumerable: true }, obj[sedraConsonants[14]] = { value: 's', enumerable: true }, obj[sedraConsonants[15]] = { value: '(', enumerable: true }, obj[sedraConsonants[16]] = { value: 'p', enumerable: true }, obj[sedraConsonants[17]] = { value: 'c', enumerable: true }, obj[sedraConsonants[18]] = { value: 'q', enumerable: true }, obj[sedraConsonants[19]] = { value: 'r', enumerable: true }, obj[sedraConsonants[20]] = { value: '$', enumerable: true }, obj[sedraConsonants[21]] = { value: 't', enumerable: true }, obj ));
var obj;

/**
 * CAL consonants
 * @constant
 * @type { string[] }
*/
var calConsonants = [
  ')',
  'b',
  'g',
  'd',
  'h',
  'w',
  'z',
  'x',
  'T',
  'y',
  'k',
  'l',
  'm',
  'n',
  's',
  '(',
  'p',
  'c',
  'q',
  'r',
  '$',
  't'
];

/**
 * CAL vowels
 * @constant
 * @type { string[] }
*/
var calVowels = ['a', 'o', 'e', 'i', 'u', 'E', 'O'];

/**
 * CAL to Sedra mapping
 * @constant
 * @type { Object.<string, string> }
*/
var cal2sedraMap = Object.create(null, ( obj$1 = {}, obj$1[calConsonants[0]] = { value: 'A', enumerable: true }, obj$1[calConsonants[1]] = { value: 'B', enumerable: true }, obj$1[calConsonants[2]] = { value: 'G', enumerable: true }, obj$1[calConsonants[3]] = { value: 'D', enumerable: true }, obj$1[calConsonants[4]] = { value: 'H', enumerable: true }, obj$1[calConsonants[5]] = { value: 'O', enumerable: true }, obj$1[calConsonants[6]] = { value: 'Z', enumerable: true }, obj$1[calConsonants[7]] = { value: 'K', enumerable: true }, obj$1[calConsonants[8]] = { value: 'Y', enumerable: true }, obj$1[calConsonants[9]] = { value: ';', enumerable: true }, obj$1[calConsonants[10]] = { value: 'C', enumerable: true }, obj$1[calConsonants[11]] = { value: 'L', enumerable: true }, obj$1[calConsonants[12]] = { value: 'M', enumerable: true }, obj$1[calConsonants[13]] = { value: 'N', enumerable: true }, obj$1[calConsonants[14]] = { value: 'S', enumerable: true }, obj$1[calConsonants[15]] = { value: 'E', enumerable: true }, obj$1[calConsonants[16]] = { value: 'I', enumerable: true }, obj$1[calConsonants[17]] = { value: '/', enumerable: true }, obj$1[calConsonants[18]] = { value: 'X', enumerable: true }, obj$1[calConsonants[19]] = { value: 'R', enumerable: true }, obj$1[calConsonants[20]] = { value: 'W', enumerable: true }, obj$1[calConsonants[21]] = { value: 'T', enumerable: true }, obj$1[calVowels[5]] = { value: 'e', enumerable: true }, obj$1[calVowels[6]] = { value: 'o', enumerable: true }, obj$1 ));
var obj$1;

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
 * Is character c a Sedra 3 consonant
 * @param { string } c input character
 * @returns { boolean } true if c is Sedra 3 consonant
 */
var isSedraConsonant = function (c) { return sedraConsonants.indexOf(c) > -1; };

/**
 * Is character c a Sedra 3 vowel
 * @param { string } c input character
 * @returns { boolean } true if c is Sedra 3 vowel
 */
var isSedraVowel = function (c) { return sedraVowels.indexOf(c) > -1; };

/**
 * Is character c a CAL consonant
 * @param { string } c input character
 * @returns { boolean } true if c is CAL consonant
 */
var isCalConsonant = function (c) { return calConsonants.indexOf(c) > -1; };

/**
 * Is character c a CAL vowel
 * @param { string } c input character
 * @returns { boolean } true if c is CAL vowel
 */
var isCalVowel = function (c) { return calVowels.indexOf(c) > -1; };

/**
 * Is character c a diacretic
 * @param { string } c input character
 * @returns { boolean } true if c is a diacretic
 */
var isDiacretic = function (c) { return diacretics.indexOf(c) > -1; };

/**
 * Returns true if next character is c
 * @private
 * @param {string} c character to check
 * @param {number} index current index in the word
 * @param {string} word input word
 * @returns { boolean } true if next character is c
 */
var isNext = function (c, index, word) { return c === word.charAt(index + 1); };

/**
 * @private
 * Maps input character to CAL code
 * @param { string } c input character
 * @returns { string } CAL mapped character
 */
var mapSedra = function (c) { return sedra2calMap[c] || c; };

/**
 * Convert from Sedra 3 to CAL Code transliteration
 * @param {string} word input word in Sedra 3 transliteration
 * @returns {string} the input word converted to CAL code representation
 */
function sedra2cal(word) {
  if (!word) {
    return word;
  }
  var map = mapSedra;
  var sb = '';
  for (var i = 0, len = word.length, m = (void 0); i < len; i += m.length) {
    var c = word.charAt(i);
    switch (c) {
      case 'i':
        m =
          isNext(';', i, word) && isSedraConsonant(word.charAt(i + 2))
            ? 'yi'
            : map(c); // Sedra stores as (iy)
        break;
      case 'u':
        m =
          isNext('O', i, word) && isSedraConsonant(word.charAt(i + 2))
            ? 'wu'
            : map(c); // Sedra stores as (uw)
        break;
      case 'o':
        m =
          isNext('O', i, word) && isSedraConsonant(word.charAt(i + 2))
            ? 'wO'
            : map(c); // Eastern O stored as (ow)
        break;
      default:
        m = map(c);
        break;
    }
    sb += m;
  }
  return sb;
}

/**
 * @private
 * Maps input character to Sedra char
 * @param { string } c input character
 * @returns { string } Sedra mapped char
 */
var mapCal = function (c) { return cal2sedraMap[c] || c; };

/**
 * Convert from CAL to Sedra 3 transliteration
 * @param {string} word input word in CAL code transliteration
 * @returns {string} the input word converted to Sedra 3 representation
 */
function cal2sedra(word) {
  if (!word) {
    return word;
  }
  var map = mapCal;
  var sb = '';
  for (var i = 0, len = word.length, m = (void 0); i < len; i += m.length) {
    var c = word.charAt(i);
    switch (c) {
      case 'y':
        m = isNext('i', i, word) ? 'i;' : map(c); // Sedra stores as (iy)
        break;
      case 'w':
        m = isNext('u', i, word)
          ? 'uO' // Sedra stores as (uw)
          : isNext('O', i, word)
            ? 'oO' // Eastern O stored as (ow)
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

exports.sedraConsonants = sedraConsonants;
exports.sedraVowels = sedraVowels;
exports.sedra2calMap = sedra2calMap;
exports.calConsonants = calConsonants;
exports.calVowels = calVowels;
exports.cal2sedraMap = cal2sedraMap;
exports.diacretics = diacretics;
exports.isSedraConsonant = isSedraConsonant;
exports.isSedraVowel = isSedraVowel;
exports.isCalConsonant = isCalConsonant;
exports.isCalVowel = isCalVowel;
exports.isDiacretic = isDiacretic;
exports.sedra2cal = sedra2cal;
exports.cal2sedra = cal2sedra;

Object.defineProperty(exports, '__esModule', { value: true });

})));
