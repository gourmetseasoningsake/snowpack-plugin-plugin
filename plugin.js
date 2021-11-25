import { name } from './package.json'



const isArray = x => Array.isArray(x)
const isFunction = f => typeof f === 'function'



const plugin = ( 
    snowpackConfig, {
    input, output,
    config,
    load, 
    transform, 
    run, 
    optimize
  }) => {
    test()
    let value = { name }

    if (isFunction(config)) {
      value.config = x => config(x)
    }

    if (isArray(input) && isArray(output) && isFunction(load)) {
      value.resolve = { input, output }
      value.load = x => load(x, snowpackConfig)
    }

    if (isFunction(transform)) {
      value.transform = x => transform(x, snowpackConfig)
    }

    if (isFunction(run)) {
      value.run = x => run(x, snowpackConfig)
    }

    if (isFunction(optimize)) {
      value.optimize = x => optimize(x, snowpackConfig)
    }

    return value
  }



export default plugin