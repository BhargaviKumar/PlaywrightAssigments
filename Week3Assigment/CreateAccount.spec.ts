import { expect , test} from "@playwright/test"

test("Xpath details",async ({page}) => {
    await page.goto("https://login.salesforce.com/");

    await page.getByRole("textbox",{name:"Username"}).fill("dilipkumar.rajendran@testleaf.com")
    await page.getByRole("textbox",{name:"Password"}).fill("TestLeaf@2025");
    await page.locator('#Login').click();

        
 await expect(page).toHaveTitle("To open last HTML report run:");
 await expect(page).toHaveURL("https://testleaf.my.salesforce.com/secur/frontdoor.jsp?sid=00DdN00000nNHIT%21AQEAQEdrBU9BarVT7Hgr5B3Ax5I0eIDewl0xyIcUsZ_D_ehZBKo_UBZN07fESjAkPbnsQ9VWDf8yXBmJLi8qKl3bcj7n_1jZ&apv=1&allp=1&cshc=N0000083XEBN00000nNHIT&display=page");

 await page.locator(`//button[@class="slds-button slds-context-bar__button slds-icon-waffle_container slds-show"]`).click();
 await page.getByText("View All").click();
 await page.locator(`//input[@placeholder="Search apps or items..."]`).fill("Service")
 await page.locator(`//a[@class="slds-text-heading_small"]`).nth(0).click();
 await page.locator(`.slds-truncate`).click()
 await page.getByRole("button",{name:"New"}).click();
 await page.locator(`[name="Name"]`).fill("Bhargavi")
 await page.locator(`//button[@name="SaveEdit"]`).click();
 

})