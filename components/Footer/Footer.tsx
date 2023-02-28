import { render } from "preact";
import styled from "styled-components";
import { DivContainer } from "../../pages/Homescreen/Homescreen";

const FooterContainer = styled(DivContainer)`
  background-color: blueviolet;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1;
  height: 2rem;
  border-top-right-radius: 2.5px;
  border-top-left-radius: 2.5px;

  > * {
    display: flex;
  }
`;

export { FooterContainer };

export function Footer() {
  return (
    <>
      <FooterContainer>
        Created by Andrew Chatelain - February 2023
      </FooterContainer>
    </>
  );
}

render(<Footer />, document.getElementById("app")!);
