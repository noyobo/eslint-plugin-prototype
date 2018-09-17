/**
 * DON'T EDIT THIS FILE.
 * This file was generated automatically by 'scripts/update-index.js'.
 */

"use strict"

module.exports = {
    configs: {
        "no-2016": {
            rules: {
                "prototype/no-array-methods": "error",
            },
        },
        "no-2015": {
            rules: {
                "prototype/no-string-methods": "error",
            },
        },
    },
    rules: {
        "no-array-methods": require("./rules/no-array-methods"),
        "no-string-methods": require("./rules/no-string-methods"),
    },
}
