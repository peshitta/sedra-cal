/** @module peshitta.sedra */
/**
 * Sedra consonants
 * @constant
 * @type { string[] }
*/
export const consonants = Object.freeze([
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
]);

/**
 * Sedra vowels
 * @constant
 * @type { string[] }
*/
export const vowels = Object.freeze(['a', 'o', 'e', 'i', 'u']);

/**
 * Sedra/CAL diacretic characters:
 * * __'__ dot above, Qushaya
 * * __,__ dot below, Rukkakha
 * * **_** line under
 * * __*__ Seyame
 * @constant
 * @type { string[] }
*/
export const diacretics = Object.freeze(["'", ',', '_', '*']);

/**
 * Sedra to CAL map
 * @constant
 * @type { Object.<string, string> }
*/
export const toCalMap = Object.freeze(Object.create(null, {
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
}));

/**
 * Is character c a Sedra 3 consonant?
 * @param { string } c input character
 * @returns { boolean } true if c is Sedra 3 consonant
 */
export const isConsonant = c => consonants.indexOf(c) > -1;

/**
 * Is character c a Sedra 3 vowel?
 * @param { string } c input character
 * @returns { boolean } true if c is Sedra 3 vowel
 */
export const isVowel = c => vowels.indexOf(c) > -1;

/**
 * Is character c a diacretic? Same characters used for both Sedra 3 and CAL.
 * @param { string } c input character
 * @returns { boolean } true if c is a diacretic
 */
export const isDiacretic = c => diacretics.indexOf(c) > -1;

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
