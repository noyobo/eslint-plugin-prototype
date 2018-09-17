# disallow the `Array.ptototype.*` methods (prototype/no-array-methods)

This rule reports ES2015 `Array.ptototype.*` method as errors.

## Rule Options

```js
"prototype/no-array-methods": [<enabled>, ["includes", "copyWithin", "keys", "values", "entries"]]
```

## Examples

<eslint-playground type="bad" code="/*eslint prototype/no-array-methods: error */
const array = [];
array.includes(1);
" />

## 📚 References

-   [Rule source](https://github.com/noyobo/eslint-plugin-prototype/blob/v1.3.1/lib/rules/no-array-methods.js)
-   [Test source](https://github.com/noyobo/eslint-plugin-prototype/blob/v1.3.1/tests/lib/rules/no-array-methods.js)
