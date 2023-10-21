import { babel, getBabelOutputPlugin } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default [{
  input: 'lib/index.js',
  // external: ['rita'],
  plugins: [nodeResolve(), commonjs()],
  output: [
    {
      file: 'dist/riscript.js',
      format: 'es',
      sourcemap: true
    }, {
      file: 'dist/riscript.es5.js',
      format: 'es',
      plugins: [getBabelOutputPlugin({ presets: ['@babel/preset-env'] })],
      sourcemap: true
    },
    {
      file: 'dist/riscript.cjs',
      format: 'cjs',
      plugins: [getBabelOutputPlugin({ presets: ['@babel/preset-env'] })],
      sourcemap: true
    }
  ]
},
{ // browser
  input: 'lib/index.js',
  output: [{
    file: 'dist/riscript.iife.js',
    format: 'iife',
    name: 'RiScript',
    sourcemap: true
  }, {
    file: 'dist/riscript.iife.min.js',
    format: 'iife',
    name: 'RiScript',
    plugins: [terser()]
  }],

  // external: ['rita'],
  plugins: [
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    }),
    nodeResolve({ browser: true })
  ]
},
{ // tests
  input: 'test/index.tests.js',
  output: {
    file: 'dist/riscript.tests.dist.js',
    format: 'iife',
    name: 'riscript_tests',
    sourcemap: false
  },
  // external: ['rita'],
  plugins: [
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    }),
    nodeResolve({ browser: true })
  ]
}];
