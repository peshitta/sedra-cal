/**
 * @file Utility functions to convert between Sedra 3 and CAL ASCII transliterations
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
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

// https://sedra.bethmardutho.org/about/fonts
// http://cal1.cn.huc.edu/searching/fullbrowser.html

/**
 * Sedra to CAL mapping
 * @constant
 * @type {Object.<string, string>}
*/
export const sedra2calMap = Object.create(null, {
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
});

/**
 * Returns true if next character is c
 * @private
 * @param {string} c character to check
 * @param {number} index current index in the word
 * @param {string} word input word
 * @returns { string } true if next character is c
 */
const isNext = (c, index, word) => c === word.charAt(index + 1);

/**
 * Convert from Sedra 3 to CAL Code transliteration
 * @param {string} word input word in Sedra 3 transliteration
 * @returns {string} the input word converted to CAL code representation
 */
export function sedra2cal(word) {
  if (!word) {
    return word;
  }
  let sb = '';
  for (let i = 0, len = word.length; i < len; i++) {
    const c = word.charAt(i);
    switch (c) {
      case 'i':
        if (isNext(';', i, word)) {
          sb += 'yi'; // Sedra stores in invers order (iy)
          ++i;
        }
        break;
      case 'u':
        if (isNext('O', i, word)) {
          sb += 'wu'; // Sedra stores in invers order (uw)
          ++i;
        }
        break;
      case 'o':
        if (isNext('O', i, word)) {
          sb += 'wO'; // Eastern long O is stored as (ow) in Sedra
          ++i;
        }
        break;
      default:
        sb += sedra2calMap[c] || c;
        break;
    }
  }
  return sb;
}

/**
 * CAL to Sedra mapping
 * @constant
 * @type {Object.<string, string>}
*/
export const cal2sedraMap = Object.create(null, {
  // Abgad
  ')': { value: 'A', enumerable: true },
  b: { value: 'B', enumerable: true },
  g: { value: 'G', enumerable: true },
  d: { value: 'D', enumerable: true },

  // Hawaz
  h: { value: 'H', enumerable: true },
  w: { value: 'O', enumerable: true },
  z: { value: 'Z', enumerable: true },

  // Ḥaṭy
  x: { value: 'K', enumerable: true },
  T: { value: 'Y', enumerable: true },
  y: { value: ';', enumerable: true },

  // Kalman
  k: { value: 'C', enumerable: true },
  l: { value: 'L', enumerable: true },
  m: { value: 'M', enumerable: true },
  n: { value: 'N', enumerable: true },

  // Saʿpac
  s: { value: 'S', enumerable: true },
  '(': { value: 'E', enumerable: true },
  p: { value: 'I', enumerable: true },
  c: { value: '/', enumerable: true },

  // Qarshat
  q: { value: 'X', enumerable: true },
  r: { value: 'R', enumerable: true },
  $: { value: 'W', enumerable: true },
  t: { value: 'T', enumerable: true },

  E: { value: 'e', enumerable: true }, // Eastern short e
  O: { value: 'o', enumerable: true } // Eastern long O changes to o in Western
});

/**
 * Returns true if prior character is c
 * @private
 * @param {string} c character to check
 * @param {number} index current index in the word
 * @param {string} word input word
 * @returns { string } true if prior character is c
 */
const isPrior = (c, index, word) => c === word.charAt(index - 1);

/**
 * Convert from CAL to Sedra 3 transliteration
 * @param {string} word input word in CAL code transliteration
 * @returns {string} the input word converted to Sedra 3 representation
 */
export function cal2sedra(word) {
  if (!word) {
    return word;
  }
  let sb = '';
  for (let i = 0, len = word.length; i < len; i++) {
    const c = word.charAt(i);
    switch (c) {
      case 'i':
        if (isPrior('y', i, word)) {
          sb += 'i;'; // Sedra stores in invers order (iy)
          ++i;
        }
        break;
      case 'u':
        if (isPrior('w', i, word)) {
          sb += 'uO'; // Sedra stores in invers order (uw)
          ++i;
        }
        break;
      case 'O':
        if (isPrior('w', i, word)) {
          sb += 'oO'; // Eastern long O is stored as (ow) in Sedra
          ++i;
        }
        break;
      default:
        sb += cal2sedraMap[c] || c;
        break;
    }
  }
  return sb;
}