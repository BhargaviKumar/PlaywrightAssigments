import {chromium, firefox, test} from "@playwright/test"
import { channel } from "node:diagnostics_channel"

test("Test To launch the browser" , async()=> {

    const browser = await chromium.launch({headless:false, channel:"msedge"})  
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://www.redbus.in/")
  console.log( "RED Bus Title :",await page.title() )
    console.log("RED Bus URL :", await page.url() )

    const browser1 = await firefox.launch({headless:false})  
    const context1 = await browser1.newContext()
    const page1 = await context1.newPage()
    await page1.goto("https://www.flipkart.in")
  console.log( " Flipkart Title :",await page1.title() )
    console.log("Flipkart URL  :", await page1.url() )

  



})