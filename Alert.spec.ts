import {test, expect} from "@playwright/test"


test("Alert",async ({page}) => {
     await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");

     page.on("dialog", async (alert) => {
        console.log(`Messgae inside the  alert ${alert.message()}`);
        console.log(`Messgae inside the  alert ${alert.type()}`);
        await alert.accept();
     })

     const framepg =  page.frameLocator(`[id="iframeResult"]`)
     await framepg.locator('button:has-text("Try it")').click()
   
     console.log(await framepg.locator(`[id="demo"]`).allInnerTexts());
      


})