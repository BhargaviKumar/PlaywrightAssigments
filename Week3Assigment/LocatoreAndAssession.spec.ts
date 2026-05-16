import {expect , test} from "@playwright/test"

test("Xpath details",async ({page}) => {
    await page.goto("https://leaftaps.com/opentaps/control/main");

    await page.locator('//input[@id="username"]').fill("democsr2");
    await page.locator('//input[@id="password"]').fill("crmsfa");

    await page.locator('//form[@id="login"]//p//input[@class="decorativeSubmit"]').click()

    await page.locator(`//a[contains(text(),"CRM/SFA")]`).click()

    await page.locator(`//a[text()="Leads"]`).click()

     await page.locator(`//a[text()="Create Lead"]`).click()

 
       await expect(page.locator(`//input[@id="createLeadForm_companyName"]`)).toBeEditable();
     await page.locator(`//input[@id="createLeadForm_companyName"]`).fill("Motive")
     await expect(page.locator(`//input[@id='createLeadForm_firstName']`)).toBeVisible()
 await page.locator(`//input[@id='createLeadForm_firstName']`).fill("bhargavi")
         await expect(page.locator(`//input[@id='createLeadForm_lastName']`)).toBeEnabled();
         await page.locator(`//input[@id='createLeadForm_lastName']`).fill("kumar")

         await page.locator(`//input[@id='createLeadForm_personalTitle']`).fill("Mrs")
         await page.locator(`//input[@id='createLeadForm_generalProfTitle']`).fill("SofEng")
         await page.locator(`//input[@id='createLeadForm_annualRevenue']`).fill("1000")
         await page.locator(`//input[@id='createLeadForm_departmentName']`).fill("IT")

         await page.locator(`//input[@class='smallSubmit']`).click()

         await page.locator(`//a[text()="Create Lead"]`).click()

     await page.locator(`//a[text()="Find Leads"]`).click()
     await page.getByRole("textbox",{name:"First name:"}).fill("Bhargavi")
     await page.getByRole("button",{name:"Find Leads"}).click();
     await page.locator(`//a[@class="linktext"]`).nth(3).click();
      await page.getByRole("link",{name:"Edit"}).click();
await expect(page.locator(`//input[@id="updateLeadForm_companyName"]`)).toBeEnabled()
      await page.locator(`//input[@id="updateLeadForm_companyName"]`).fill("Motive")
       await page.locator(`//input[@id='updateLeadForm_annualRevenue']`).fill("1000")
        await page.locator(`//input[@id='updateLeadForm_departmentName']`).fill("IT")
        await page.locator(`//textarea[@id='updateLeadForm_description']`).fill("Updated description")

         await page.locator(`//input[@value="Update"]`).click();
})