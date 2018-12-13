'use strict';

module.exports = {
  env: {
    node: true
  },
  rules: {
    // Require return statements after callbacks
    'callback-return': 'error',
    // Require require() calls to be placed at top-level module scope
    'global-require': 'warn',
    // Require error handling in callbacks
    'handle-callback-err': ['error', '^(err|error)$'],
    // Disallow use of the Buffer() constructor
    'no-buffer-constructor': 'error',
    // Disallow mixing regular variable and require declarations
    'no-mixed-requires': ['error', { grouping: true }],
    // Disallow new operators with calls to require
    'no-new-require': 'error',
    // Disallow string concatenation with __dirname and __filename
    'no-path-concat': 'error',
    // Disallow the use of process.env
    'no-process-env': 'off',
    // Disallow the use of process.exit()
    'no-process-exit': 'error',
    // Disallow Node.js modules
    'no-restricted-modules': 'off',
    // Disallow Synchronous Methods
    'no-sync': 'off',
    // Require effective use of strict mode directives
    strict: ['error', 'global']
  }
};
