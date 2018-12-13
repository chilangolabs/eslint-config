'use strict';

module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6
  },
  rules: {
    // Require braces around arrow function bodies
    'arrow-body-style': ['warn', 'as-needed'],
    // Require parentheses around arrow function arguments
    'arrow-parens': ['error', 'as-needed'],
    // Enforce consistent spacing before and after the arrow in arrow functions
    'arrow-spacing': ['error', { after: true, before: true }],
    // Require super() calls in constructors
    'constructor-super': 'error',
    // Rnforce consistent spacing around * operators in generator functions
    'generator-star-spacing': 'error',
    // Disallow reassigning class members
    'no-class-assign': 'error',
    // Disallow arrow functions where they could be confused with comparisons
    'no-confusing-arrow': ['error', { allowParens: false }],
    // Disallow reassigning const variables
    'no-const-assign': 'error',
    // Disallow duplicate class members
    'no-dupe-class-members': 'error',
    // Disallow duplicate module imports
    'no-duplicate-imports': 'error',
    // Disallow new operators with the Symbol object
    'no-new-symbol': 'error',
    // Disallow specified modules when loaded by import
    'no-restricted-imports': 'off',
    // Disallow this/super before calling super() in constructors
    'no-this-before-super': 'error',
    // Disallow unnecessary computed property keys in object literals
    'no-useless-computed-key': 'error',
    // Disallow unnecessary constructors
    'no-useless-constructor': 'error',
    // Disallow renaming import, export, and destructured assignments to the same name
    'no-useless-rename': 'error',
    // Require let or const instead of var
    'no-var': 'error',
    // Require or disallow method and property shorthand syntax for object literals
    'object-shorthand': ['error', 'always'],
    // Require using arrow functions for callbacks
    'prefer-arrow-callback': 'error',
    // Require const declarations for variables that are never reassigned after declared
    'prefer-const': 'error',
    // Require destructuring from arrays and/or objects
    'prefer-destructuring': 'error',
    // Disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals
    'prefer-numeric-literals': 'error',
    // Require rest parameters instead of arguments
    'prefer-rest-params': 'error',
    // Require spread operators instead of .apply()
    'prefer-spread': 'error',
    // Require template literals instead of string concatenation
    'prefer-template': 'error',
    // Require generator functions to contain yield
    'require-yield': 'error',
    // Rnforce spacing between rest and spread operators and their expressions
    'rest-spread-spacing': 'error',
    // Enforce sorted import declarations within modules
    'sort-imports': 'error',
    // Require symbol descriptions
    'symbol-description': 'warn', // TODO: Needs check
    // Require or disallow spacing around embedded expressions of template strings
    'template-curly-spacing': ['error', 'never'],
    // Require or disallow spacing around the * in yield* expressions
    'yield-star-spacing': ['error', 'after']
  }
};
