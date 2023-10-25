import { babel, getBabelOutputPlugin } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import versionInjector from 'rollup-plugin-version-injector';

const onwarn = warning => {
  // Silence circular dependency warning for chevrotain/chai
  if (warning.code === 'CIRCULAR_DEPENDENCY'
    && warning.ids.every(id => id.includes('chevrotain') || id.includes('chai'))) {
    return
  }
  console.warn(`(!) ${warning.message}`)
}

export default [{
  onwarn,
  input: 'lib/index.js',
  // external: ['rita'],
  plugins: [nodeResolve(), commonjs(), versionInjector({
    injectInTags: {
      fileRegexp: /\.(js|cjs|html)$/,
      dateFormat: 'isoDateTime',
    },
    logLevel: 'warn',
  })],
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
  onwarn,
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
    nodeResolve({ browser: true }),
    versionInjector({ logLevel: 'warn' })
  ]
},
{ // tests
  onwarn,
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
    nodeResolve({ browser: true }),
    versionInjector({ logLevel: 'warn' })
  ]
}];
