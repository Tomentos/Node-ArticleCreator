//Getting the necessary modules
const path = require(`path`)
const express = require(`express`)
const router = express.Router()

router.get(`/`, function(req, res) {

  //Get Link back to homepage
  var home = req.protocol + `://` + req.get('host')

  // Variables being passed to the corresponding EJS file
  res.render(`article`, {title: `Welcome to the article generator`, home, modeLoad: "loadTheme(1)", modeSwitch: "modeSwitch(1)"})
})

router.get(`/view`, function(req, res) {

  //Get Link back to homepage
  var home = req.protocol + `://` + req.get('host')
  var path = req.baseUrl

  //Creating variables from the URL querys
  var title = ``
  var article = ``

  //Generate new lines
  decodeURIComponent(req.query.title).split(decodeURI(`%0A`)).forEach(line => {
    title += line + ` `
    article += line + `<br/>`
  });

  // Variables being passed to the corresponding EJS file
  res.render(`articleView`, {title, article, home, path, modeLoad: "loadTheme(1)", modeSwitch: "modeSwitch(1)"})
})

module.exports = router