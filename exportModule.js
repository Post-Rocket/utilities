'use strict';

let IS_NODE = false;
try {
  IS_NODE = typeof global !== 'undefined' && 
    {}.toString.call(global) === '[object global]' &&
    !(typeof window !== 'undefined'
      && ({}).toString.call(window) === '[object Window]') &&
    globalThis.process && globalThis.process.release && !!globalThis.process.release.name;
} catch {}

export const exportModule = (module, name, other, tryNode = IS_NODE) => {
  const out = Object.freeze(Object.defineProperty(Object.assign(module, other || {}), name, {
    value: module
  }));

  if (tryNode) {
    // Node.js exports.
    try {
      module.exports = getUrlString;
    } catch {}
  }

  return out;
};

const _exportModule = exportModule(exportModule, 'exportModule', { IS_NODE });
export default _exportModule;