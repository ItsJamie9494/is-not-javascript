# `is-not-javascript`

Want to make extra sure you aren't using Javascript? This package is for you!

## Installation
`npm install is-not-javascript`

## Usage

```javascript
var isJavascript = require('is-not-javascript')
isNotJavascript();  // false
```

## React Support

Thanks to the glorious community, `is-not-javascript` has 100% support for React!

### Usage

```javascript
const IsNotJavascriptComponent = () => {
  const notJS = useIsNotJavascript();

  return <p>{notJS ? "Is Not Javascript" : "Is Javascript"}</p>;
};
```

## Testing

Run `npm test` to run a fully-comprehensive test suite, making sure all the possible edge cases are covered.

## License
[WTFPL](http://www.wtfpl.net/)
