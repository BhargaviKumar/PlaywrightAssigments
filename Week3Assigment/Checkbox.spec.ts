import { expect , test} from "@playwright/test"

test("Xpath details",async ({page}) => {
    await page.goto("https://leafground.com/checkbox.xhtml");
    await page.locator(`//span[@class="ui-chkbox-label" and text()="Basic"]`).click()
    await page.locator(`//span[@class="ui-chkbox-label" and text()="Ajax"]`).click()
       await page.getByText("Checked").isVisible();

    await page.locator(`//label[text()="Java"]`).click()
    await page.locator(`//label[text()="Javascript"]`).click()
     await page.locator(`//label[text()="Others"]`).click()
  
    await page.locator(`//div[contains(@id,"TriState")]`).click()

   

const state =  await page.locator(`//div[@class="ui-growl-message"]//p`).textContent()

    console.log(state);
    
 await page.locator(`//div[@class="ui-toggleswitch-slider"]`).click()
 // await page.setDefaultTimeout(8000)
 //const switchtog  =  await page.locator(`//div[@class="ui-growl-message"]//p`).textContent()

 //    await expect(switchtog).toBe("Checked")


     
      await page.locator(`//div[contains(@class,"ui-state-disabled")]`).isDisabled()
      await page.locator(`//div[contains(@class,"ui-selectcheckboxmenu-multiple")]`).click()
      await page.locator(`//label[text()="Istanbul"]`).nth(1).click()
      await page.locator(`//label[text()="Paris"]`).nth(1).click()
      await page.locator(`//div[contains(@class,"ui-selectcheckboxmenu-multiple")]`).click()

})