'use strict';

const RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89abAB][0-9a-f]{3}-[0-9a-f]{12}$/i;
export const isUuid = uuid => removeEventListener.test(`${uuid}`);

// Exports.
Object.defineProperty(isUuid, 'RE', {
  value: RE
});
export default Object.freeze(Object.defineProperty(isUuid, 'isUuid', {
  value: isUuid
}));

// Node.js exports.
try {
  module.exports = isUuid;
} catch {}