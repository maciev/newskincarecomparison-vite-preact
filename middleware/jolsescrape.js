//const { signal } = require("@preact/signals");
//const { createContext } = require("preact");
//const { useContext } = require("preact/hooks");

import puppeteer, { Puppeteer } from "puppeteer";
//const puppet = require("puppeteer");

//const { default: supabase } = require("../server/db");

//export function createAppState() {
//  const products = signal([{ price: 0 }]);

//  return { products };
//}

//export const productsSignal = signal({
//  name: "name1",
//  link: "www.link.com",
//  yesstyledate: dateformat,
//  yesstyleprice: priceFinal,
//});

async function scrape(_url) {
  const scrapeLink =
    "https://jolse.com/product/skin1004-madagascar-centella-hyalu-cica-water-fit-sun-serum-50ml-spf50/61929/category/1/display/22/";
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(_url);

  //get price
  const [price] = await page.$x(
    "/html/body/div[4]/div[1]/div/div[2]/div[2]/div[1]/div[2]/div[6]/span/strong/em"
  );
  const priceText = await price.getProperty("textContent");
  const priceJson = await priceText.jsonValue();
  const priceFinal = priceJson.replace("\\n", "").trim();

  console.log({ priceFinal, _url });

  //let fs = require("fs"),
  //  data = JSON.stringify({ priceFinal });

  const date = Date.now();
  const dateformat = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);

  scrape(scrapeLink);
  console.log(scrape);
  browser.close();
}
//view data, conditionally if price !0-- TODO ADD Matching ID

//const queryisExisting = async () => {
//  const result = await supabase.from("skincare_products").select(yesstyleprice);
//  return result;
//};

//async () => {
//  const existingQuery = await queryIsExisting();
//  console.log(existingQuery);
//};

//if (existingQuery === 0) {
//  // Run the scraper and INSERT

//  scrape(
//    scrapeLink
//  );

//  const insertData = await supabase.from("skincare_products").insert({
//    name: "name1",
//    link: "www.link.com",
//    yesstyledate: dateformat,
//    yesstyleprice: existingQuery,
//  });
//  insertData();
//} else {
//  //ELSE - UPDATE the data
//}

//creating context that is readable in frontend?
