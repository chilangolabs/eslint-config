'use strict';

module.exports = {
  rules: {
    // Enforce “for” loop update clause moving the counter in the right direction
    'for-direction': 'error',
    // Enforces that a return statement is present in property getters
    'getter-return': 'error',
    // Disallow using an async function as a Promise executor
    'no-async-promise-executor': 'error',
    // Disallow await inside of loops
    'no-await-in-loop': 'error',
    // Disallow comparing against -0
    'no-compare-neg-zero': 'error',
    // Disallow assignment in conditional expressions
    'no-cond-assign': 'error',
    // Disallow use of console
    'no-console': 'warn',
    // Disallow use of constant expressions in conditions
    'no-constant-condition': 'error',
    // Disallow control characters in regular expressions
    'no-control-regex': 'error',
    // Disallow use of debugger
    'no-debugger': 'warn',
    // Disallow duplicate arguments in functions
    'no-dupe-args': 'error',
    // Disallow duplicate keys when creating object literals
    'no-dupe-keys': 'error',
    // Disallow a duplicate case label.
    'no-duplicate-case': 'error',
    // Disallow empty statements
    'no-empty': 'error',
    // Disallow the use of empty character classes in regular expressions
    'no-empty-character-class': 'error',
    // Disallow assigning to the exception in a catch block
    'no-ex-assign': 'error',
    // Disallow double-negation boolean casts in a boolean context
    'no-extra-boolean-cast': 'error',
    // Disallow unnecessary parentheses
    'no-extra-parens': 'warn',
    // Disallow unnecessary semicolons
    'no-extra-semi': 'error',
    // Disallow overwriting functions written as function declarations
    'no-func-assign': 'error',
    // Disallow function or variable declarations in nested blocks
    'no-inner-declarations': 'error',
    // Disallow invalid regular expression strings in the RegExp constructor
    'no-invalid-regexp': 'error',
    // Disallow irregular whitespace outside of strings and comments
    'no-irregular-whitespace': 'error',
    // Disallow characters which are made with multiple code points in character class syntax
    'no-misleading-character-class': 'off',
    // Disallow the use of object properties of the global object (Math and JSON) as functions
    'no-obj-calls': 'error',
    // Disallow use of Object.prototypes builtins directly
    'no-prototype-builtins': 'error',
    // Disallow multiple spaces in a regular expression literal
    'no-regex-spaces': 'error',
    // Disallow sparse arrays
    'no-sparse-arrays': 'error',
    // Disallow template literal placeholder syntax in regular strings
    'no-template-curly-in-string': 'error',
    // Avoid code that looks like two expressions but is actually one
    'no-unexpected-multiline': 'error',
    // Disallow unreachable statements after a return, throw, continue, or break statement
    'no-unreachable': 'error',
    // Disallow control flow statements in finally blocks
    'no-unsafe-finally': 'error',
    // Disallow negating the left operand of relational operators
    'no-unsafe-negation': 'error',
    // Disallow assignments that can lead to race conditions due to usage of await or yield
    'require-atomic-updates': 'error',
    // Require calls to isNaN() when checking for NaN
    'use-isnan': 'error',
    // Enforce valid JSDoc comments
    'valid-jsdoc': 'warn',
    // Enforce comparing typeof expressions against valid strings
    'valid-typeof': 'error'
  }
};
