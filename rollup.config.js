import buble from 'rollup-plugin-buble';
import pkg from './package.json';

export default [
  // browser-friendly UMD build
  {
    input: 'src/main.js',
    output: [{ file: pkg.main, format: 'umd' }],
    name: 'sedra.util',
    plugins: [
      buble({
        // transpile ES2015+ to ES5
        exclude: ['node_modules/**']
      })
    ]
  },

  // ES module (for bundlers) build.
  {
    input: 'src/main.js',
    output: [{ file: pkg.module, format: 'es' }]
  }
];
