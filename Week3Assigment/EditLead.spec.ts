import {test} from "@playwright/test"

test("Css selectors", async ({page}) => {
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator('#username').fill("dilipkumar.rajendran@testleaf.com");
    await page.locator('#password').fill("TestLeaf@2025");

    await page.locator('#Login').click();
    
    await page.locator('//button[@title="App Launcher"]').click();
    await page.locator('//button[@aria-label="View All Applications"]').click();
     await page.locator('//p[text()="Sales"]').click();
  await page.locator('//a[@title="Leads"]').click();

    
  await page.locator('//div[@class="uiPopupTrigger"]/following::a[@title="Show 4 more actions"]').click();
  await page.locator('//a[@title="Edit"]').click();
    await page.locator('//button[@name="salutation"]').click();
    await page.locator('//span[@title="Mrs."]').click();
    await page.locator('//input[@name="lastName"]').fill("BhargaviKumar");
    await page.locator('//input[@name="Company"]').fill("MotiveSoftware");
  await page.locator('//button[@name="SaveEdit"]').click();

  

})