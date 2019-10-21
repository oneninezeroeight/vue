import { WeElement, define, h } from "omi";

class ComponentName extends WeElement {
  render(props) {
    return h(
      "div",
      null,
      "hello world",
      h("p", null, "abc"),
      h("p", null, name),
      h("p", null, "123")
    );
  }
}

ComponentName.css = ``;
define("component-name", ComponentName);
