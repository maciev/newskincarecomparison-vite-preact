import { render } from "preact";
import { Link } from "wouter";
import { useState } from "preact/hooks";
import preactLogo from "../../src/assets/preact.svg";
import styled from "styled-components";

export function Homescreen() {
  const [count, setCount] = useState(0);

  const Background = styled.div`
    background-color: aliceblue;
  `;

  const Highlight = styled.h1`
    background-color: red;
  `;

  return (
    <>
      <Background>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
          </a>
          <a href="https://preactjs.com" target="_blank">
            <img src={preactLogo} class="logo preact" alt="Preact logo" />
          </a>
        </div>
        <Highlight>Vite + Preact</Highlight>
        <div class="card">
          <Link href="/product">
            <button>count is {count}</button>
          </Link>
          <p>
            Edit <code>src/app.tsx</code> and save to test HMR
          </p>
        </div>
        <p class="read-the-docs">
          Click on the Vite and Preact logos to learn more
        </p>
      </Background>
    </>
  );
}
render(<Homescreen />, document.getElementById("app")!);

//get data
//const {data, error} = await supabase.from("products").select()
