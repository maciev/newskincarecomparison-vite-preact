import { render } from "preact";
//import { Link } from "preact-router";
import { useState } from "preact/hooks";
import preactLogo from "../../src/assets/preact.svg";
import styled from "styled-components";
import Link from "preact-router/match";

export function Homescreen() {
  const [count, setCount] = useState(0);

  const Highlight = styled.h1`
    background-color: red;
  `;

  return (
    <>
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
        <button
          onClick={() => {
            <Link children="/product" />;
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  );
}
render(<Homescreen />, document.getElementById("app")!);

//get data
//const {data, error} = await supabase.from("products").select()
