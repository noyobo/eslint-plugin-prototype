/**
 * @author noyobo <https://github.com/noyobo>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const fs = require("fs")
const path = require("path")
const { rules } = require("./rules")
const docsRoot = path.resolve(__dirname, "../docs/rules/")
const { version } = require("../package.json")

for (const { ruleId, description, fixable } of rules) {
    const filePath = path.join(docsRoot, `${ruleId}.md`)
    const content = fs
        .readFileSync(filePath, "utf8")
        .replace(/^#.+\n+(?:- .+\n)*/, "")
        .replace(/## 📚 References[\s\S]+/, "")
        .trim()
    const headerLines = [`# ${description} (ptototype/${ruleId})`, ""]

    if (fixable) {
        headerLines.push(
            "- 🔧 The `--fix` option on the [command line](http://eslint.org/docs/user-guide/command-line-interface#fix) can automatically fix some of the problems reported by this rule."
        )
    }

    const newContent = `${headerLines.join("\n").trim()}

${content}

## 📚 References

- [Rule source](https://github.com/noyobo/eslint-plugin-prototype/blob/v${version}/lib/rules/${ruleId}.js)
- [Test source](https://github.com/noyobo/eslint-plugin-prototype/blob/v${version}/tests/lib/rules/${ruleId}.js)
`

    fs.writeFileSync(filePath, newContent)
}
