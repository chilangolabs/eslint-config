'use strict';

const path = require('path');

module.exports = {
  extends: [
    path.join(__dirname, './rules/best-practices'),
    path.join(__dirname, './rules/errors'),
    path.join(__dirname, './rules/es6'),
    path.join(__dirname, './rules/style'),
    path.join(__dirname, './rules/variables')
  ].map(require.resolve)
};
