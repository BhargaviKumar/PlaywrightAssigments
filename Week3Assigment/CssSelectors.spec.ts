import {test} from "@playwright/test"

test("Css selectors", async ({page}) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");

     await page.locator('//input[@id="username"]').fill("democsr2");
    await page.locator('//input[@id="password"]').fill("crmsfa");

    await page.locator('//form[@id="login"]//p//input[@class="decorativeSubmit"]').click()

    await page.locator(`//a[contains(text(),"CRM/SFA")]`).click()

    await page.locator(`//a[text()="Leads"]`).click()

    await page.locator(`//a[text()="Create Lead"]`).click()

 
    await page.locator(`//input[@id="createLeadForm_companyName"]`).fill("Motive")
    await page.locator(`//input[@id='createLeadForm_firstName']`).fill("bhargavi")
    await page.locator(`//input[@id='createLeadForm_lastName']`).fill("kumar")
    await page.locator(`//input[@id='createLeadForm_personalTitle']`).fill("Mrs")
    await page.locator(`//input[@id='createLeadForm_generalProfTitle']`).fill("SofwareEng")
    await page.locator(`//input[@id='createLeadForm_annualRevenue']`).fill("1000")
    await page.locator(`//input[@id='createLeadForm_departmentName']`).fill("IT")
    await page.locator(`//input[@id='createLeadForm_primaryPhoneNumber']`).fill("123654789")
    await page.locator(`//input[@class='smallSubmit']`).click()
    
    console.log(await page.title());
     
    
})