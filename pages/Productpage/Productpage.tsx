import { render } from "preact";
import { Link } from "wouter";
import { useState } from "preact/hooks";
import preactLogo from "../../src/assets/preact.svg";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

export function Productpage() {
  const [count, setCount] = useState(0);

  const Background = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    height: 100%;
    background-color: aliceblue;
    padding-left: 16rem;
    padding-right: 16rem;

    @media (max-width: 1024px) {
      padding-left: 6rem;
      padding-right: 6rem;
    }
  `;

  const ProductArea = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 6rem;
  `;

  const ProductDescription = styled.div`
    padding-left: 4rem;
    max-width: 22rem;

    h3 {
      padding-bottom: 1rem;
    }
  `;

  const ProductImage = styled.img`
    max-height: 23rem;
  `;

  const PriceBox = styled.div`
    display: flex;
    flex-direction: column;
    background-color: lightpink;
    min-height: 10rem;
    width: 20rem;
    border-style: solid;
    border: 3px;
    border-color: grey;
    overflow: auto;
    margin-top: 6rem;
  `;

  const Price = styled.span`
    justify-items: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto;
    background-color: lightblue;
    height: 3rem;
    width: 17rem;

    * {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    span:nth-child(3) {
      padding: 2px;
      border: solid;
      border-radius: 5px;
      border-color: lightslategrey;
      color: red;
    }
  `;

  const data = [
    {
      image:
        "https://cdn.shopify.com/s/files/1/0249/1218/products/Mugwort_calming_clay_mask_100ml_thumbnail_whitebackground_1_860x.png?",
      description:
        "Make excess oil a thing of the past with this wash-off mask that boasts six types of clays including kaolin and bentonite to effectively absorb sebum.  The formula also contains exfoliating mugwort leaf powder to gently remove pore-clogging dead skin cells and to even out rough texture. Unlike conventional clay masks, Isntree Mugwort Calming Clay Mask isn’t drying and is safe for sensitive skin. It contains mugwort extract to soothe irritation and inflammation and to replenish moisture levels.",
    },
  ];
  return (
    <>
      <Header></Header>
      <Background>
        <ProductArea>
          <ProductImage src={data[0].image} alt="" />
          <ProductDescription>
            <h3>Product Description</h3>
            {data[0].description}
          </ProductDescription>
        </ProductArea>
        <PriceBox>
          <Price>
            <span>this is an image</span>
            <span>YesStyle</span>
            <span>$8.59</span>
          </Price>
          <Price>
            {" "}
            <span>this is an image</span>
            <span>Stylevana</span>
            <span>$8.59</span>
          </Price>
          <Price>
            <span>this is an image</span>
            <span>BeautyNetKorea</span>
            <span>$8.59</span>
          </Price>
        </PriceBox>
      </Background>
      <Footer></Footer>
    </>
  );
}
render(<Productpage />, document.getElementById("app")!);
