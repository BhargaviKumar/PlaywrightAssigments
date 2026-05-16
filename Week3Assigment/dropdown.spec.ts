import { expect , test} from "@playwright/test"

test("Xpath details",async ({page}) => {
    await page.goto("https://leafground.com/select.xhtml");
    await page.selectOption(`.ui-selectonemenu`,{label: 'Selenium'})

    await page.setDefaultTimeout(5000)

   const numele = await page.locator(`.ui-selectonemenu`);
   const couele = await numele.count()

   for ( let i=0; i < couele; i++)
   {
    console.log(await numele.nth(i).innerText());
    
   }

    await page.locator(`//div[contains(@id,'country') and @role='combobox']`).click()
    await page.locator(`//li[text()='India']`).click()

    await page.locator(`//div[contains(@id,'city') and @role='combobox']`).click()
    await page.locator(`//li[text()='Chennai']`).click()

    await page.locator(`//div[@role='application']//button`).click()
     await page.locator(`//li[text()='Playwright']`).click()

      await page.locator(`//div[@role='application']//button`).click()
     await page.locator(`//li[text()='PostMan']`).click()


         await page.locator(`//div[contains(@id,'lang') and @role='combobox']`).click()
         await page.locator(`//li[text()='Tamil']`).click()

       const webele = await page.locator(`//div[contains(@id,'lang') and @role='combobox']`)
       const coulang = await webele.count();
       
       for(let j=0; j < coulang ; j++)
       {
        console.log(await webele.nth(j).innerText());
        
       }

           await page.locator(`//div[contains(@id,'value') and @role='combobox']`).click()
           
              await page.locator(`//li[contains(@id,'value_1')]`).click()

})