import { render } from "preact";
import { useState } from "preact/hooks";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Section } from "../../components/Section/Section";

export function Productpage() {
  const ColorCard = styled.div`
    position: relative;
    background-color: red;
    height: 2;
  `;

  const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
  `;

  return (
    <>
      <PageWrapper>
        <Header></Header>
        <Section></Section>
        <ColorCard>This is a test of a styled component</ColorCard>
        <Footer></Footer>
      </PageWrapper>
    </>
  );
}

render(<Productpage />, document.getElementById("app")!);
