import { name } from './package.json'



const isArray = x => Array.isArray(x)



const isFunction = f => typeof f === 'function'



export default ( 
    unsafeConfig, {
    input, output,
    load, 
    transform, 
    run, 
    optimize
  }) => {

    let value = { name }

    if (isArray(input) && isArray(output) && isFunction(load)) {
      value.resolve = { input, output }
      value.load = x => load(x, unsafeConfig)
    }

    if (isFunction(transform)) {
      value.transform = x => transform(x, unsafeConfig)
    }

    if (isFunction(run)) {
      value.run = x => run(x, unsafeConfig)
    }

    if (isFunction(optimize)) {
      value.optimize = x => optimize(x, unsafeConfig)
    }

    return value
  }
