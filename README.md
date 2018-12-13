# @chilangolabs/eslint-config

This package provides Chilango Labs's .eslintrc as an extensible shared config.

## Usage

We export multiple ESLint configurations for your usage.
Environment and parser options are only set where noted, please remember set yours based on the need of your project (e.g., `jquery` or `mocha` for your environment)

### @chilangolabs/eslint-config

Our default export contains all ESLint rules for ES5.

1. `npm install --save-dev @chilangolabs/eslint-config`
2. add `"extends": "@chilangolabs/eslint-config" to your .eslintrc

### @chilangolabs/eslint-config/node

Adds Node support and rules for Node specific javascript
This config will add `node` to eslint's environments option

1. `npm install --save-dev @chilangolabs/eslint-config`
2. add `"extends": ["@chilangolabs/eslint-config", "@chilangolabs/eslint-config/node"]` to your .eslintrc

### @chilangolabs/eslint-config/browser

Adds Browser support and environmental variables

1. `npm install --save-dev @chilangolabs/eslint-config`
2. add `"extends": ["@chilangolabs/eslint-config", "@chilangolabs/eslint-config/browser"]` to your .eslintrc

## Note for use with test frameworks

First, put a separate .eslintrc.json file in your tests folder with
```
{
	"env": {
		"mocha": true // or qunit, or jasmine, etc...
	}
}
```
This will turn on mocha global variables (`describe`, `it`, etc..). ESLint also has an `env` setting for jasmine, qunit, and a few others. See their website for more in.

## Improving this config

Want to improve our rules? Feel free to make a pull request.
