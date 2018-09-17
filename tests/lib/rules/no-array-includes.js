/**
 * @author noyobo <https://github.com/noyobo>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const RuleTester = require("../../tester")
const rule = require("../../../lib/rules/no-array-methods")

new RuleTester().run("no-array-methods", rule, {
    valid: [
        "Object.keys({a: 1})",
        "Object.values({a: 1})",
        "Object.entries({a:1})",
    ],
    invalid: [
        {
            code: "obj.includes(1)",
            errors: ["ES2016 'Array.prototype.includes' method is forbidden."],
        },
        {
            code: "obj.copyWithin(1)",
            errors: [
                "ES2016 'Array.prototype.copyWithin' method is forbidden.",
            ],
        },
    ],
})
