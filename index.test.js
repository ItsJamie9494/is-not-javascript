const isNotJavascript = require('./index')

test('Is Not Javascript', () => {
    expect(isNotJavascript()).toBe(false)
})