/**
 * vin-decoder/route.js
 */

import { NextResponse } from "next/server";
import puppeteer from "puppeteer";
import * as cheerio from "cheerio";

export async function POST(request) {
  const data = await request.json();

  const { vin } = data


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

    return NextResponse.json(tableData);
  } catch (error) {
    return NextResponse.json(
      { error: `An error occurred: ${error.message}` },
      { status: 200 }
    );
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}