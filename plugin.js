import { name } from './package.json'



export default 
  (conf, { input, output, load, transform, optimize }) =>
  ({
    name: name,
    resolve: { input, output },
    load: load ? (async x => load(x, conf)) : () => {},
    transform: transform && (async x => transform(x, conf)),
    optimize: optimize && (async x => optimize(x, conf)),
  })
