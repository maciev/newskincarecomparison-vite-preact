import { render } from "preact";
import { useEffect, useLayoutEffect, useRef, useState } from "preact/hooks";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Section } from "../../components/Section/Section";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Link } from "wouter";
import { Mouse } from "puppeteer";

export function Productpage() {
  const PageWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  `;

  const SearchSection = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 4rem;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    font-weight: normal;

    & input {
      margin-top: 1rem;
      background-color: white;
      outline-width: 0.1rem;
      outline-style: solid;
      outline-color: #ebebeb;
      border-radius: 2.5px;
      height: 2rem;
      width: 16rem;

      //need to style inside of input
      & .inputfield {
        color: red;
      }
    }
  `;

  interface Products {
    product_name: string;
    image: string;
    Wishtrendlink: string;
    Stylevanalink: string;
    RoseRoselink: string;
    YesStylelink: string;
    BeautynetKorealink: string;
  }

  const [display, setDisplay] = useState(false);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef<HTMLElement>(null);
  const [products, setProducts] = useState([]);

  //useEffect(() => {
  //  database
  //    .collection("products")
  //    .onSnapshot((snapshot) =>
  //      setProducts(snapshot.docs.map((doc) => doc.data()))
  //    );
  //}, []);

  const setProductDex = (product: any) => {
    setSearch(product);
    setDisplay(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = (event: MouseEvent) => {
    //deleted current:
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  const productCardLoop = [0, 1, 2, 3];

  return (
    <>
      <PageWrapper>
        <Header></Header>
        <SearchSection ref={wrapperRef}>
          Search for products
          <input
            className="inputfield"
            type="text"
            value={search}
            onClick={() => setDisplay(!display)}
            //make sure this work below -- event vs. e
            onChange={(event) =>
              setSearch((event.target as HTMLTextAreaElement).value)
            }
          />
          {display && (
            <div>
              {products
                .filter(
                  ({ product_name }: Products) =>
                    product_name.indexOf(search.toLowerCase()) > -1
                )
                .slice(0, 5)
                .map((products: Products, index) => {
                  return (
                    <Link
                      href="/product/${products.product_name}"
                      //pathname: `/product/${products.product_name}`,
                      //state: {
                      //  product_name: products.product_name,
                      //  image: products.image,
                      //  Wishtrendlink: products.Wishtrendlink,
                      //  Stylevanalink: products.Stylevanalink,
                      //  RoseRoselink: products.RoseRoselink,
                      //  YesStylelink: products.YesStylelink,
                      //  BeautynetKorealink: products.BeautynetKorealink,
                      //},
                    >
                      <div
                        onClick={() => setProductDex(products.product_name)}
                        className="option"
                        key={products.product_name}
                        //tabIndex="0"
                      >
                        <span>{products.product_name}</span>
                        <img src={products.image} alt="product" />
                      </div>
                    </Link>
                  );
                })}
            </div>

            //   <div className="productcardbox">
            //   {products.slice(0, 4).map((products, index) => {
            //     return <ProductCard image={products.image} title={products.title} />;
            //   })}
            // </div>
          )}
          {/*LOOP PRODUCTCARD ON HOMEPAGE*/}
          {/*{productCardLoop.map((i) => (
            <ProductCard />
          ))}*/}
        </SearchSection>
        <Footer></Footer>
      </PageWrapper>
    </>
  );
}

render(<Productpage />, document.getElementById("app")!);
