import {test,expect} from "@playwright/test"

import credentials from "../../Data/createLead.json";

test("Json Parameterized",async ({page}) => {
    const data = credentials;
   await page.goto("http://leaftaps.com/opentaps/control/main");

   await page.locator("#username").fill(data[0].username)
   await page.locator("#password").fill(data[0].password)

    await page.locator('.decorativeSubmit').click(); 

    await page.locator('text="CRM/SFA"').click()

    
    await page.locator(`//a[text()="Leads"]`).click()

     await page.locator(`//a[text()="Create Lead"]`).click()

 
       await expect(page.locator(`//input[@id="createLeadForm_companyName"]`)).toBeEditable();
     await page.locator(`//input[@id="createLeadForm_companyName"]`).fill(data[0].compname)
     await expect(page.locator(`//input[@id='createLeadForm_firstName']`)).toBeVisible()
     await page.locator(`//input[@id='createLeadForm_firstName']`).fill(data[0].FName)
         await expect(page.locator(`//input[@id='createLeadForm_lastName']`)).toBeEnabled();
         await page.locator(`//input[@id='createLeadForm_lastName']`).fill(data[0].LName)

         await page.locator(`//input[@id='createLeadForm_personalTitle']`).fill(data[0].personalTitle)
         await page.locator(`//input[@id='createLeadForm_generalProfTitle']`).fill(data[0].ProffTitle)
         await page.locator(`//input[@id='createLeadForm_annualRevenue']`).fill(data[0].AnnualRev)
         await page.locator(`//input[@id='createLeadForm_departmentName']`).fill(data[0].DeptName)

          await page.selectOption('//select[@id="createLeadForm_dataSourceId"]', { index: 3 });

         await page.locator(`//input[@class='smallSubmit']`).click()

})