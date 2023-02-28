import { DivContainer } from "../../pages/Homescreen/Homescreen";
import { render } from "preact";
import styled from "styled-components";

const SectionContainer = styled(DivContainer)``;

export function Section() {
  return (
    <>
      <div>Section test</div>
    </>
  );
}

render(<Section />, document.getElementById("app")!);
