// Create a an enum of flags from inut names.
// for example flags = createFlags('good', 'bad', 'ugly') will
//  produce: { good: 1, bad: 2, ugly: 4 }
// Now to create a code that has bad AND ugly you simply do:
// code = flags.bad | flags.ugly
export const createFlags = Flag.createFlags = (...names) => {
  const output = {};
  for (let i = 0, l = (names = names.flat(Infinity)).length, n, j = 1; i !== l; ++i) {
    output[n = names[i]] || (output[n] = j, j <<= 1);
  }
  Object.defineProperty(output, 'toString', {
    value: function (...args) { return JSON.stringify(this, ...args); }
  });
  Object.defineProperty(output, 'contains', {
    value: contains
  });
  Object.defineProperty(output, 'intersects', {
    value: intersects
  });
  return output;
}

// Check if the reference set of flags (a number of the form ref = flag1 | ... | flagN)
// full contains the target (also a number).
export const contains = createFlags.contains = (ref, target) => (ref & target) === target;

// Check if the reference set of flags (a number of the form ref = flag1 | ... | flagN)
// partially contains the target (also a number).
export const intersects = createFlags.intersects = (ref, target) => (ref & target) > 0;

// Exports.
// Exports.
export default Object.freeze(Object.defineProperty(createFlags, 'createFlags', {
  value: createFlags
}));

// Node.js exports.
try {
  module.exports = createFlags ;
} catch {}