import { render } from "preact";
import { useEffect, useLayoutEffect, useRef, useState } from "preact/hooks";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Section } from "../../components/Section/Section";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Link } from "wouter";
import { createClient } from "@supabase/supabase-js";

export function Homescreen() {
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
    display: flex;
    margin-bottom: 0.5rem;
    align-items: center;
    justify-content: flex-start;
    background-color: #b9edb9;
    width: 16rem;
    height: 4rem;

    &:hover {
      transition-delay: 0.2s;
      background-color: #daf3da;
    }

    & div {
      display: flex;
      justify-content: center;
      align-items: center;

      & img {
        padding: 1rem;
        max-height: 4rem;
      }
    }

    & span {
      display: flex;
      justify-items: end;
      align-items: end;
    }
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

  console.log(products);
  useEffect(() => {
    setProducts([
      {
        product_name: "COSRX - Aloe Soothing Sun Cream",

        image:
          "https://d1flfk77wl2xk4.cloudfront.net/Assets/27/811/XL_p0056481127.png",
      },
      ,
      {
        product_name: "Isntree Mugwort Calming Clay Mask",

        image:
          "https://cdn.shopify.com/s/files/1/0249/1218/products/Mugwort_calming_clay_mask_100ml_thumbnail_whitebackground_1_860x.png?",
      },
      ,
      {
        product_name: "Isntree Chestnut AHA 8% Clear Essence Mini",

        image:
          "https://d1flfk77wl2xk4.cloudfront.net/Assets/06/271/XL_p0091927106.jpg",
      },
      ,
      {
        product_name: "COSRX Advanced Snail 92 All-in-one Cream",

        image:
          "https://cdn.shopify.com/s/files/1/0513/3775/6828/products/5_900x.png?v=1663711555",
      },
      ,
    ]);
  }, []);

  console.log(products);
  const supabase = createClient();

  //LATER - FIX TS Types
  //useEffect(() => {
  //  const fetchDatabase = async () => {
  //    const { data, error } = await supabase
  //      .from("skincare_products")
  //      .select("product_name");
  //    console.log({ data, error });
  //    setProducts(data);
  //  };
  //  fetchDatabase();
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
            onChange={(event) => setSearch(event.currentTarget.value)}
          />
          {display && (
            <div>
              {products.product_name
                //.filter(
                //  ({ product_name }) =>
                //    product_name.indexOf(search.toLowerCase()) > -1
                //)
                //.slice(0, 5)
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
                        <div>
                          <img src={products.image} alt="product" />
                        </div>
                        <span>{products.product_name}</span>
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
render(<Homescreen />, document.getElementById("app")!);
