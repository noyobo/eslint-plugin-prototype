/**
 * @author noyobo <https://github.com/noyobo>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { categories } = require("../../scripts/rules")
require("../../scripts/update-docs-readme")

module.exports = {
    base: "/eslint-plugin-prototype/",
    title: "eslint-plugin-prototype",
    description: "ESLint plugin about ECMAScript syntax.",
    serviceWorker: true,
    ga: "UA-12936571-6",
    evergreen: true,

    themeConfig: {
        repo: "noyobo/eslint-plugin-prototype",
        docsRepo: "noyobo/eslint-plugin-prototype",
        docsDir: "docs",
        docsBranch: "master",
        editLinks: true,
        lastUpdated: true,
        serviceWorker: {
            updatePopup: true,
        },

        nav: [{ text: "Guide", link: "/" }, { text: "Rules", link: "/rules/" }],

        sidebarDepth: 0,
        sidebar: {
            "/rules/": [
                "/rules/",
                ...Object.keys(categories).map(category => ({
                    title: category,
                    collapsable: false,
                    children: categories[category].rules.map(({ ruleId }) => [
                        `/rules/${ruleId}`,
                        `es/${ruleId}`,
                    ]),
                })),
            ],
            "/": ["/", "/getting-started", "/rules/"],
        },
    },
}
