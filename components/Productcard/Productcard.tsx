import { render } from "preact";
import styled from "styled-components";

const ProductCardBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 18rem;
  width: 18rem;
  background-color: lightblue;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 6rem;
  box-shadow: 5px 5px 26px 5px #000000;
  font-weight: bold;

  > * {
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    width: 10rem;
    height: 10rem;

    & img {
      object-fit: contain;
      max-width: 64px;
    }
  }

  @media (min-width: 1024px) {
    width: 16rem;
    height: 16rem;
    & img {
      object-fit: contain;
      max-width: 124px;
    }
  }
`;

export function ProductCard() {
  return (
    <>
      <ProductCardBox>
        <div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0513/3775/6828/products/aloesumcream_01_900x.jpg?v=1619770496"
              alt="COSRX Suncream"
            />
            <p>COSRX ALOE SUNCREAM</p>
          </div>
        </div>
      </ProductCardBox>
    </>
  );
}

render(<ProductCard />, document.getElementById("app")!);
