import { render, h } from "preact";
import { App } from "./app";
import "./index.css";

render(<App />, document.getElementById("app") as HTMLElement);

//const el = document.getElementById("app");
//if (el) {
//  render(<App />, el);
//}
