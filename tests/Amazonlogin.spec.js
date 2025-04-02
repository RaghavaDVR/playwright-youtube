const {test,expect}=require("@playwright/test")

test("Validate my Amazon account login", async function({page}){

 await page.goto("https://www.amazon.com/ap/signin?openid.pape.max_auth_age=900&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fyourstore%2Fhome%3Fpath%3D%252Fgp%252Fyourstore%252Fhome%26useRedirectOnSuccess%3D1%26signIn%3D1%26action%3Dsign-out%26ref_%3Dnav_AccountFlyout_signout&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0")
 await page.setViewportSize({ width: 1920, height: 1080 })
 await page.locator("//input[@id='ap_email']").fill("raghava.devireddy@gmail.com",{delay:400})
 await page.locator("//input[@id='continue']").click()
 await page.locator("//input[@id='ap_password']").fill("RAghava@1612",{delay:400})
 await page.locator("//input[@id='signInSubmit']").click()
 await page.waitForTimeout(2000)
 const searchInput= await page.locator("//input[@id='twotabsearchtextbox']")
 await searchInput.fill("water bottle")
 await page.locator("//input[@id='nav-search-submit-button']").click()
 const result = await page.locator("//div[@id='s-refinements']").first().textContent()
 if (result && result.toLowerCase().includes("water bottle")){
    console.log("Found the water bottle");
 }
 else{
    console.log("Water bottle not found");
 }

})