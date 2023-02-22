import { render } from "preact";

export function Homescreen() {
  return (
    <>
      <h1>About</h1>
    </>
  );
}
render(<Homescreen />, document.getElementById("app")!);
