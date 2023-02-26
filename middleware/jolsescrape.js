const puppet = require("puppeteer");
const { default: supabase } = require("../server/db");

//to-do
//modernize scrape
//add supabase DB

async function scrape(_url) {
  const browser = await puppet.launch();
  const page = await browser.newPage();

  await page.goto(_url);

  //get price
  const [price] = await page.$x(
    "/html/body/div[1]/div[3]/div/div[2]/div[1]/div[2]/div/div/div[1]/div[1]/div[3]/table/tbody/tr[4]/td/span[1]/span/span"
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

  //view data
const  isExisting = await supabase.from("skincare_products").select(yesstyleprice)

isExisting()

//TODO -  build out function if price is already existing, UPDATE price, if not NEW insert below

//insert data
  const {error} = await supabase.from('skincare_products').insert({
    name: "name1",
    link: "www.link.com",
    yesstyledate: dateformat;
    yesstyleprice: priceFinal;

  })

  

  //db.collection("products").doc("SayISgeHIc5fT17cRhNn").update({
  //  jolseprice: priceFinal,
  //  jolsedate: dateformat,
  //});


  browser.close();
}

scrape(
  "https://jolse.com/product/innisfree-daily-mild-sunscreen-spf50-pa-50ml/19461/"
)
