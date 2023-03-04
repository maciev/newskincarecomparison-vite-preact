import { render } from "preact";
import { useEffect, useLayoutEffect, useRef, useState } from "preact/hooks";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Section } from "../../components/Section/Section";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Link } from "wouter";
import { createClient } from "@supabase/supabase-js";

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
      margin-bottom: 1rem;
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

  const OptionDiv = styled.div`
    background-color: lightgreen;
  `;

  interface StateProperties {
    product_name: string;
    //image: string;
    //Wishtrendlink: string;
    //Stylevanalink: string;
    //RoseRoselink: string;
    //YesStylelink: string;
    //BeautynetKorealink: string;
  }

  const [display, setDisplay] = useState(false);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef<HTMLElement>(null);
  const [products, setProducts] = useState<any>();
  //const [products, setProducts] = useState<StateProperties[]>([]);

  const supabase = createClient();

  //LATER - FIX TS Types
  useEffect(() => {
    const fetchDatabase = async () => {
      const { data, error } = await supabase
        .from("skincare_products")
        .select("product_name");
      console.log({ data, error });
      setProducts(data);
    };
    fetchDatabase();
  }, []);

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

  //fix TS Type
  const handleClickOutside = (event: any) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

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
                  ({ product_name }) =>
                    product_name.indexOf(search.toLowerCase()) > -1
                )
                .slice(0, 5)
                .map((products, index) => {
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
                      <OptionDiv
                        onClick={() => setProductDex(products.product_name)}
                        key={products.product_name}
                        //tabIndex="0"
                      >
                        <span>{products.product_name}</span>
                        <img src={products.image} alt="product" />
                      </OptionDiv>
                    </Link>
                  );
                })}
            </div>
          )}
        </SearchSection>
        <Footer></Footer>
      </PageWrapper>
    </>
  );
}
render(<Productpage />, document.getElementById("app")!);
