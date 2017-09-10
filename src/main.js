/** @module peshitta.sedra */
import {
  wow,
  yod,
  consonants,
  vowels,
  diacretics,
  isConsonant,
  isVowel,
  isDiacretic
} from './sedra';

export {
  wow,
  yod,
  consonants,
  vowels,
  diacretics,
  isConsonant,
  isVowel,
  isDiacretic
};

/**
 * Sedra to CAL map
 * @constant
 * @type { Object.<string, string> }
*/
export const toCalMap = Object.freeze(
  Object.create(null, {
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
  })
);

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
export function toCal(word) {
  if (!word) {
    return word;
  }

  let sb = '';
  for (let i = 0, len = word.length, m; i < len; i += m.length) {
    const c = word.charAt(i);
    switch (c) {
      case 'i':
        m =
          word.charAt(i + 1) === yod && isConsonant(word.charAt(i + 2))
            ? 'yi' // Sedra stores as (iy)
            : map(c);
        break;
      case 'u':
        m =
          word.charAt(i + 1) === wow && isConsonant(word.charAt(i + 2))
            ? 'wu' // Sedra stores as (uw)
            : map(c);
        break;
      case 'o':
        m =
          word.charAt(i + 1) === wow && isConsonant(word.charAt(i + 2))
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
