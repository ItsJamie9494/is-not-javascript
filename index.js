const isJavascript = require('is-javascript')

function isNotJavascript() {
    return !isJavascript();
}

module.exports = isNotJavascript