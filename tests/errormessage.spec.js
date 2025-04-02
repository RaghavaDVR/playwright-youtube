const {test,expect} = require("playwright/test")

test("valid login", async function({page}){
    await page.goto("https://www.linkedin.com/checkpoint/rm/sign-in-another-account?rmDisableAutoLogin=true&midToken=AQE0M6MPCawDIA")

    await page.locator("//input[@id='username']").fill("raghavd1612@gmail.com")

    await page.locator("//input[@id='password']").fill("Rva@1612")

    await page.locator("//button[@aria-label='Sign in']").click()

    const errormessage=await page.locator("//div[@id='error-for-password']").textContent()

   console.log("Error message is "+errormessage);

})
   