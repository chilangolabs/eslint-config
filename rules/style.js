'use strict';

module.exports = {
  rules: {
    // Enforce linebreaks after opening and before closing array brackets
    'array-bracket-newline': ['error', { minItems: 5, multiline: true }],
    // Enforce consistent spacing inside array brackets
    'array-bracket-spacing': ['error', 'never'],
    // Enforce line breaks after each array element
    'array-element-newline': ['error', { minItems: 5, multiline: true }],
    // Disallow or enforce spaces inside of blocks after opening block and before closing block
    'block-spacing': ['error', 'always'],
    // Enforce consistent brace style for blocks
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    // Enforce camelcase naming convention
    camelcase: 'error',
    // Enforce or disallow capitalization of the first letter of a comment
    'capitalized-comments': 'off',
    // Require or disallow trailing commas
    'comma-dangle': ['error', 'never'],
    // Enforce consistent spacing before and after commas
    'comma-spacing': ['error', { after: true, before: false }],
    // Enforce consistent comma style
    'comma-style': ['error', 'last'],
    // Enforce consistent spacing inside computed property brackets
    'computed-property-spacing': ['error', 'never'],
    // Enforce consistent naming when capturing the current execution context
    'consistent-this': ['error', 'that'],
    // Require or disallow newline at the end of files
    'eol-last': 'error',
    // Require or disallow spacing between function identifiers and their invocations
    'func-call-spacing': 'error',
    // Require function names to match the name of the variable or property to which they are assigned
    'func-name-matching': 'off', // TODO: Needs checks
    // Require or disallow named function expressions
    'func-names': 'off',
    // Enforce the consistent use of either function declarations or expressions
    'func-style': 'off',
    // Enforce consistent line breaks inside function parentheses
    'function-paren-newline': ['error', { minItems: 5 }], // TODO: Needs check
    // Disallow specified identifiers
    'id-blacklist': 'off',
    // Enforce minimum and maximum identifier lengths
    'id-length': 'off',
    // Eequire identifiers to match a specified regular expression
    'id-match': 'off',
    // Enforce the location of arrow function bodies
    'implicit-arrow-linebreak': 'error',
    // Enforce consistent indentation
    indent: ['error', 2, { SwitchCase: 1 }],
    // Enforce the consistent use of either double or single quotes in JSX attributes
    'jsx-quotes': ['error', 'prefer-double'],
    // Enforce consistent spacing between keys and values in object literal properties
    'key-spacing': ['error', { afterColon: true, beforeColon: false }],
    // Enforce consistent spacing before and after keywords
    'keyword-spacing': [
      'error',
      {
        after: true,
        before: true,
        overrides: {
          case: { after: true },
          return: { after: true },
          throw: { after: true }
        }
      }
    ],
    // Enforce position of line comments
    'line-comment-position': 'off',
    // Enforce consistent linebreak style
    'linebreak-style': ['error', 'unix'],
    // Require empty lines around comments
    'lines-around-comment': 'off',
    // Require or disallow an empty line between class members
    'lines-between-class-members': 'error',
    // Enforce a maximum depth that blocks can be nested
    'max-depth': [1, 5],
    // Enforce a maximum line length
    'max-len': [
      'off',
      100,
      4,
      {
        ignoreComments: true,
        ignoreUrls: true
      }
    ],
    // Enforce a maximum number of lines per file
    'max-lines': 'off',
    // Enforce a maximum number of line of code in a function
    'max-lines-per-function': 'off',
    // Enforce a maximum depth that callbacks can be nested
    'max-nested-callbacks': ['error', 5],
    // Enforce a maximum number of parameters in function definitions
    'max-params': 'off',
    // Enforce a maximum number of statements allowed in function blocks
    'max-statements': 'off',
    // Enforce a maximum number of statements allowed per line
    'max-statements-per-line': 'off',
    // Enforce a particular style for multiline comments
    'multiline-comment-style': ['error', 'starred-block'],
    // Enforce newlines between operands of ternary expressions
    'multiline-ternary': 'off',
    // Require constructor names to begin with a capital letter
    'new-cap': ['error', { newIsCap: true }],
    // Require parentheses when invoking a constructor with no arguments
    'new-parens': 'error',
    // Require a newline after each call in a method chain
    'newline-per-chained-call': ['off', { ignoreChainWithDepth: 3 }],
    // Disallow Array constructors
    'no-array-constructor': 'error',
    // Disallow bitwise operators
    'no-bitwise': 1,
    // Disallow continue statements
    'no-continue': 'off',
    // Disallow inline comments after code
    'no-inline-comments': 'off',
    // Disallow if statements as the only statement in else blocks
    'no-lonely-if': 1,
    // Disallow mixed binary operators
    'no-mixed-operators': 'off',
    // Disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 'error',
    // Disallow use of chained assignment expressions
    'no-multi-assign': 'error',
    // Disallow multiple empty lines
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    // Disallow negated conditions
    'no-negated-condition': 'error', // TODO: Needs check
    // Disallow nested ternary expressions
    'no-nested-ternary': 'error',
    // Disallow Object constructors
    'no-new-object': 'error',
    // Disallow the unary operators ++ and --
    'no-plus-plus': 'off',
    // Disallow specified syntax
    'no-restricted-syntax': 'off',
    // Disallow all tabs
    'no-tabs': 'error', // TODO: Needs checks
    // Disallow ternary operators
    'no-ternary': 'off',
    // Disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 'error',
    // Disallow dangling underscores in identifiers
    'no-underscore-dangle': 'error', // TODO: Needs checks
    // Disallow ternary operators when simpler alternatives exist
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    // Disallow whitespace before properties
    'no-whitespace-before-property': 'error',
    // Enforce the location of single-line statements
    'nonblock-statement-body-position': 'off',
    // Enforce consistent line breaks inside braces
    'object-curly-newline': 'off',
    // Enforce consistent spacing inside braces
    'object-curly-spacing': ['error', 'always'],
    // Enforce placing object properties on separate lines
    'object-property-newline': 'off',
    // Enforce variables to be declared either together or separately in functions
    'one-var': ['error', 'never'],
    // Require or disallow newlines around variable declarations
    'one-var-declaration-per-line': ['error', 'always'],
    // Require or disallow assignment operator shorthand where possible
    'operator-assignment': 'error',
    // Enforce consistent linebreak style for operators
    'operator-linebreak': 'off',
    // Require or disallow padding within blocks
    'padded-blocks': ['error', 'never'],
    /*
     * Require or disallow padding lines between statements
     * TODO: Really needs checksg
     */
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', next: '*', prev: 'directive' },
      { blankLine: 'any', next: 'directive', prev: 'directive' },
      { blankLine: 'always', next: 'return', prev: '*' },
      { blankLine: 'always', next: '*', prev: ['const', 'let', 'var'] },
      {
        blankLine: 'any',
        next: ['const', 'let', 'var'],
        prev: ['const', 'let', 'var']
      }
    ],
    // Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead
    'prefer-object-spread': 'error',
    // Require quotes around object literal property names
    'quote-props': ['error', 'as-needed', { keywords: false, numbers: false, unnecessary: true }],
    // Enforce the consistent use of either backticks, double, or single quotes
    quotes: ['error', 'single', 'avoid-escape'],
    // Require JSDoc comments
    'require-jsdoc': 'off', // TODO: Are we ready to have this?
    // Require or disallow semicolons instead of ASI
    semi: ['error', 'always'],
    // Enforce consistent spacing before and after semicolons
    'semi-spacing': ['error', { after: true, before: false }],
    // Enforce location of semicolons
    'semi-style': 'error',
    // Require object keys to be sorted
    'sort-keys': 'error',
    // Require variables within the same declaration block to be sorted
    'sort-vars': 'error',
    // Enforce consistent spacing before blocks
    'space-before-blocks': 'error',
    // Enforce consistent spacing before function definition opening parenthesis
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never' }],
    // Enforce consistent spacing inside parentheses
    'space-in-parens': ['error', 'never'],
    // Require spacing around infix operators
    'space-infix-ops': 'error',
    // Enforce consistent spacing before or after unary operators
    'space-unary-ops': ['error', { words: true }],
    // Enforce consistent spacing after the // or /* in a comment
    'spaced-comment': 'error',
    // Enforce spacing around colons of switch statements
    'switch-colon-spacing': 'error',
    // Require or disallow spacing between template tags and their literals
    'template-tag-spacing': 'off',
    // Require or disallow Unicode byte order mark (BOM)
    'unicode-bom': 'off',
    // Require parenthesis around regex literals
    'wrap-regex': 'off' // TODO: Needs checks
  }
};
