// run via $ node test/test.require.cjs

let RiScript = require('../dist/riscript.cjs');
console.log('RiScript v' + RiScript.VERSION);
Object.getOwnPropertyNames(RiScript)
  .filter(p => !p.startsWith('_')
    && typeof RiScript[p] === "function")
  .forEach(p => console.log(`RiScript.${p}()`));
