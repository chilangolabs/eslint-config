'use strict';

const path = require('path');

module.exports = {
  extends: [path.join(__dirname, './rules/browser')].map(require.resolve)
};
