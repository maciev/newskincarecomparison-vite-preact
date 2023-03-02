import { DivContainer } from "../../pages/Homescreen/Homescreen";
import { render } from "preact";
import styled from "styled-components";

const SectionContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0;
`;
export default SectionContainer;

export function Section() {
  return (
    <>
      <div></div>
    </>
  );
}

render(<Section />, document.getElementById("app")!);
