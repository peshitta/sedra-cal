const mapper = require('./build/sedra-cal.min');
const test = require('assert');

describe('Sedra', () => {
  describe('To CAL', () => {
    it('General case usage, with one-to-one mapping', () => {
      const word = mapper.sedra2cal('DXSR;A-DI;L;IOS');
      const vocalised = mapper.sedra2cal("D'XeSaRi;aA-D,I,i;Li;I'oOS");
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
      const word = mapper.sedra2cal('D;L;DOTH');
      const vocalised = mapper.sedra2cal("D'i;Li;D,uOT,eH");
      const wordExpected = 'dylydwth';
      const vocalisedExpected = "d'yilyid,wut,eh";
      test.strictEqual(word, wordExpected, 'sedra2cal_yi consonant');
      test.strictEqual(vocalised, vocalisedExpected, 'sedra2cal_yi vocalised');
    });
    it('Word with (uO) => (wu) mapping', () => {
      const word = mapper.sedra2cal('LBELDBB;CON');
      const vocalised = mapper.sedra2cal("LaB,EeLD'B,oB,a;C'uON");
      const wordExpected = 'lb(ldbbykwn';
      const vocalisedExpected = "lab,(eld'b,ob,ayk'wun";
      test.strictEqual(word, wordExpected, 'sedra2cal_wu consonant');
      test.strictEqual(vocalised, vocalisedExpected, 'sedra2cal_wu vocalised');
    });
    it('Word with (oO) => (wO) mapping', () => {
      const word = mapper.sedra2cal('ABHOH;');
      const vocalised = mapper.sedra2cal('AaB,oHaOH_;');
      const wordExpected = ')bhwhy';
      const vocalisedExpected = ')ab,ohawh_y';
      test.strictEqual(word, wordExpected, 'sedra2cal_wu consonant');
      test.strictEqual(vocalised, vocalisedExpected, 'sedra2cal_wu vocalised');
    });
  });
  describe('Util', () => {
    it('Is Sedra Consonant', () => {
      test.ok(mapper.isSedraConsonant('A'), 'isSedraConsonant');
      test.ok(mapper.isSedraConsonant(';'), 'isSedraConsonant');
      test.ok(mapper.isSedraConsonant('/'), 'isSedraConsonant');
      test.ok(mapper.isSedraConsonant('E'), 'isSedraConsonant');
      test.ok(mapper.isSedraConsonant('I'), 'isSedraConsonant');
      test.ok(!mapper.isSedraConsonant('i'), 'isSedraConsonant');
      test.ok(!mapper.isSedraConsonant('g'), 'isSedraConsonant');
      test.ok(!mapper.isSedraConsonant('u'), 'isSedraConsonant');
    });
    it('Is Sedra vowel', () => {
      test.ok(mapper.isSedraVowel('a'), 'isSedraVowel');
      test.ok(mapper.isSedraVowel('o'), 'isSedraVowel');
      test.ok(mapper.isSedraVowel('e'), 'isSedraVowel');
      test.ok(mapper.isSedraVowel('i'), 'isSedraVowel');
      test.ok(mapper.isSedraVowel('u'), 'isSedraVowel');
      test.ok(!mapper.isSedraVowel('E'), 'isSedraVowel');
      test.ok(!mapper.isSedraVowel('O'), 'isSedraVowel');
      test.ok(!mapper.isSedraVowel('A'), 'isSedraVowel');
      test.ok(!mapper.isSedraVowel('I'), 'isSedraVowel');
      test.ok(!mapper.isSedraVowel('U'), 'isSedraVowel');
      test.ok(!mapper.isSedraVowel(''), 'isSedraVowel');
    });
  });
});

describe('CAL', () => {
  describe('To Sedra', () => {
    it('General case cal2sedra usage, with one-to-one mapping', () => {
      const word = mapper.cal2sedra('dqsry)-dpylypws');
      const vocalised = mapper.cal2sedra("d'qesariya)-d,p,yilyip'wOs");
      const wordExpected = 'DXSR;A-DI;L;IOS';
      const vocalisedExpected = "D'XeSaRi;aA-D,I,i;Li;I'oOS";
      test.strictEqual(word, wordExpected, 'cal2sedra_generic consonant');
      test.strictEqual(
        vocalised,
        vocalisedExpected,
        'cal2sedra_generic vocalised'
      );
    });
    it('Word with (yi) => (i;) mapping', () => {
      const word = mapper.cal2sedra('dylydwth');
      const vocalised = mapper.cal2sedra("d'yilyid,wut,eh");
      const wordExpected = 'D;L;DOTH';
      const vocalisedExpected = "D'i;Li;D,uOT,eH";
      test.strictEqual(word, wordExpected, 'cal2sedra_yi consonant');
      test.strictEqual(vocalised, vocalisedExpected, 'cal2sedra_yi vocalised');
    });
    it('Word with short Eastern (E) => (e) mapping', () => {
      const word = mapper.cal2sedra(')wld');
      const vocalised = mapper.cal2sedra(')awlEd');
      const wordExpected = 'AOLD';
      const vocalisedExpected = 'AaOLeD';
      test.strictEqual(word, wordExpected, 'cal2sedra_yi consonant');
      test.strictEqual(vocalised, vocalisedExpected, 'cal2sedra_yi vocalised');
    });
    it('Word with (wu) => (uO) mapping', () => {
      const word = mapper.cal2sedra('lb(ldbbykwn');
      const vocalised = mapper.cal2sedra("lab,(eld'b,ob,ayk'wun");
      const wordExpected = 'LBELDBB;CON';
      const vocalisedExpected = "LaB,EeLD'B,oB,a;C'uON";
      test.strictEqual(word, wordExpected, 'sedra2cal_wu consonant');
      test.strictEqual(vocalised, vocalisedExpected, 'sedra2cal_wu vocalised');
    });
    it('Word with (wO) => (oO) mapping', () => {
      const word = mapper.cal2sedra(')bhwhy');
      const vocalised = mapper.cal2sedra(')ab,ohawh_y');
      const wordExpected = 'ABHOH;';
      const vocalisedExpected = 'AaB,oHaOH_;';
      test.strictEqual(word, wordExpected, 'cal2sedra_wO consonant');
      test.strictEqual(vocalised, vocalisedExpected, 'cal2sedra_wO vocalised');
    });
  });
  describe('Util', () => {
    it('Is CAL Consonant', () => {
      test.ok(mapper.isCalConsonant('b'), 'isCalConsonant');
      test.ok(mapper.isCalConsonant('$'), 'isCalConsonant');
      test.ok(mapper.isCalConsonant(')'), 'isCalConsonant');
      test.ok(mapper.isCalConsonant('('), 'isCalConsonant');
      test.ok(mapper.isCalConsonant('g'), 'isCalConsonant');
      test.ok(!mapper.isCalConsonant('B'), 'isCalConsonant');
      test.ok(!mapper.isCalConsonant('G'), 'isCalConsonant');
      test.ok(!mapper.isCalConsonant('u'), 'isCalConsonant');
    });
    it('Is CAL vowel', () => {
      test.ok(mapper.isCalVowel('a'), 'isCalVowel');
      test.ok(mapper.isCalVowel('o'), 'isCalVowel');
      test.ok(mapper.isCalVowel('e'), 'isCalVowel');
      test.ok(mapper.isCalVowel('i'), 'isCalVowel');
      test.ok(mapper.isCalVowel('u'), 'isCalVowel');
      test.ok(mapper.isCalVowel('E'), 'isCalVowel');
      test.ok(mapper.isCalVowel('O'), 'isCalVowel');
      test.ok(!mapper.isCalVowel('A'), 'isCalVowel');
      test.ok(!mapper.isCalVowel('I'), 'isCalVowel');
      test.ok(!mapper.isCalVowel('U'), 'isCalVowel');
      test.ok(!mapper.isCalVowel(''), 'isCalVowel');
    });
  });
});

describe('Diacretics', () => {
  it('isDiacretic', () => {
    test.ok(mapper.isDiacretic("'"), 'isDiacretic');
    test.ok(mapper.isDiacretic(','), 'isDiacretic');
    test.ok(mapper.isDiacretic('*'), 'isDiacretic');
    test.ok(mapper.isDiacretic('_'), 'isDiacretic');
    test.ok(!mapper.isDiacretic(''), 'isDiacretic');
    test.ok(!mapper.isDiacretic(' '), 'isDiacretic');
  });
});
