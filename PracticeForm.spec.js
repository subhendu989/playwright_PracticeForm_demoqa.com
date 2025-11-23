const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false });//headless মানে হলো, আপনি ভিজুয়ালি দেকখতে পারবেন না। এটা false রেখেছি, অর্থাৎ দেখতে পারবেন
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://demoqa.com/");
  await page.waitForTimeout(1000); // optional small wait
  await page.locator("h5", { hasText: "Forms"}).click();
  await page.waitForTimeout(1000); // optional small wait

  await page.locator("span.text", { hasText: "Practice Form"}).click();
  await page.waitForTimeout(1000); // optional small wait

  await page.fill('#firstName', 'subhendu'); //firstName
  await page.waitForTimeout(1000); // optional small wait
  await page.fill('#lastName', 'setu'); //lastName
  await page.waitForTimeout(1000); // optional small wait
  await page.fill('#userEmail', 'test@example.com'); //email
  await page.waitForTimeout(1000); // optional small wait

  //RadioButton (Gender)
  await page.click("label[for='gender-radio-1']");
  await page.waitForTimeout(1000); // optional small wait
  await page.fill('#userNumber', '0123456789');
  await page.waitForTimeout(1000); // optional small wait

  await page.fill('#dateOfBirthInput', '26 Oct 1996');
    await page.keyboard.press('Enter');
    
    // Subjects (multiple)
  const subjects = ['Maths', 'English', 'Physics'];

for (const sub of subjects) {
  await page.locator('#subjectsInput').click();
  await page.locator('#subjectsInput').type(sub, { delay: 150 });
  await page.waitForTimeout(300); // allow dropdown to appear
  await page.keyboard.press('Enter');
}
//hobies
 await page.locator("label[for='hobbies-checkbox-1']").click();
 await page.locator("label[for='hobbies-checkbox-3']").click();
 //select picture
 await page.setInputFiles('#uploadPicture', 'images.jpeg');

//address
await page.fill('#currentAddress', 'Dhaka, Bangladesh');

//state 
await page.locator('#state').click();
await page.locator('div[id^="react-select-3-option-1"]').click();

//city
await page.locator('#city').click();
await page.locator('div[id^="react-select-4-option-2"]').click();
//submit
await page.click('#submit');
await page.waitForTimeout(1000); // optional small wait






})();