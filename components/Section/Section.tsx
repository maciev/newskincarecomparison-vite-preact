import { render } from "preact";
import styled from "styled-components";

export function Section() {
  return (
    <>
      <div>Section test</div>
    </>
  );
}

render(<Section />, document.getElementById("app")!);
