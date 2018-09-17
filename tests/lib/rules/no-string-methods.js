/**
 * @author noyobo <https://github.com/noyobo>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const RuleTester = require("../../tester")
const rule = require("../../../lib/rules/no-string-methods.js")

new RuleTester().run("no-string-methods", rule, {
    valid: [],
    invalid: [
        {
            code: "obj.normalize()",
            errors: [
                "ES2015 'String.prototype.normalize' method is forbidden.",
            ],
        },
    ],
})
