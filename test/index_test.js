const { strictEqual, ok } = require('assert');
const { toCal, mapper, toCalMap } = require('../build/sedra-cal');

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
    it('General case usage, with unmapped', () => {
      const word = toCal('|DXSR;A-DI;L;IOS>');
      const vocalised = toCal("D'X}eSaRi;aA-D,I,i;Li;I'oOS");
      const wordExpected = '|dqsry)-dpylypws>';
      const vocalisedExpected = "d'q}esariya)-d,p,yilyip'wOs";
      strictEqual(word, wordExpected, 'toCal_generic consonant');
      strictEqual(vocalised, vocalisedExpected, 'toCal_generic vocalised');
    });
    it('Word with (i;) => (yi) mapping', () => {
      const word = toCal('D;L;DOTH');
      let vocalised = toCal("D'i;Li;D,uOT,eH");
      const wordExpected = 'dylydwth';
      let vocalisedExpected = "d'yilyid,wut,eh";
      strictEqual(word, wordExpected, 'toCal_yi consonant');
      strictEqual(vocalised, vocalisedExpected, 'toCal_yi vocalised');

      vocalised = toCal("AaT'i;");
      vocalisedExpected = ")at'yi";
      strictEqual(vocalised, vocalisedExpected, 'toCal_yi$ vocalised');
    });
    it('Word with (e;) => (ye) mapping', () => {
      const word = toCal('B;T');
      const vocalised = toCal("B'e;T,");
      const wordExpected = 'byt';
      const vocalisedExpected = "b'yet,";
      strictEqual(word, wordExpected, 'toCal_ye consonant');
      strictEqual(vocalised, vocalisedExpected, 'toCal_ye vocalised');
    });
    it('Word with (uO) => (wu) mapping', () => {
      const word = toCal('LBELDBB;CON');
      let vocalised = toCal("LaB,EeLD'B,oB,a;C'uON");
      const wordExpected = 'lb(ldbbykwn';
      let vocalisedExpected = "lab,(eld'b,ob,ayk'wun";
      strictEqual(word, wordExpected, 'toCal_wu consonant');
      strictEqual(vocalised, vocalisedExpected, 'toCal_wu vocalised');

      vocalised = toCal('AeLuO');
      vocalisedExpected = ')elwu';
      strictEqual(vocalised, vocalisedExpected, 'toCal_wu$ vocalised');
    });
    it('Standalone U', () => {
      const word = toCal('LBELDBB;CON');
      const vocalised = toCal("LaB,EeLD'B,oB,a;C'uONu");
      const wordExpected = 'lb(ldbbykwn';
      const vocalisedExpected = "lab,(eld'b,ob,ayk'wunu";
      strictEqual(word, wordExpected, 'toCal_wu consonant');
      strictEqual(vocalised, vocalisedExpected, 'toCal_wu vocalised');
    });
    it('Word with (oO) => (wO) mapping', () => {
      const word = toCal('AGBOS');
      let vocalised = toCal('AaG,aB,oOS');
      const wordExpected = ')gbws';
      let vocalisedExpected = ')ag,ab,wOs';
      strictEqual(word, wordExpected, 'toCal_oO consonant');
      strictEqual(vocalised, vocalisedExpected, 'toCal_oO vocalised');

      vocalised = toCal('AoO');
      vocalisedExpected = ')wO';
      strictEqual(vocalised, vocalisedExpected, 'toCal_oO$ vocalised');
    });
    it('Blank word returns blank', () => {
      const word = toCal('');
      const wordExpected = '';
      strictEqual(word, wordExpected, 'toCal_blank');
    });
    it('Null word returns null', () => {
      const word = toCal(null);
      const wordExpected = null;
      strictEqual(word, wordExpected, 'toCal_null');
    });
    it('Undefined word returns undefined', () => {
      const word = toCal(undefined);
      const wordExpected = undefined;
      strictEqual(word, wordExpected, 'toCal_undefined');
    });
    it('0 number as word returns 0', () => {
      const word = toCal(0);
      const wordExpected = 0;
      strictEqual(word, wordExpected, 'toCal_zero');
    });
  });
  describe('Util', () => {
    it('Is Mapped Letter', () => {
      ok(toCalMap.A, 'A toCalMap');
      ok(toCalMap.B, 'B toCalMap');
      ok(toCalMap.C, 'C toCalMap');
      ok(toCalMap.D, 'D toCalMap');
      ok(toCalMap.E, 'E toCalMap');
      ok(!toCalMap.F, 'F toCalMap');
      ok(!toCalMap.b, 'b toCalMap');
      ok(!toCalMap.c, 'c toCalMap');
      ok(!toCalMap.e, 'e toCalMap');
      ok(!toCalMap.f, 'f toCalMap');
      ok(!toCalMap[''], "'' toCalMap");
    });
  });
  describe('Mapped writing', () => {
    it('Consonants length', () => {
      strictEqual(
        mapper.fromWriting.consonants.length,
        mapper.toWriting.consonants.length,
        'Length differs'
      );
      ok(mapper.fromWriting.consonants.length === 22, 'Length equal to 22');
    });
    it('Vowels length', () => {
      strictEqual(
        mapper.fromWriting.vowels.length,
        mapper.toWriting.vowels.length,
        'Length differs'
      );
      ok(mapper.fromWriting.vowels.length === 5, 'Length equal to 5');
    });
    it('Diacritics length', () => {
      strictEqual(
        mapper.fromWriting.diacritics.length,
        mapper.toWriting.diacritics.length,
        'Length differs'
      );
      ok(mapper.fromWriting.diacritics.length === 4, 'Length equal to 4');
    });
  });
});
