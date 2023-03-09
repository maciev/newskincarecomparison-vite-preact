import { render } from "preact";
import { useEffect, useLayoutEffect, useRef, useState } from "preact/hooks";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Section } from "../../components/Section/Section";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Link, Route } from "wouter";
import { createClient } from "@supabase/supabase-js";
import { signal, computed, effect } from "@preact/signals";
import useDebounce from "../../middleware/useDebounce";

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

export function Homescreen() {
  const [display, setDisplay] = useState(true);
  const [search, setSearch] = useState<any>("");
  const wrapperRef = useRef<HTMLElement>(null);
  const [products, setProducts] = useState<any>(null);

  useEffect(() => {
    setProducts([
      {
        product_name: "COSRX - Aloe Soothing Sun Cream",

        image:
          "https://d1flfk77wl2xk4.cloudfront.net/Assets/27/811/XL_p0056481127.png",
      },

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

      {
        product_name: "COSRX Advanced Snail 92 All-in-one Cream",

        image:
          "https://cdn.shopify.com/s/files/1/0513/3775/6828/products/5_900x.png?v=1663711555",
      },
    ]);
  }, []);

  //if (!products) {
  //  console.log("products lasdfasfd");
  //} else {
  //  setTimeout(() => {
  //    console.log(products[0].product_name);
  //  }, 100);
  //}

  //const supabase = createClient();

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

  //const setProductDex = (product: any) => {
  //  search.value(product);
  //  setDisplay(false);
  //};

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: any) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  const setProductDex = (product) => {
    setSearch(product);
    setDisplay(false);
  };

  //const handleChange = useDebounce((e: React.ChangeEvent) => {
  //  e.preventDefault();
  //  setSearch(e.target?.addEventListener);
  //  console.log();
  //}, 500);

  //if (search.length > 0) {
  //  setTimeout(() => {
  //    products.filter((product_name) => {
  //      return products.product_name.match(search);
  //    });
  //  }, 100);
  //

  const newFunction = useDebounce((event) => {
    setSearch(event.target.value);
  }, 2000);

  console.log(search);

  return (
    <>
      <PageWrapper>
        <Header></Header>
        <SearchSection ref={wrapperRef}>
          Search for products
          <input
            type="text"
            placeholder="Search here"
            onChange={newFunction}
            value={search}
          />
          {display && (
            <div>
              {products
                ?.filter(({ product_name }) =>
                  product_name.toLowerCase().includes(search)
                )

                //.slice(0, 5)
                .map((products) => {
                  return (
                    <Link href={`products/${products}`}>
                      <OptionDiv
                        onClick={() =>
                          setProductDex(products && products.product_name)
                        }
                        key={products && products.product_name}
                        tabIndex="0"
                      >
                        <div>
                          <img src={products && products.image} alt="product" />
                        </div>
                        <span>{products && products.product_name}</span>
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
