# eslint-plugin-prototype

[![npm version](https://img.shields.io/npm/v/eslint-plugin-prototype.svg)](https://www.npmjs.com/package/eslint-plugin-prototype)
[![Downloads/month](https://img.shields.io/npm/dm/eslint-plugin-prototype.svg)](http://www.npmtrends.com/eslint-plugin-prototype)
[![Build Status](https://travis-ci.org/noyobo/eslint-plugin-prototype.svg?branch=master)](https://travis-ci.org/noyobo/eslint-plugin-prototype)
[![Coverage Status](https://codecov.io/gh/noyobo/eslint-plugin-prototype/branch/master/graph/badge.svg)](https://codecov.io/gh/noyobo/eslint-plugin-prototype)
[![Dependency Status](https://david-dm.org/noyobo/eslint-plugin-prototype.svg)](https://david-dm.org/noyobo/eslint-plugin-prototype)

ESLint plugin which disallows each ECMAScript syntax.

## 🏁 Goal

[Espree](https://github.com/eslint/espree#readme), the default parser of [ESLint](https://eslint.org/), has supported `ecmaVersion` option.
However, it doesn't support to enable each syntactic feature individually.

This plugin lets us disable each syntactic feature individually.
So we can enable arbitrary syntactic features with the combination of `ecmaVersion` and this plugin.

## 📖 Usage

See [documentation](https://noyobo.github.io/eslint-plugin-prototype/)

## 🚥 Semantic Versioning Policy

This plugin follows [semantic versioning](http://semver.org/) and [ESLint's semantic versioning policy](https://github.com/eslint/eslint#semantic-versioning-policy).

## 📰 Changelog

See [releases](https://github.com/noyobo/eslint-plugin-prototype/releases).

## ❤️ Contributing

Welcome contributing!

Please use GitHub's Issues/PRs.

### Development Tools

-   `npm test` runs tests and measures coverage.
-   `npm run clean` removes the coverage result of `npm test` command.
-   `npm run coverage` shows the coverage result of the last `npm test` command.
-   `npm run docs:build` builds documentation.
-   `npm run docs:watch` builds documentation on each file change.
-   `npm run watch` runs tests on each file change.
