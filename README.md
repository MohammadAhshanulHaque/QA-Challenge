For this QA challenge I use Playwright which is an open-source test automation framework & VS Code (Visual Studio Code).

Environment Setup for Playwright: 

a. Install Node.js 

b. Create a Project Folder 

c. Initialize a Node.js Project 

d. Install Playwright 

e. Create First Test [npx playwright test –init] This will create a playwright.config.js & set up a “tests” folder with an example test

project structure that looks like:   

playwright Automation --> tests --> TestLogIn_1st_Credential.spec.js  

playwright Automation --> tests --> TestLogIn_2nd_Credential.spec.js

f. How to run test scripts: [Below are the 2 spec.js files of my test scripts for the QA quiz]    

[npx playwright test TestLogIn_1st_Credential.spec.js --headed]                                                                                                       [npx playwright test TestLogIn_2nd_Credential.spec.js --headed]

g. How to show HTML report:                                                                                                                                        [npx playwright show-report]

NB: For automation test scripts I use Codegen which is the built-in Playwright tool that records the actions in the browser and automatically generates the test scripts.
[npx playwright codegen -o tests/ TestLogIn_1st_Credential.spec.js]                                                                                                   [npx playwright codegen -o tests/ TestLogIn_2nd_Credential.spec.js]

Test Scenarios Covered for both the script files:  

[TestLogIn_1st_Credential.spec.js]                                                                                                                  [TestLogIn_2nd_Credential.spec.js]

   1.	Verify browser has correct title
   2.	Verify the Login page has the correct header
   3.	Verify Successful Login with valid credentials
   4.	Verify user information for SomeUser_name
   5.	Verify Login failed with invalid username & valid password
   6.	Verify Login failed with a valid username & an invalid password
   7.	Verify Login failed with invalid username & invalid password
   8.	Verify Login failed with blank username & blank password
