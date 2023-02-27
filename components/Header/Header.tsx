import { render } from "preact";
import styled from "styled-components";
import { Link } from "wouter";

const DivContainer = styled.div`
  top: 0px;
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  background-color: #afbbc9;
  height: 2rem;
  width: 100%;
  border-bottom-right-radius: 2.5px;
  border-bottom-left-radius: 2.5px;
  padding: 0;

  > * {
    display: flex;
  }
`;

const HeaderLeft = styled.div`
  flex-grow: 1;
  justify-content: left;
  padding-left: 1rem;

  a {
    color: white;
    text-decoration: none;
  }
`;

const HeaderRight = styled.div`
  padding-right: 1rem;
  flex-grow: 1;
  justify-content: right;
`;

export { DivContainer };

export default function Header() {
  return (
    <>
      <DivContainer>
        <HeaderLeft>
          <a>
            <Link to="/">Home</Link>
          </a>
        </HeaderLeft>
        <HeaderRight>Right</HeaderRight>
      </DivContainer>
    </>
  );
}

render(<Header />, document.getElementById("app")!);
