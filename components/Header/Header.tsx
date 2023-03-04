import { render } from "preact";
import styled from "styled-components";
import { Link } from "wouter";
import SectionContainer from "../Section/Section";

const HeaderContainer = styled(SectionContainer)`
  top: 0px;
  position: fixed;
  flex-direction: row;
  align-items: center;
  flex: 1;
  background-color: #afbbc9;
  height: 4rem;
  border-bottom-right-radius: 2.5px;
  border-bottom-left-radius: 2.5px;

  > * {
    position: relative;
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

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <HeaderLeft>
          <a>
            <Link to="/">Home</Link>
          </a>
        </HeaderLeft>
        <HeaderRight>Right</HeaderRight>
      </HeaderContainer>
    </>
  );
}

render(<Header />, document.getElementById("app")!);
