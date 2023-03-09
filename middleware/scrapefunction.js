//const { signal } = require("@preact/signals");
//const { createContext } = require("preact");
//const { useContext } = require("preact/hooks");
import puppeteer from "puppeteer";
import dayjs from "dayjs";
import { createClient } from "@supabase/supabase-js";

//pass state == ID

//check if updated

const supabase = await createClient();

const sevenDays = "240140300";
const now = Date.now();

async function viewData() {
  const time = await supabase
    .from("skincare_pricing")
    .select(
      `YesStyleupdated_at, BeautynetKoreaupdated_at, RoseRoseupdated_at, Stylevanaupdated_at, Wishtrendupdated_at`
    )
    .eq("id", 1); // NEED TO UPDATE DYNAMICALLY
  return time;
}
viewData(() => {
  switch (true) {
    case now - Date.parse(YesStyleupdated_at > sevenDays):
      console.log("greater than seven days -- scrape YesStyle");
      YesStylescrape();
      break;
  }
});

//case now - Date.parse(time.data[0].BeautynetKoreaupdated_at > sevenDays):
//  console.log("greater than seven days -- scrape Beautynet");
//  YesStylescrape();
//  break;
//case now - Date.parse(time.data[0].RoseRoseupdated_at > sevenDays):
//  console.log("greater than seven days -- scrape RoseRose");
//  YesStylescrape();
//  break;
//case now - Date.parse(time.data[0].Stylevanaupdated_at > sevenDays):
//  console.log("greater than seven days -- scrape Stylevana");
//  YesStylescrape();
//  break;
//case now - Date.parse(time.data[0].Wishtrendupdated_at > sevenDays):
//  console.log("greater than seven days -- scrape WIshtrend");
//  YesStylescrape();
//  break;
//}

//console.log(Date.now() - Date.parse(time.data[0].RoseRoseupdated_at));
//return Date.now() - Date.parse(time.data[0].RoseRoseupdated_at);

//viewData().then(async (result) => {
//  if (result < "240140300") {
//    console.log("don't scrape less than 7 days");
//  } else {//    RoseRosescrape();
//  }
//});

async function YesStylescrape() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  async function dynamicScrapeLink() {
    const response = await supabase
      .from("skincare_links")
      .select("YesStylelink")
      .eq("id", 1);
    return response;
  }
  dynamicScrapeLink(async () => {
    await page.goto(response);
  });

  const [price] = await page.$x(
    "/html/body/div[3]/main/div[2]/div[2]/div[3]/span"
  );
  const priceText = await price.getProperty("textContent");
  const priceJson = await priceText.jsonValue();
  const priceFinal = priceJson.replace(/[^0-9.]/g, "").trim();

  const date = dayjs().format;
  console.log({ priceFinal, _url, date });

  const { data, error } = await supabase
    .from("skincare_pricing")
    .update({ YesStyleprice: priceFinal, YesStyleupdated_at: date })
    .eq("id", 1);

  browser.close();
}

async function BeautynetKoreascrape() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const supabase = await createClient();

  async function dynamicScrapeLink() {
    const response = await supabase
      .from("skincare_products")
      .select("BeautyNetKorealink")
      .eq("id", 1);
    return response;
  }

  await page.goto(_url);

  const [price] = await page.$x(
    "/html/body/div[2]/div[3]/div/div[2]/div[1]/div[2]/div[2]/div/div[4]/span/strong/em"
  );
  const priceText = await price.getProperty("textContent");
  const priceJson = await priceText.jsonValue();
  const priceFinal = priceJson.replace(/[^0-9.]/g, "").trim();

  const date = dayjs().format;
  console.log({ priceFinal, _url, date });

  const { data, error } = await supabase
    .from("skincare_pricing")
    .update({ BeautynetKoreaprice: priceFinal, BeautynetKoreaupdated_at: date })
    .eq("id", 1);

  browser.close();
}

async function RoseRosescrape(_url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const supabase = await createClient();

  //async function dynamicScrapeLink() {
  //  const response = await supabase
  //    .from("KEY_skincare_")
  //    .select("RoseRoselink")
  //    .eq("id", 1);
  //  return response;
  //}

  await page.goto(_url);

  const [price] = await page.$x(
    "/html/body/div[1]/div[3]/div/div/div[1]/div/div[2]/div/p[1]/span[1]"
  );
  const priceText = await price.getProperty("textContent");
  const priceJson = await priceText.jsonValue();
  const priceFinal = priceJson.replace(/[^0-9.]/g, "").trim();

  const date = dayjs().format;
  console.log({ priceFinal, _url, date });

  const { data, error } = await supabase
    .from("skincare_pricing")
    .update({ RoseRoseprice: priceFinal, RoseRoseupdated_at: date })
    .eq("id", 1);

  browser.close();
}
//test
async function Stylevanascrape(_url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const supabase = await createClient();

  async function dynamicScrapeLink() {
    const response = await supabase
      .from("skincare_products")
      .select("Stylevanalink")
      .eq("id", 1);
    return response;
  }

  await page.goto(_url);

  const [price] = await page.$x(
    "/html/body/div[1]/div/div[4]/div/div[2]/div[1]/div/div/div[3]/div[1]/form/div[2]/div/div/div[2]/div/div[2]/div/div[1]/div[2]/p[1]/span[2]"
  );
  const priceText = await price.getProperty("textContent");
  const priceJson = await priceText.jsonValue();
  const priceFinal = priceJson.replace(/[^0-9.]/g, "").trim();

  const date = dayjs().format;
  console.log({ priceFinal, _url, date });

  const { data, error } = await supabase
    .from("skincare_pricing")
    .update({ Stylevanaprice: priceFinal, Stylevanaupdated_at: date })
    .eq("id", 1);

  browser.close();
}

async function Wishtrendscrape() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const supabase = await createClient();

  async function dynamicScrapeLink() {
    const response = await supabase
      .from("skincare_products")
      .select("Wishtrendlink")
      .eq("id", 1);
    return response;
  }

  await page.goto(_url);

  const [price] = await page.$x(
    "/html/body/main/div[2]/section/div[1]/div[1]/div/div/div/div[2]/div/div/form/div[1]/div[3]/div[1]/div/span[1]"
  );
  const priceText = await price.getProperty("textContent");
  const priceJson = await priceText.jsonValue();
  const priceFinal = priceJson.replace(/[^0-9.]/g, "").trim();

  const date = dayjs().format;
  console.log({ priceFinal, _url, date });

  const { data, error } = await supabase
    .from("skincare_pricing")
    .update({ Wishtrendprice: priceFinal, Wishtrendupdated_at: date })
    .eq("id", 1);

  browser.close();
}

//async function dynamicScrapeLink() {
//  try {
//    let { data, error } = await supabase
//      .from("skincare_links")
//      .select("RoseRoselink")
//      .eq("id", 1);
//    console.log(data);
//    return data;
//  } catch (error) {
//    console.log(error);
//  }
//}
