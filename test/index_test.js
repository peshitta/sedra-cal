import { strictEqual, ok } from 'assert';
import { toCal, toCalMap } from '../build/sedra-cal';

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
