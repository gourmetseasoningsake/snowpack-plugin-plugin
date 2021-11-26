import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { module } from './package.json'



export default [
  { input: 'plugin.js',
    output: [
      { file: module,
        format: 'es',
        exports: 'default'
      }
    ],
    plugins: [ json(), nodeResolve({ extensions: ['.js' ] }) ],
    external: [],
  }
]