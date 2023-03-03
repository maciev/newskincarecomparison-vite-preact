//const { signal } = require("@preact/signals");
//const { createContext } = require("preact");
//const { useContext } = require("preact/hooks");
import puppeteer from "puppeteer";
import dayjs from "dayjs";
import supabase from "../server/db.js";

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
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(_url);

  const [price] = await page.$x(
    "/html/body/div[3]/main/div[2]/div[2]/div[3]/span"
  );
  const priceText = await price.getProperty("textContent");
  const priceJson = await priceText.jsonValue();
  const priceFinal = priceJson.replace(/[^0-9.]/g, "").trim();

  console.log({ priceFinal, _url });

  //  data = JSON.stringify({ priceFinal });

  //const date = Date.now();
  //const dateformat = new Intl.DateTimeFormat("en-US", {
  //  year: "numeric",
  //  month: "2-digit",
  //  day: "2-digit",
  //  hour: "2-digit",
  //  minute: "2-digit",
  //  second: "2-digit",
  //}).format(date);

  const date = dayjs().format;

  const { error } = await supabase(
    process.env.VITE_SUPABASE_HOST_URL,
    process.env.VITE_SUPABASE_API_KEY
  )
    .from("skincare_pricing")
    .update({ YesStyleprice: priceFinal, YesStyleupdated_at: date })
    .eq("id", 1);

  console.log(error);

  browser.close();
}

const scrapeLink =
  "https://www.yesstyle.com/en/cosrx-aloe-soothing-sun-cream-50ml/info.html/pid.1052684630";

scrape(scrapeLink);
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

//} else {
//  //ELSE - UPDATE the data
//}

//creating context that is readable in frontend?
