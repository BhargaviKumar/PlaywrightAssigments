import {test} from "@playwright/test"
import path from "path";

test("FileUpload",async ({page}) => {
       await page.goto("https://the-internet.herokuapp.com/upload");
       const filetodrop =  page.waitForEvent("filechooser")
       await page.locator(`[id="drag-drop-upload"]`).click();

       const fileup =await filetodrop
       await fileup.setFiles([path.join(__dirname,"../../Data/Hello.txt"),path.join(__dirname,"../../Data/Welcome.txt")])

})

test.only ("FileDownload",async ({page}) => {
       await page.goto("https://the-internet.herokuapp.com/download");
       const filetodrop =  page.waitForEvent("download")
       await page.locator(`//a[text()="oversized_limit_test.png"]`).click();

       const filedown =await filetodrop
       await filedown.saveAs(path.join(__dirname,"../../Data/${fDown.suggestedFilename()}"))

})