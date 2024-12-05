'use strict';

// Helper function to validate an account id string.
// Example:
// isAccounId('1234567890') will return false (i.e. not validated)
export const RE = /[A-Fa-f0-9]{24}/;
export const isAccounId = accountId => (
  !!accountId && typeof accountId === 'string' && RE.test(accountId.replace(/s+/g, ''))
);

// Exports.
Object.defineProperty(isAccounId, 'RE', {
  value: RE
});
export default Object.freeze(Object.defineProperty(isAccounId, 'isAccounId', {
  value: isAccounId
}));

// Node.js exports.
try {
  module.exports = isAccounId;
} catch {}