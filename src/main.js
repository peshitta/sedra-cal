/** @module sedraCal */
import { Writing, Mapper } from 'aramaic-mapper';
import {
  consonants,
  vowels,
  diacritics,
  wow,
  yod,
  isConsonant
} from 'sedra-code-util';
import {
  consonants as calConsonants,
  commonVowels as calVowels,
  diacritics as calDiacritics
} from 'cal-code-util';

/**
 * Aramaic mapper
 * @const
 * @type { Mapper }
 */
export const mapper = new Mapper(
  new Writing(consonants, vowels, diacritics),
  new Writing(calConsonants, calVowels, calDiacritics),
  (word, i, toFrom) => {
    const c = word.charAt(i);
    const to = () => toFrom[c] || c;
    let m;
    switch (c) {
      case 'i':
        m =
          word.charAt(i + 1) === yod && isConsonant(word.charAt(i + 2))
            ? 'yi' // Sedra stores as (iy)
            : to();
        break;
      case 'e':
        m =
          word.charAt(i + 1) === yod && isConsonant(word.charAt(i + 2))
            ? 'ye' // Sedra stores as (iy)
            : to();
        break;
      case 'u':
        m =
          word.charAt(i + 1) === wow && isConsonant(word.charAt(i + 2))
            ? 'wu' // Sedra stores as (uw)
            : to();
        break;
      case 'o':
        m =
          word.charAt(i + 1) === wow && isConsonant(word.charAt(i + 2))
            ? 'wO' // Eastern O stored as (ow) in Sedra
            : to();
        break;
      default:
        m = to();
        break;
    }
    return m;
  }
);

/**
 * Convert from Sedra 3 to CAL Code transliteration
 * @param {string} word input word in Sedra 3 transliteration
 * @returns {string} the input word converted to CAL code representation
 */
export const toCal = word => mapper.map(word);

/**
 * Sedra to CAL consonant map
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
