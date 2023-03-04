//const { signal } = require("@preact/signals");
//const { createContext } = require("preact");
//const { useContext } = require("preact/hooks");
import puppeteer from "puppeteer";
import dayjs from "dayjs";
import { createClient } from "@supabase/supabase-js";
//import supabase from "../server/db.js";

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

  const date = dayjs().format;
  console.log({ priceFinal, _url, date });

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

  const { data, error } = await supabase
    .from("skincare_pricing")
    .update({ YesStyleprice: priceFinal, YesStyleupdated_at: date })
    .eq("id", 1);

  browser.close();
}

//SAME DAY LOGIC BELOW - ADD SUPABASE DETAILS
const supabase = await createClient();

//logic -- if less than 7 days, dont scrape
async function viewData() {
  const response = await supabase
    .from("skincare_pricing")
    .select("YesStyleupdated_at")
    .eq("id", 1);
  console.log(Date.now() - Date.parse(response.data[0].YesStyleupdated_at));
  return Date.now() - Date.parse(response.data[0].YesStyleupdated_at);
}

//viewData().then();

async function dynamicScrapeLink() {
  const response = await supabase
    .from("skincare_products")
    .select("YesStylelink")
    .eq("id", 1);
  return response;
}
const scrapeLink = await dynamicScrapeLink().then(scrape);

viewData().then(async (result) => {
  if (result < "1") {
    console.log("don't scrape less than 7 days");
  } else {
    scrapeLink;
  }
});
