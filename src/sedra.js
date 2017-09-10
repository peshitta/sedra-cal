/** @module peshitta.sedra */
/**
 * Wow semivowel
 * @constant
 * @type { string }
 */
export const wow = 'O';

/**
 * Yod semivowel
 * @constant
 * @type { string }
 */
export const yod = ';';

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
  wow,
  'Z',
  'K',
  'Y',
  yod,
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
