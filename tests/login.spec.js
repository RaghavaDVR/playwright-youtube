const {test,expect} = require("playwright/test")

test("valid login", async function({page}){
    await page.goto("https://www.linkedin.com/checkpoint/rm/sign-in-another-account?rmDisableAutoLogin=true&midToken=AQE0M6MPCawDIA")

    await page.locator("//input[@id='username']").fill("raghavd1612@gmail.com")

    await page.locator("//input[@id='password']").fill("RAghava@1612")

    await page.locator("//button[@aria-label='Sign in']").click()

    await expect(page).toHaveURL(/feed/); 

    await page.locator("//button[@id='ember16']").click()
    

    await page.getByText("Sign Out").click()

    await expect(page).toHaveURL("https://www.linkedin.com/home");

    await page.waitForTimeout(2000)


})