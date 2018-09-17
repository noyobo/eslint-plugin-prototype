/**
 * @author noyobo <https://github.com/noyobo>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const fs = require("fs")
const { categories, rules } = require("./rules")

fs.writeFileSync(
    "lib/index.js",
    `/**
 * DON'T EDIT THIS FILE.
 * This file was generated automatically by 'scripts/update-index.js'.
 */

"use strict"

module.exports = {
    configs: {
        ${Object.keys(categories)
            .filter(id => !categories[id].noConfig)
            .map(
                id => `"no-${id.slice(2)}": {
            rules: {
                ${categories[id].rules
                    .map(({ ruleId }) => `"prototype/${ruleId}": "error",`)
                    .join("\n                ")}
            },
        },`
            )
            .join("\n        ")}
    },
    rules: {
        ${rules
            .map(({ ruleId }) => `"${ruleId}": require("./rules/${ruleId}"),`)
            .join("\n        ")}
    },
}
`
)
