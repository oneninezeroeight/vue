import { WeElement, define, h } from "omi";

class ComponentName extends WeElement {
  render(props) {
    return h(
      "div",
      null,
      "hello world",
      h("p", null, "abc"),
      h("p", null, name)
    );
  }
}

ComponentName.css = ``;
define("component-name", ComponentName);
