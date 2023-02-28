import { render } from "preact";
import { useState } from "preact/hooks";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Section } from "../../components/Section/Section";

export function Productpage() {
  const PageWrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    flex: auto;
    position: relative;
    height: 100%;
  `;

  return (
    <>
      <PageWrapper>
        <Header></Header>
        <Section></Section>
        <Footer></Footer>
      </PageWrapper>
    </>
  );
}

render(<Productpage />, document.getElementById("app")!);
