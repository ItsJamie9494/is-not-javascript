const isJavascript = require('is-javascript')
const { useMemo } = require('react')

function isNotJavascript() {
    return !isJavascript();
}

function useIsNotJavascript() {
    return useMemo(isNotJavascript, [])
}

module.exports = { isNotJavascript, useIsNotJavascript }