import { babel, getBabelOutputPlugin } from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs'

export default [{
  input: 'lib/index.js',
  external: ['rita'],
  plugins: [nodeResolve(), commonjs()],
  output: [
    {
      file: 'dist/riscript.js',
      format: 'es',
      sourcemap: true,
    }
    , {
      file: 'dist/riscript.es5.js',
      format: 'es',
      plugins: [getBabelOutputPlugin({ presets: ["@babel/preset-env"] })],
      sourcemap: true
    },
    {
      file: 'dist/riscript.cjs',
      format: 'cjs',
      plugins: [getBabelOutputPlugin({ presets: ["@babel/preset-env"] })],
      sourcemap: true
    }
  ]
},
{
  input: 'lib/index.js',
  output: {
    file: 'dist/riscript.iife.js',
    format: 'iife',
    name: 'RiScript',
    sourcemap: true
  },
  external: ['rita'],
  plugins: [
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    }),
    nodeResolve()
  ]
}]
