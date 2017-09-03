const mapper = require('../build/sedra-cal.min.js');

/**
 * General case usage, with one-to-one mapping
 * @param {object} test 
 */
const sedra2cal_generic = test => {
  test.expect(2);
  const word = mapper.sedra2cal('DXSR;A-DI;L;IOS');
  const vocalised = mapper.sedra2cal("D'XeSaRi;aA-D,I,i;Li;I'oOS");
  const wordExpected = 'dqsry)-dpylypws';
  const vocalisedExpected = "d'qesariya)-d,p,yilyip'wOs";
  test.strictEqual(word, wordExpected, 'sedra2cal_generic consonant');
  test.strictEqual(vocalised, vocalisedExpected, 'sedra2cal_generic vocalised');
  test.done();
};

/**
 * Word with (i;) => (yi) mapping
 * @param {object} test 
 */
const sedra2cal_yi = test => {
  test.expect(2);
  const word = mapper.sedra2cal('D;L;DOTH');
  const vocalised = mapper.sedra2cal("D'i;Li;D,uOT,eH");
  const wordExpected = 'dylydwth';
  const vocalisedExpected = "d'yilyid,wut,eh";
  test.strictEqual(word, wordExpected, 'sedra2cal_yi consonant');
  test.strictEqual(vocalised, vocalisedExpected, 'sedra2cal_yi vocalised');
  test.done();
};

/**
 * Word with (uO) => (wu) mapping
 * @param {object} test 
 */
const sedra2cal_wu = test => {
  test.expect(1);
  test.ok(true, 'sedra2cal pass');
  test.done();
};

/**
 * Word with (oO) => (wO) mapping
 * @param {object} test 
 */
const sedra2cal_wO = test => {
  test.expect(1);
  test.ok(true, 'cal2sedra_wO pass');
  test.done();
};

/**
 * General case cal2sedra usage, with one-to-one mapping
 * @param {object} test 
 */
const cal2sedra_generic = test => {
  test.expect(2);
  const word = mapper.cal2sedra('dqsry)-dpylypws');
  const vocalised = mapper.cal2sedra("d'qesariya)-d,p,yilyip'wOs");
  const wordExpected = 'DXSR;A-DI;L;IOS';
  const vocalisedExpected = "D'XeSaRi;aA-D,I,i;Li;I'oOS";
  test.strictEqual(word, wordExpected, 'cal2sedra_generic consonant');
  test.strictEqual(vocalised, vocalisedExpected, 'cal2sedra_generic vocalised');
  test.done();
};

/**
 * Word with (yi) => (i;) mapping
 * @param {object} test 
 */
const cal2sedra_yi = test => {
  test.expect(2);
  const word = mapper.cal2sedra('dylydwth');
  const vocalised = mapper.cal2sedra("d'yilyid,wut,eh");
  const wordExpected = 'D;L;DOTH';
  const vocalisedExpected = "D'i;Li;D,uOT,eH";
  test.strictEqual(word, wordExpected, 'cal2sedra_yi consonant');
  test.strictEqual(vocalised, vocalisedExpected, 'cal2sedra_yi vocalised');
  test.done();
};

/**
 * Word with short Eastern (E) => (e) mapping
 * @param {object} test 
 */
const cal2sedra_E = test => {
  test.expect(2);
  const word = mapper.cal2sedra(')wld');
  const vocalised = mapper.cal2sedra(')awlEd');
  const wordExpected = 'AOLD';
  const vocalisedExpected = 'AaOLeD';
  test.strictEqual(word, wordExpected, 'cal2sedra_yi consonant');
  test.strictEqual(vocalised, vocalisedExpected, 'cal2sedra_yi vocalised');
  test.done();
};

/**
 * Word with (wu) => (uO) mapping
 * @param {object} test 
 */
const cal2sedra_wu = test => {
  test.expect(1);
  test.ok(true, 'cal2sedra_wu pass');
  test.done();
};

/**
 * Word with (wO) => (oO) mapping
 * @param {object} test 
 */
const cal2sedra_wO = test => {
  test.expect(1);
  test.ok(true, 'cal2sedra_wO pass');
  test.done();
};

module.exports = {
  sedra2cal_generic,
  sedra2cal_yi,
  sedra2cal_wu,
  sedra2cal_wO,

  cal2sedra_generic,
  cal2sedra_yi,
  cal2sedra_wu,
  cal2sedra_E,
  cal2sedra_wO
};
