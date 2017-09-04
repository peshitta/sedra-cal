/**
 * @file Utility to convert between Sedra 3 and CAL ASCII transliterations
 * @module sedra.util
 * @version 1.0.2
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
export const sedraConsonants = [
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
export const sedraVowels = ['a', 'o', 'e', 'i', 'u'];

/**
 * Sedra to CAL mapping
 * @constant
 * @type { Object.<string, string> }
*/
export const sedra2calMap = Object.create(null, {
  // Abgad
  [sedraConsonants[0]]: { value: ')', enumerable: true },
  [sedraConsonants[1]]: { value: 'b', enumerable: true },
  [sedraConsonants[2]]: { value: 'g', enumerable: true },
  [sedraConsonants[3]]: { value: 'd', enumerable: true },

  // Hawaz
  [sedraConsonants[4]]: { value: 'h', enumerable: true },
  [sedraConsonants[5]]: { value: 'w', enumerable: true },
  [sedraConsonants[6]]: { value: 'z', enumerable: true },

  // Ḥaṭy
  [sedraConsonants[7]]: { value: 'x', enumerable: true },
  [sedraConsonants[8]]: { value: 'T', enumerable: true },
  [sedraConsonants[9]]: { value: 'y', enumerable: true },

  // Kalman
  [sedraConsonants[10]]: { value: 'k', enumerable: true },
  [sedraConsonants[11]]: { value: 'l', enumerable: true },
  [sedraConsonants[12]]: { value: 'm', enumerable: true },
  [sedraConsonants[13]]: { value: 'n', enumerable: true },

  // Saʿpac
  [sedraConsonants[14]]: { value: 's', enumerable: true },
  [sedraConsonants[15]]: { value: '(', enumerable: true },
  [sedraConsonants[16]]: { value: 'p', enumerable: true },
  [sedraConsonants[17]]: { value: 'c', enumerable: true },

  // Qarshat
  [sedraConsonants[18]]: { value: 'q', enumerable: true },
  [sedraConsonants[19]]: { value: 'r', enumerable: true },
  [sedraConsonants[20]]: { value: '$', enumerable: true },
  [sedraConsonants[21]]: { value: 't', enumerable: true }
});

/**
 * CAL consonants
 * @constant
 * @type { string[] }
*/
export const calConsonants = [
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
export const calVowels = ['a', 'o', 'e', 'i', 'u', 'E', 'O'];

/**
 * CAL to Sedra mapping
 * @constant
 * @type { Object.<string, string> }
*/
export const cal2sedraMap = Object.create(null, {
  // Abgad
  [calConsonants[0]]: { value: 'A', enumerable: true },
  [calConsonants[1]]: { value: 'B', enumerable: true },
  [calConsonants[2]]: { value: 'G', enumerable: true },
  [calConsonants[3]]: { value: 'D', enumerable: true },

  // Hawaz
  [calConsonants[4]]: { value: 'H', enumerable: true },
  [calConsonants[5]]: { value: 'O', enumerable: true },
  [calConsonants[6]]: { value: 'Z', enumerable: true },

  // Ḥaṭy
  [calConsonants[7]]: { value: 'K', enumerable: true },
  [calConsonants[8]]: { value: 'Y', enumerable: true },
  [calConsonants[9]]: { value: ';', enumerable: true },

  // Kalman
  [calConsonants[10]]: { value: 'C', enumerable: true },
  [calConsonants[11]]: { value: 'L', enumerable: true },
  [calConsonants[12]]: { value: 'M', enumerable: true },
  [calConsonants[13]]: { value: 'N', enumerable: true },

  // Saʿpac
  [calConsonants[14]]: { value: 'S', enumerable: true },
  [calConsonants[15]]: { value: 'E', enumerable: true },
  [calConsonants[16]]: { value: 'I', enumerable: true },
  [calConsonants[17]]: { value: '/', enumerable: true },

  // Qarshat
  [calConsonants[18]]: { value: 'X', enumerable: true },
  [calConsonants[19]]: { value: 'R', enumerable: true },
  [calConsonants[20]]: { value: 'W', enumerable: true },
  [calConsonants[21]]: { value: 'T', enumerable: true },

  [calVowels[5]]: { value: 'e', enumerable: true }, // Eastern short E
  [calVowels[6]]: { value: 'o', enumerable: true } // Eastern O => Western o
});

/**
 * Sedra/CAL diacretic characters:
 * * __'__ dot above, Qushaya
 * * __,__ dot below, Rukkakha
 * * **_** line under
 * * __*__ Seyame
 * @constant
 * @type { string[] }
*/
export const diacretics = ["'", ',', '_', '*'];

/**
 * Is character c a Sedra 3 consonant
 * @param { string } c input character
 * @returns { boolean } true if c is Sedra 3 consonant
 */
export const isSedraConsonant = c => sedraConsonants.indexOf(c) > -1;

/**
 * Is character c a Sedra 3 vowel
 * @param { string } c input character
 * @returns { boolean } true if c is Sedra 3 vowel
 */
export const isSedraVowel = c => sedraVowels.indexOf(c) > -1;

/**
 * Is character c a CAL consonant
 * @param { string } c input character
 * @returns { boolean } true if c is CAL consonant
 */
export const isCalConsonant = c => calConsonants.indexOf(c) > -1;

/**
 * Is character c a CAL vowel
 * @param { string } c input character
 * @returns { boolean } true if c is CAL vowel
 */
export const isCalVowel = c => calVowels.indexOf(c) > -1;

/**
 * Is character c a diacretic
 * @param { string } c input character
 * @returns { boolean } true if c is a diacretic
 */
export const isDiacretic = c => diacretics.indexOf(c) > -1;

/**
 * Returns true if next character is c
 * @private
 * @param {string} c character to check
 * @param {number} index current index in the word
 * @param {string} word input word
 * @returns { boolean } true if next character is c
 */
const isNext = (c, index, word) => c === word.charAt(index + 1);

/**
 * @private
 * Maps input character to CAL code
 * @param { string } c input character
 * @returns { string } CAL mapped character
 */
const mapSedra = c => sedra2calMap[c] || c;

/**
 * Convert from Sedra 3 to CAL Code transliteration
 * @param {string} word input word in Sedra 3 transliteration
 * @returns {string} the input word converted to CAL code representation
 */
export function sedra2cal(word) {
  if (!word) {
    return word;
  }
  const map = mapSedra;
  let sb = '';
  for (let i = 0, len = word.length, m; i < len; i += m.length) {
    const c = word.charAt(i);
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
const mapCal = c => cal2sedraMap[c] || c;

/**
 * Convert from CAL to Sedra 3 transliteration
 * @param {string} word input word in CAL code transliteration
 * @returns {string} the input word converted to Sedra 3 representation
 */
export function cal2sedra(word) {
  if (!word) {
    return word;
  }
  const map = mapCal;
  let sb = '';
  for (let i = 0, len = word.length, m; i < len; i += m.length) {
    const c = word.charAt(i);
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
