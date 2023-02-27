import { render } from "preact";
import styled from "styled-components";
import { DivContainer } from "../../components/Header/Header";

const FooterContainer = styled(DivContainer)`
  background-color: blueviolet;
  bottom: 0px;
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  height: 2rem;
  width: 100%;
  border-top-right-radius: 2.5px;
  border-top-left-radius: 2.5px;
  padding: 0;
`;

export { FooterContainer };

export function Footer() {
  return (
    <>
      <FooterContainer>Footer Test</FooterContainer>
    </>
  );
}

render(<Footer />, document.getElementById("app")!);
