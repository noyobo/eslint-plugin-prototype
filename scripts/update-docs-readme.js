/**
 * @author noyobo <https://github.com/noyobo>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const fs = require("fs")
const { categories } = require("./rules")

const ruleSectionContent = Object.keys(categories)
    .map(toSection)
    .join("\n")

fs.writeFileSync(
    "docs/rules/README.md",
    `# All Rules

This plugin provides the following rules.

${ruleSectionContent}
`
)

//------------------------------------------------------------------------------

function toSection(categoryId) {
    const comment = categories[categoryId].noConfig
        ? "There is no config which enables all rules in this category."
        : `The \`extends: "plugin:prototype/no-${categoryId.toLowerCase()}"\` config enables the following rules.\n`

    return `## ${categoryId}

${comment}
${toTable(categories[categoryId])}
`
}

function toTable({ rules }) {
    return `| Rule ID | Description |    |
|:--------|:------------|:--:|
${rules.map(toTableRow).join("\n")}`
}

function toTableRow({ ruleId, description, fixable }) {
    const title = `[prototype/${ruleId}](./${ruleId}.md)`
    const icons = fixable ? "🔧" : ""
    return `| ${title} | ${description}. | ${icons} |`
}
