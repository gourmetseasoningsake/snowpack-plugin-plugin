import test from 'ava';
import sinon from 'sinon';



import { promises as fs } from 'fs';



import plugin from './plugin';



const setupStubs =
  value =>
  [ sinon
    .stub(fs, 'readFile')
    .returns(
      new Promise(res => res(value))
    ),
  ];



test.serial( 'desc me',

  async t => {

    //s
    const value = 'value';
    const stubs = setupStubs(value);

    //e
    const pluginInstance = plugin({}, { input: [], output: [], load: () => value });
    const result = await pluginInstance.load({
        isDev: true,
        filePath: 'path'
      });

    //v
    t.deepEqual(result, value);

    //td
    stubs.map(x => x.restore());
  }
);