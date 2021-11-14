'use strict';

var name = "@gourmetseasoningsake/snowpack-plugin-plugin";

const isArray = x => Array.isArray(x);



const isFunction = f => typeof f === 'function';



var plugin = (config, { input, output, load, transform, optimize }) => {
    let value = { name };

    if (isArray(input) && isArray(output) && isFunction(load)) {
      value.resolve = { input, output };
      value.load = async x => load(x, config);
    }

    if (isFunction(transform)) {
      value.transform = async x => transform(x, config);
    }

    if (isFunction(optimize)) {
      value.optimize = async x => optimize(x, config);
    }

    return value
  };

module.exports = plugin;
