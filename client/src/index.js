import header from './header.md'
import main from './main.md'
import profile from './img/profile.jpg'
import './analytics.js'

// Stylesheets
import 'normalize.css/normalize.css'
import 'github-markdown-css/github-markdown.css'
import 'font-awesome/css/font-awesome.css'
import './index.css'

document.getElementById('me').src = profile
document.getElementById('header').innerHTML = header
document.getElementById('main').innerHTML = main