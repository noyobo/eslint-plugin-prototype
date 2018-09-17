/**
 * @author noyobo <https://github.com/noyobo>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const arrayMethods = ["normalize"]

module.exports = {
    meta: {
        docs: {
            description: "disallow the `String.ptototype.*` methods.",
            category: "ES2015",
            recommended: false,
            url:
                "http://mysticatea.github.io/eslint-plugin-es/rules/no-string-methods.html",
        },
        fixable: null,
        schema: [
            {
                type: "array",
                items: {
                    type: "string",
                },
                minItems: 1,
            },
        ],
        messages: {
            forbidden:
                "ES2015 'String.prototype.{{name}}' method is forbidden.",
        },
    },
    create(context) {
        const userOptions = context.options[0]

        const names = userOptions || arrayMethods

        return {
            MemberExpression(node) {
                if (
                    !node.computed &&
                    node.property.type === "Identifier" &&
                    !(
                        node.object.type === "Identifier" &&
                        node.object.name === "Object"
                    ) &&
                    names.includes(node.property.name)
                ) {
                    context.report({
                        node,
                        messageId: "forbidden",
                        data: { name: node.property.name },
                    })
                }
            },
        }
    },
}
