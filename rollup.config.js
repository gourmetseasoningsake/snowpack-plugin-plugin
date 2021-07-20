import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { main, module } from './package.json';



export default [
  // CommonJS (for Node) and ES module (for bundlers) build.
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

    //specifies the extensions of files that the plugin will operate on
    plugins: [ json(), nodeResolve({ extensions: ['.js' ] }) ],
    external: [],
  }
];