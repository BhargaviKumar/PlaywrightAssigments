import {test, expect} from "@playwright/test"

test("WindowHandling",async ({page, context}) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");
  
    await page.locator(`[id="username"]`).fill("demosalesmanager")
    await page.locator('[id="password"]').fill("crmsfa")
    await page.locator('[class="decorativeSubmit"]').click()

    await page.locator('[id="button"]').click()
    await page.locator('//a[text()="Leads"]').click()
    
    await page.locator('//a[text()="Leads"]').click()
    await page.locator('//a[text()="Merge Leads"]').click()


    const [childPage] = await Promise.all([context.waitForEvent("page"), page.locator('//img[@alt="Lookup"]').first().click()])
    await  childPage.waitForLoadState("networkidle");
    
    await childPage.locator('//a[@class="linktext"]').first().click()

    await page.bringToFront()

    const [childPage2] = await Promise.all([context.waitForEvent("page"), page.locator('//img[@alt="Lookup"]').last().click()])
    await  childPage2.waitForLoadState("networkidle");
    await childPage2.locator('//a[text()="10108"]').click();

    await page.bringToFront()

    page.locator('//a[@class="buttonDangerous"]').click();

    page.on("dialog",async (alert) => {
        await alert.accept()
    })

    await expect(page.locator('[class="tabletext"]')).toBe("communities (10109)");

})