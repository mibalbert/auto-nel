/**
 * form-actions.js
 */

"use server"

// export async function vinDecoderReq(prevState, formData) {
//   try {
//     // if (!await formData.get("vin")) {
//     //   return { message: "error" }
//     // }
//     const vin = await formData.get("vin")
//     const res = await fetch(`http://localhost:3000/vin-decoder`, {
//       method: "POST",
//       data: JSON.stringify(vin),
//       headers: 'application/json'
//     })
//     // console.log(res)
//     const data = await res.json()

//     // console.log(res)
//     // const 

//     return { message: "Success", make: data.make, model: data.model }
//   } catch (error) {
//     return { message: "Error" }
//   }
// }



import puppeteer from "puppeteer";
import * as cheerio from "cheerio";

export async function vinDecoderReq(prevState, formData) {
  // const data = await request.json();

  const vin = await formData.get("vin")


  console.log("first")

  if (!vin) {
    return NextResponse.json(
      { error: "Search parameter not provided" },
      { status: 400 }
    );
  }
  let browser;

  try {
    browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.goto(`https://en.vindecoder.pl/${vin}`);
    // await page.type("#twotabsearchtextbox", userSearch);
    // await page.keyboard.press("Enter");


    await page.waitForSelector("table.table.table-striped.table-two-col");
    // await page.waitForNavigation();


    const html = await page.content(); //get the entire html content
    const $ = cheerio.load(html); //load the html content


    const tableData = {};
    $("table.table.table-striped.table-two-col tbody tr").each((index, element) => {
      const th = $(element).find("th").text().trim();
      const td = $(element).find("td").text().trim();
      tableData[th] = td;
    });
    console.log("asdasdas", tableData)
    return { message: "Success", make: tableData.Make, model: tableData.Model, year: tableData['Model year'] }
  } catch (error) {
    return { message: "eror" }
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}