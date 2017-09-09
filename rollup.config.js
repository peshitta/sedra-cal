import buble from 'rollup-plugin-buble';
import pkg from './package.json';

const banner =
  '/**\n' +
  '* @file Utility to convert from Sedra 3 to CAL ASCII transliteration\n' +
  '* @version 1.0.3\n' +
  '* @author Greg Borota\n' +
  '* @copyright (c) 2017 Greg Borota.\n' +
  '* @license MIT\n' +
  '*\n' +
  '* Permission is hereby granted, free of charge, to any person obtaining a copy\n' +
  '* of this software and associated documentation files (the "Software"), to deal\n' +
  '* in the Software without restriction, including without limitation the rights\n' +
  '* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n' +
  '* copies of the Software, and to permit persons to whom the Software is\n' +
  '* furnished to do so, subject to the following conditions:\n' +
  '*\n' +
  '* The above copyright notice and this permission notice shall be included in\n' +
  '* all copies or substantial portions of the Software.\n' +
  '*\n' +
  '* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n' +
  '* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n' +
  '* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n' +
  '* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n' +
  '* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM\n' +
  '* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n' +
  '* SOFTWARE.\n' +
  '*/\n\n' +
  '// https://peshitta.github.io\n' +
  '// https://sedra.bethmardutho.org/about/fonts\n' +
  '// http://cal1.cn.huc.edu/searching/fullbrowser.html\n';

export default [
  // browser-friendly UMD build
  {
    banner,
    // noConflict: true,
    input: 'src/main.js',
    output: [{ file: pkg.main, format: 'umd' }],
    name: 'peshitta.sedra',
    plugins: [
      buble({
        // transpile ES2015+ to ES5
        exclude: ['node_modules/**']
      })
    ]
  },

  // ES module (for bundlers) build.
  {
    banner,
    // noConflict: true,
    input: 'src/main.js',
    output: [{ file: pkg.module, format: 'es' }]
  }
];
