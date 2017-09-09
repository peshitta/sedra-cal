const map = require('../build/sedra-cal.min');
const test = require('assert');

describe('Sedra', () => {
  describe('To CAL', () => {
    it('General case usage, with one-to-one mapping', () => {
      const word = map.toCal('DXSR;A-DI;L;IOS');
      const vocalised = map.toCal("D'XeSaRi;aA-D,I,i;Li;I'oOS");
      const wordExpected = 'dqsry)-dpylypws';
      const vocalisedExpected = "d'qesariya)-d,p,yilyip'wOs";
      test.strictEqual(word, wordExpected, 'sedra2cal_generic consonant');
      test.strictEqual(
        vocalised,
        vocalisedExpected,
        'sedra2cal_generic vocalised'
      );
    });
    it('Word with (i;) => (yi) mapping', () => {
      const word = map.toCal('D;L;DOTH');
      const vocalised = map.toCal("D'i;Li;D,uOT,eH");
      const wordExpected = 'dylydwth';
      const vocalisedExpected = "d'yilyid,wut,eh";
      test.strictEqual(word, wordExpected, 'sedra2cal_yi consonant');
      test.strictEqual(vocalised, vocalisedExpected, 'sedra2cal_yi vocalised');
    });
    it('Word with (uO) => (wu) mapping', () => {
      const word = map.toCal('LBELDBB;CON');
      const vocalised = map.toCal("LaB,EeLD'B,oB,a;C'uON");
      const wordExpected = 'lb(ldbbykwn';
      const vocalisedExpected = "lab,(eld'b,ob,ayk'wun";
      test.strictEqual(word, wordExpected, 'sedra2cal_wu consonant');
      test.strictEqual(vocalised, vocalisedExpected, 'sedra2cal_wu vocalised');
    });
    it('Word with (oO) => (wO) mapping', () => {
      const word = map.toCal('ABHOH;');
      const vocalised = map.toCal('AaB,oHaOH_;');
      const wordExpected = ')bhwhy';
      const vocalisedExpected = ')ab,ohawh_y';
      test.strictEqual(word, wordExpected, 'sedra2cal_wu consonant');
      test.strictEqual(vocalised, vocalisedExpected, 'sedra2cal_wu vocalised');
    });
  });
  describe('Util', () => {
    it('Is Sedra Consonant', () => {
      test.ok(map.isConsonant('A'), 'sedra.isConsonant');
      test.ok(map.isConsonant(';'), 'sedra.isConsonant');
      test.ok(map.isConsonant('/'), 'sedra.isConsonant');
      test.ok(map.isConsonant('E'), 'sedra.isConsonant');
      test.ok(map.isConsonant('I'), 'sedra.isConsonant');
      test.ok(!map.isConsonant('i'), 'sedra.isConsonant');
      test.ok(!map.isConsonant('g'), 'sedra.isConsonant');
      test.ok(!map.isConsonant('u'), 'sedra.isConsonant');
    });
    it('Is Sedra vowel', () => {
      test.ok(map.isVowel('a'), 'sedra.isVowel');
      test.ok(map.isVowel('o'), 'sedra.isVowel');
      test.ok(map.isVowel('e'), 'sedra.isVowel');
      test.ok(map.isVowel('i'), 'sedra.isVowel');
      test.ok(map.isVowel('u'), 'sedra.isVowel');
      test.ok(!map.isVowel('E'), 'sedra.isVowel');
      test.ok(!map.isVowel('O'), 'sedra.isVowel');
      test.ok(!map.isVowel('A'), 'sedra.isVowel');
      test.ok(!map.isVowel('I'), 'sedra.isVowel');
      test.ok(!map.isVowel('U'), 'sedra.isVowel');
      test.ok(!map.isVowel(''), 'sedra.isVowel');
    });
  });
});

describe('Diacretics', () => {
  it('isDiacretic', () => {
    test.ok(map.isDiacretic("'"), 'isDiacretic');
    test.ok(map.isDiacretic(','), 'isDiacretic');
    test.ok(map.isDiacretic('*'), 'isDiacretic');
    test.ok(map.isDiacretic('_'), 'isDiacretic');
    test.ok(!map.isDiacretic(''), 'isDiacretic');
    test.ok(!map.isDiacretic(' '), 'isDiacretic');
  });
});
