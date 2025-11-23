DemoQA Practice Form Automation using Playwright

This repository contains a complete Playwright automation script for the Practice Form at DemoQA
The project demonstrates end-to-end form automation, element handling, and UI interaction using modern Playwright best practices.
🚀 Features Automated
✔ Personal Information
1.Fill First Name
2.Fill Last Name
3.Fill Email

✔ Select Options
1.Choose Gender (Radio Button)

Select Hobbies (Checkbox)
✔ Contact & Academic Info

Enter Mobile Number
✔Select Date of Birth

Add Subjects
✔ File & Address Handling

✔Upload File (image/doc)

Enter Address
✔ Dropdown Selections

Select State

Select City
✔ Form Submission

✔Click Submit
-Validate successful form submission

🧪 Tech Stack
✔Playwright
✔JavaScript
Playwright Test Runner
📂 Project Structure
/tests
  └── practiceForm.spec.ts
/pages
  └── formPage.ts
utils/
  └── testData.ts
playwright.config.ts
README.md
▶️ Running the Tests
npm install
npx playwright install
npx playwright test
🎯 Objective
To provide a clear demonstration of real-world form automation using Playwright, including radio buttons, checkboxes, dropdowns, file upload, auto-suggestion fields, and full form submission workflow.
