# disallow the `String.ptototype.*` methods (ptototype/no-string-methods)

This rule reports ES2016 `String.ptototype.*` method as errors.

## Rule Options

```js
"prototype/no-array-methods": [
  <enabled>,
  [
    "normalize"
  ]
]
```

## Examples

<eslint-playground type="bad" code="/*eslint prototype/no-string-methods: error */
'bar'.normalize();
" />

## 📚 References

- [Rule source](https://github.com/noyobo/eslint-plugin-prototype/blob/v1.0.0/lib/rules/no-string-methods.js)
- [Test source](https://github.com/noyobo/eslint-plugin-prototype/blob/v1.0.0/tests/lib/rules/no-string-methods.js)
