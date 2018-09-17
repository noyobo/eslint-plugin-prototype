# Getting Started

## 💿 Installation

Use [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/).

```console
npm install --save-dev eslint eslint-plugin-prototype
```

::: tip Requirements

-   Node.js `6.5.0` or newer.
-   ESLint `4.19.1` or newer.
    :::

## 📖 Usage

Configure your `.eslintrc.*` file.

For example, to enable only Rest/Spread Properties in ES2018, as similar to legacy `experimentalObjectRestSpread` option:

```json
{
    "plugins": ["prototype"],
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "prototype/no-array-motheds": "error"
    }
}
```

### Presets

This plugin provides the following configs.

| Config ID                  | Description                                    |
| :------------------------- | :--------------------------------------------- |
| `plugin:prototype/no-2016` | enable all rules which disallow ES2016 syntax. |
| `plugin:prototype/no-2015` | enable all rules which disallow ES2015 syntax. |

For example:

```json
{
    "plugins": ["prototype"],
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "extends": ["eslint:recommended", "plugin:prototype/no-2016"],
    "rules": {
        "prototype/no-array-motheds": "off"
    }
}
```
