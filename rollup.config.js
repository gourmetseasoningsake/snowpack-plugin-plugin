import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { main, module } from './package.json'



export default [
  { input: 'plugin.js',
    output: [
        { file: main,
          format: 'cjs',
          exports: 'default'
        },
        { file: module,
          format: 'es',
          exports: 'default'
        }
    ],

    plugins: [ json(), nodeResolve({ extensions: ['.js' ] }) ],
    external: [],
  }
]