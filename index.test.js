const renderer = require("react-test-renderer");
const { isNotJavascript, useIsNotJavascript } = require("./index");

test("Is Not Javascript", () => {
  expect(isNotJavascript()).toBe(false);
});

const TestComponent = () => {
  const notJS = useIsNotJavascript();

  return <p>{notJS ? "Is Not Javascript" : "Is Javascript"}</p>;
};

test("Use Is Not Javascript", () => {
  const component = renderer.create(<TestComponent />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
