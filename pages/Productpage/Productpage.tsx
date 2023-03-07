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

  const PriceBox = styled.table`
    display: grid;
    overflow: auto;
    background-color: #e1ecf5;
    min-height: 10rem;
    width: 20rem;
    border-style: solid;
    border: 3px;
    border-color: grey;
    margin-top: 6rem;
    border-radius: 5px;
  `;

  //const PriceBox = styled.div`
  //  display: grid;
  //  overflow: auto;
  //  background-color: lightpink;
  //  min-height: 10rem;
  //  width: 20rem;
  //  border-style: solid;
  //  border: 3px;
  //  border-color: grey;
  //  margin-top: 6rem;
  //`;

  const Price = styled.tr`
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    justify-content: space-evenly;
    overflow: visible;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 0.25rem;
    background-color: lightblue;
    height: 3rem;
    min-width: 13rem;

    * {
      padding-left: 0.5rem;
      padding-right: 1rem;
    }

    img {
      max-width: 64px;
    }
    span:nth-child(3) {
      margin-left: auto;
      margin-right: 1rem;
      padding: 2px;
      border: solid;
      border-radius: 5px;
      border-color: lightslategrey;
      color: red;
    }
  `;
  //const Price = styled.span`
  //  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  //  display: flex;
  //  flex-direction: row;
  //  justify-items: center;
  //  align-items: center;
  //  justify-content: space-evenly;
  //  overflow: visible;
  //  margin-left: 1rem;
  //  margin-right: 1rem;
  //  margin-top: 0.25rem;
  //  background-color: lightblue;
  //  height: 3rem;
  //  min-width: 13rem;

  //  * {
  //    padding-left: 0.5rem;
  //    padding-right: 1rem;
  //  }

  //  img {
  //    max-width: 64px;
  //  }
  //  span:nth-child(3) {
  //    margin-left: auto;
  //    margin-right: 1rem;
  //    padding: 2px;
  //    border: solid;
  //    border-radius: 5px;
  //    border-color: lightslategrey;
  //    color: red;
  //  }
  //`;

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
            <img src="https://www.yesstyle.com/_next_img/yesstyle_logo.svg">
              this is an image
            </img>
            <span>YesStyle</span>
            <span>$8.59</span>
          </Price>
          <Price>
            <img src="https://cdn.stylevana.com/skin/frontend/codazon_fastest/default/images/SV-logo-664x130.png"></img>
            <span>Stylevana</span>
            <span>$8.59</span>
          </Price>
          <Price>
            <img src="https://beautynetkorea.com/main/logo.png"></img>
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
