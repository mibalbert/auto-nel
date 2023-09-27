/**
 * form-actions.js
 */

"use server"




import puppeteer from "puppeteer";
import * as cheerio from "cheerio";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

export async function vinDecoderReq(prevState, formData) {

  const vin = await formData.get("vin");

  if (!vin || vin.length !== 17) {
    return { error: "You must enter a valid VIN! It must be 17 characters long" };
  }
  let browser;

  try {
    browser = await puppeteer.launch({ headless: "new" }); // Use headless: true for running Puppeteer without a visible browser window
    const page = await browser.newPage();
    await page.goto(`https://en.vindecoder.pl/${vin}`);

    const tableSelector = "table.table.table-striped.table-two-col";
    await page.waitForSelector(tableSelector);

    const html = await page.content();
    const $ = cheerio.load(html);

    const tableData = {};
    $("table.table.table-striped.table-two-col tbody tr").each((index, element) => {
      const th = $(element).find("th").text().trim();
      const td = $(element).find("td").text().trim();
      tableData[th] = td;
    });
    revalidatePath('/')
    if (Object.keys(tableData).length === 0) {
      return { error: "Invalid VIN or VIN not found" };
    }

    return {
      message: "Success",
      make: tableData.Make,
      model: tableData.Model,
      year: tableData['Model year']
    };
  } catch (error) {
    return { error: "An error occurred while decoding the VIN" };
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}



export async function indvDetailsReq(prevState, formData) {


}