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

/** @module peshitta.sedra */
/**
 * Wow semivowel
 * @constant
 * @type { string }
 */
var wow = 'O';

/**
 * Yod semivowel
 * @constant
 * @type { string }
 */
var yod = ';';

/**
 * Sedra consonants
 * @constant
 * @type { string[] }
*/
var consonants = Object.freeze(['A', 'B', 'G', 'D', 'H', wow, 'Z', 'K', 'Y', yod, 'C', 'L', 'M', 'N', 'S', 'E', 'I', '/', 'X', 'R', 'W', 'T']);

/**
 * Sedra vowels
 * @constant
 * @type { string[] }
*/
var vowels = Object.freeze(['a', 'o', 'e', 'i', 'u']);

/**
 * Sedra/CAL diacretic characters:
 * * __'__ dot above, Qushaya
 * * __,__ dot below, Rukkakha
 * * **_** line under
 * * __*__ Seyame
 * @constant
 * @type { string[] }
*/
var diacretics = Object.freeze(["'", ',', '_', '*']);

/**
 * Is character c a Sedra 3 consonant?
 * @param { string } c input character
 * @returns { boolean } true if c is Sedra 3 consonant
 */
var isConsonant = function isConsonant(c) {
  return consonants.indexOf(c) > -1;
};

/**
 * Is character c a Sedra 3 vowel?
 * @param { string } c input character
 * @returns { boolean } true if c is Sedra 3 vowel
 */
var isVowel = function isVowel(c) {
  return vowels.indexOf(c) > -1;
};

/**
 * Is character c a diacretic? Same characters used for both Sedra 3 and CAL.
 * @param { string } c input character
 * @returns { boolean } true if c is a diacretic
 */
var isDiacretic = function isDiacretic(c) {
  return diacretics.indexOf(c) > -1;
};

/** @module peshitta.sedra */
/**
 * Sedra to CAL map
 * @constant
 * @type { Object.<string, string> }
*/
var toCalMap = Object.freeze(Object.create(null, {
  // Abgad
  A: { value: ')', enumerable: true },
  B: { value: 'b', enumerable: true },
  G: { value: 'g', enumerable: true },
  D: { value: 'd', enumerable: true },

  // Hawaz
  H: { value: 'h', enumerable: true },
  O: { value: 'w', enumerable: true },
  Z: { value: 'z', enumerable: true },

  // Ḥaṭy
  K: { value: 'x', enumerable: true },
  Y: { value: 'T', enumerable: true },
  ';': { value: 'y', enumerable: true },

  // Kalman
  C: { value: 'k', enumerable: true },
  L: { value: 'l', enumerable: true },
  M: { value: 'm', enumerable: true },
  N: { value: 'n', enumerable: true },

  // Saʿpac
  S: { value: 's', enumerable: true },
  E: { value: '(', enumerable: true },
  I: { value: 'p', enumerable: true },
  '/': { value: 'c', enumerable: true },

  // Qarshat
  X: { value: 'q', enumerable: true },
  R: { value: 'r', enumerable: true },
  W: { value: '$', enumerable: true },
  T: { value: 't', enumerable: true }
}));

/**
 * @private
 * Maps input character to CAL code
 * @param { string } c input character
 * @returns { string } CAL mapped character
 */
var map = function map(c) {
  return toCalMap[c] || c;
};

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
  for (var i = 0, len = word.length, m; i < len; i += m.length) {
    var c = word.charAt(i);
    switch (c) {
      case 'i':
        m = word.charAt(i + 1) === yod && isConsonant(word.charAt(i + 2)) ? 'yi' // Sedra stores as (iy)
        : map(c);
        break;
      case 'u':
        m = word.charAt(i + 1) === wow && isConsonant(word.charAt(i + 2)) ? 'wu' // Sedra stores as (uw)
        : map(c);
        break;
      case 'o':
        m = word.charAt(i + 1) === wow && isConsonant(word.charAt(i + 2)) ? 'wO' // Eastern O stored as (ow) in Sedra
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

export { wow, yod, consonants, vowels, diacretics, isConsonant, isVowel, isDiacretic, toCalMap, toCal };
