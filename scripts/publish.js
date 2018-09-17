const ghpages = require("gh-pages")
const path = require("path")

ghpages.publish(path.join(__dirname, "../docs/.vuepress/dist"), function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log("gh-pages publish finished")
    }
})
