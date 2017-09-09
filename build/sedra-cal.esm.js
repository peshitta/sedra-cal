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
 * Sedra consonants
 * @constant
 * @type { string[] }
*/
const consonants = [
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
const vowels = ['a', 'o', 'e', 'i', 'u'];

/**
 * Sedra/CAL diacretic characters:
 * * __'__ dot above, Qushaya
 * * __,__ dot below, Rukkakha
 * * **_** line under
 * * __*__ Seyame
 * @constant
 * @type { string[] }
*/
const diacretics = ["'", ',', '_', '*'];

/**
 * Sedra to CAL map
 * @constant
 * @type { Object.<string, string> }
*/
const toCalMap = Object.create(null, {
  // Abgad
  [consonants[0]]: { value: ')', enumerable: true },
  [consonants[1]]: { value: 'b', enumerable: true },
  [consonants[2]]: { value: 'g', enumerable: true },
  [consonants[3]]: { value: 'd', enumerable: true },

  // Hawaz
  [consonants[4]]: { value: 'h', enumerable: true },
  [consonants[5]]: { value: 'w', enumerable: true },
  [consonants[6]]: { value: 'z', enumerable: true },

  // Ḥaṭy
  [consonants[7]]: { value: 'x', enumerable: true },
  [consonants[8]]: { value: 'T', enumerable: true },
  [consonants[9]]: { value: 'y', enumerable: true },

  // Kalman
  [consonants[10]]: { value: 'k', enumerable: true },
  [consonants[11]]: { value: 'l', enumerable: true },
  [consonants[12]]: { value: 'm', enumerable: true },
  [consonants[13]]: { value: 'n', enumerable: true },

  // Saʿpac
  [consonants[14]]: { value: 's', enumerable: true },
  [consonants[15]]: { value: '(', enumerable: true },
  [consonants[16]]: { value: 'p', enumerable: true },
  [consonants[17]]: { value: 'c', enumerable: true },

  // Qarshat
  [consonants[18]]: { value: 'q', enumerable: true },
  [consonants[19]]: { value: 'r', enumerable: true },
  [consonants[20]]: { value: '$', enumerable: true },
  [consonants[21]]: { value: 't', enumerable: true }
});

/**
 * Is character c a Sedra 3 consonant?
 * @param { string } c input character
 * @returns { boolean } true if c is Sedra 3 consonant
 */
const isConsonant = c => consonants.indexOf(c) > -1;

/**
 * Is character c a Sedra 3 vowel?
 * @param { string } c input character
 * @returns { boolean } true if c is Sedra 3 vowel
 */
const isVowel = c => vowels.indexOf(c) > -1;

/**
 * Is character c a diacretic? Same characters used for both Sedra 3 and CAL.
 * @param { string } c input character
 * @returns { boolean } true if c is a diacretic
 */
const isDiacretic = c => diacretics.indexOf(c) > -1;

/**
 * @private
 * Maps input character to CAL code
 * @param { string } c input character
 * @returns { string } CAL mapped character
 */
const map = c => toCalMap[c] || c;

/**
 * Convert from Sedra 3 to CAL Code transliteration
 * @param {string} word input word in Sedra 3 transliteration
 * @returns {string} the input word converted to CAL code representation
 */
function toCal(word) {
  if (!word) {
    return word;
  }

  let sb = '';
  for (let i = 0, len = word.length, m; i < len; i += m.length) {
    const c = word.charAt(i);
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

export { consonants, vowels, diacretics, toCalMap, isConsonant, isVowel, isDiacretic, toCal };
