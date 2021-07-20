import { name } from './package.json'



export default function ( snowpackConfig, pluginOptions = {} ) {
  return {
    name: name,

    resolve: {
      input: ['.css', '.js'],
      output: ['.css', '.js'],
    },

    load: () => { return 'value' },
    
    optimize: () => { return 'value' }
  };
};