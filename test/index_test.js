import { strictEqual, ok } from 'assert';
import {
  toCal,
  toCalMap,
  isConsonant,
  isVowel,
  isDiacretic
} from '../build/sedra-cal';

describe('Sedra', () => {
  describe('To CAL', () => {
    it('General case usage, with one-to-one mapping', () => {
      const word = toCal('DXSR;A-DI;L;IOS');
      const vocalised = toCal("D'XeSaRi;aA-D,I,i;Li;I'oOS");
      const wordExpected = 'dqsry)-dpylypws';
      const vocalisedExpected = "d'qesariya)-d,p,yilyip'wOs";
      strictEqual(word, wordExpected, 'toCal_generic consonant');
      strictEqual(vocalised, vocalisedExpected, 'toCal_generic vocalised');
    });
    it('Word with (i;) => (yi) mapping', () => {
      const word = toCal('D;L;DOTH');
      const vocalised = toCal("D'i;Li;D,uOT,eH");
      const wordExpected = 'dylydwth';
      const vocalisedExpected = "d'yilyid,wut,eh";
      strictEqual(word, wordExpected, 'toCal_yi consonant');
      strictEqual(vocalised, vocalisedExpected, 'toCal_yi vocalised');
    });
    it('Word with (uO) => (wu) mapping', () => {
      const word = toCal('LBELDBB;CON');
      const vocalised = toCal("LaB,EeLD'B,oB,a;C'uON");
      const wordExpected = 'lb(ldbbykwn';
      const vocalisedExpected = "lab,(eld'b,ob,ayk'wun";
      strictEqual(word, wordExpected, 'toCal_wu consonant');
      strictEqual(vocalised, vocalisedExpected, 'toCal_wu vocalised');
    });
    it('Word with (oO) => (wO) mapping', () => {
      const word = toCal('ABHOH;');
      const vocalised = toCal('AaB,oHaOH_;');
      const wordExpected = ')bhwhy';
      const vocalisedExpected = ')ab,ohawh_y';
      strictEqual(word, wordExpected, 'toCal_wu consonant');
      strictEqual(vocalised, vocalisedExpected, 'toCal_wu vocalised');
    });
  });
  describe('Util', () => {
    it('Is Sedra Consonant', () => {
      ok(isConsonant('A'), 'isConsonant');
      ok(isConsonant(';'), 'isConsonant');
      ok(isConsonant('/'), 'isConsonant');
      ok(isConsonant('E'), 'isConsonant');
      ok(isConsonant('I'), 'isConsonant');
      ok(!isConsonant('i'), 'isConsonant');
      ok(!isConsonant('g'), 'isConsonant');
      ok(!isConsonant('u'), 'isConsonant');
    });
    it('Is Sedra vowel', () => {
      ok(isVowel('a'), 'isVowel');
      ok(isVowel('o'), 'isVowel');
      ok(isVowel('e'), 'isVowel');
      ok(isVowel('i'), 'isVowel');
      ok(isVowel('u'), 'isVowel');
      ok(!isVowel('E'), 'isVowel');
      ok(!isVowel('O'), 'isVowel');
      ok(!isVowel('A'), 'isVowel');
      ok(!isVowel('I'), 'isVowel');
      ok(!isVowel('U'), 'isVowel');
      ok(!isVowel(''), 'isVowel');
    });
    it('Is Mapped Letter', () => {
      ok(toCalMap.A, 'toCalMap');
      ok(toCalMap.B, 'toCalMap');
      ok(toCalMap.C, 'toCalMap');
      ok(toCalMap.D, 'toCalMap');
      ok(toCalMap.E, 'toCalMap');
      ok(!toCalMap.F, 'toCalMap');
      ok(!toCalMap.b, 'toCalMap');
      ok(!toCalMap.c, 'toCalMap');
      ok(!toCalMap.e, 'toCalMap');
      ok(!toCalMap.f, 'toCalMap');
      ok(!toCalMap[''], 'toCalMap');
    });
  });
});

describe('Diacretics', () => {
  it('isDiacretic', () => {
    ok(isDiacretic("'"), 'isDiacretic');
    ok(isDiacretic(','), 'isDiacretic');
    ok(isDiacretic('*'), 'isDiacretic');
    ok(isDiacretic('_'), 'isDiacretic');
    ok(!isDiacretic(''), 'isDiacretic');
    ok(!isDiacretic(' '), 'isDiacretic');
  });
});
