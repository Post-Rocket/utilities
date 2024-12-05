'use strict';

// Exports.
export { default as isAccountId } from './isAccountId';
export * from './isCreditCard';
export { default as isEmail } from './isEmail';
export { default as isPhoneNumber } from './isPhoneNumber';
export { isStrongPassword, getPasswordFormatErrors } from './isStrongPassword';
export * from './isPostalCode';
export { default as isUrl } from './isUrl';
export * from './isUserProfileHandle';
export { default as isUuid } from './isUuid';

// Node.js exports.
try {
  const { isStrongPassword, getStrongPasswordErrors } = require('./isStrongPassword');
  module.exports = {
    isAccountId: require('./isAccountId'),
    ...require('./isCreditCard'),
    isEmail: require('./isEmail'),
    isPhoneNumber: require('./isPhoneNumber'),
    ...require('./isPostalCode'),
    isStrongPassword,
    getStrongPasswordErrors,
    isUrl: require('./isUrl'),
    ...require('./isUserProfileHandle'),
    isUuid: require('./isUuid'),
  }
}
catch {}